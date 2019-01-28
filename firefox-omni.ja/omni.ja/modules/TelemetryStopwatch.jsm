/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */
 "use strict";

var EXPORTED_SYMBOLS = ["TelemetryStopwatch"];

ChromeUtils.import("resource://gre/modules/Services.jsm");
ChromeUtils.defineModuleGetter(this, "Log",
  "resource://gre/modules/Log.jsm");

// Weak map does not allow using null objects as keys. These objects are used
// as 'null' placeholders.
const NULL_OBJECT = {};
const NULL_KEY = {};

/**
 * Timers is a variation of a Map used for storing information about running
 * Stopwatches. Timers has the following data structure:
 *
 * {
 *    "HISTOGRAM_NAME": WeakMap {
 *      Object || NULL_OBJECT: Map {
 *        "KEY" || NULL_KEY: startTime
 *        ...
 *      }
 *      ...
 *    }
 *    ...
 * }
 *
 *
 * @example
 * // Stores current time for a keyed histogram "PLAYING_WITH_CUTE_ANIMALS".
 * Timers.put("PLAYING_WITH_CUTE_ANIMALS", null, "CATS", Date.now());
 *
 * @example
 * // Returns information about a simple Stopwatch.
 * let startTime = Timers.get("PLAYING_WITH_CUTE_ANIMALS", null, "CATS");
 */
const Timers = {
  _timers: new Map(),

  _inSeconds: new Set(),

  _validTypes(histogram, obj, key) {
    const nonEmptyString = value => {
      return typeof value === "string" && value !== "" && value.length > 0;
    };
    return nonEmptyString(histogram) &&
            typeof obj == "object" &&
           (key === NULL_KEY || nonEmptyString(key));
  },

  get(histogram, obj, key) {
    key = key === null ? NULL_KEY : key;
    obj = obj || NULL_OBJECT;

    if (!this.has(histogram, obj, key)) {
      return null;
    }

    return this._timers.get(histogram).get(obj).get(key);
  },

  put(histogram, obj, key, startTime, {inSeconds} = {}) {
    key = key === null ? NULL_KEY : key;
    obj = obj || NULL_OBJECT;

    if (!this._validTypes(histogram, obj, key)) {
      return false;
    }

    if (inSeconds) {
      this._inSeconds.add(histogram);
    }

    const objectMap = this._timers.get(histogram) || new WeakMap();
    const keyedInfo = objectMap.get(obj) || new Map();
    keyedInfo.set(key, startTime);
    objectMap.set(obj, keyedInfo);
    this._timers.set(histogram, objectMap);
    return true;
  },

  has(histogram, obj, key) {
    key = key === null ? NULL_KEY : key;
    obj = obj || NULL_OBJECT;

    return this._timers.has(histogram) &&
      this._timers.get(histogram).has(obj) &&
      this._timers.get(histogram).get(obj).has(key);
  },

  delete(histogram, obj, key) {
    key = key === null ? NULL_KEY : key;
    obj = obj || NULL_OBJECT;

    if (!this.has(histogram, obj, key)) {
      return false;
    }

    this._inSeconds.delete(histogram);

    const objectMap = this._timers.get(histogram);
    const keyedInfo = objectMap.get(obj);
    if (keyedInfo.size > 1) {
      keyedInfo.delete(key);
      return true;
    }
    objectMap.delete(obj);
    // NOTE:
    // We never delete empty objecMaps from this._timers because there is no
    // nice solution for tracking the number of objects in a WeakMap.
    // WeakMap is not enumerable, so we can't deterministically say when it's
    // empty. We accept that trade-off here, given that entries for short-lived
    // objects will go away when they are no longer referenced
    return true;
  },
};

var TelemetryStopwatch = {
  /**
   * Starts a timer associated with a telemetry histogram. The timer can be
   * directly associated with a histogram, or with a pair of a histogram and
   * an object.
   *
   * @param {String} aHistogram - a string which must be a valid histogram name.
   *
   * @param {Object} aObj - Optional parameter. If specified, the timer is
   *                        associated with this object, meaning that multiple
   *                        timers for the same histogram may be run
   *                        concurrently, as long as they are associated with
   *                        different objects.
   * @param {Object}  [options.inSeconds=false] - Record elapsed time for this
   *                  histogram in seconds instead of milliseconds. Defaults to
   *                  false.
   *
   * @returns {Boolean} True if the timer was successfully started, false
   *                    otherwise. If a timer already exists, it can't be
   *                    started again, and the existing one will be cleared in
   *                    order to avoid measurements errors.
   */
  start(aHistogram, aObj, {inSeconds} = {}) {
    return TelemetryStopwatchImpl.start(aHistogram, aObj, null, {inSeconds});
  },

  /**
   * Returns whether a timer associated with a telemetry histogram is currently
   * running. The timer can be directly associated with a histogram, or with a
   * pair of a histogram and an object.
   *
   * @param {String} aHistogram - a string which must be a valid histogram name.
   *
   * @param {Object} aObj - Optional parameter. If specified, the timer is
   *                        associated with this object, meaning that multiple
   *                        timers for the same histogram may be run
   *                        concurrently, as long as they are associated with
   *                        different objects.
   *
   * @returns {Boolean} True if the timer exists and is currently running.
   */
  running(aHistogram, aObj) {
    return TelemetryStopwatchImpl.running(aHistogram, aObj, null);
  },

  /**
   * Deletes the timer associated with a telemetry histogram. The timer can be
   * directly associated with a histogram, or with a pair of a histogram and
   * an object. Important: Only use this method when a legitimate cancellation
   * should be done.
   *
   * @param {String} aHistogram - a string which must be a valid histogram name.
   *
   * @param {Object} aObj - Optional parameter. If specified, the timer is
   *                        associated with this object, meaning that multiple
   *                        timers or a same histogram may be run concurrently,
   *                        as long as they are associated with different
   *                        objects.
   *
   * @returns {Boolean} True if the timer exist and it was cleared, False
   *                   otherwise.
   */
  cancel(aHistogram, aObj) {
    return TelemetryStopwatchImpl.cancel(aHistogram, aObj, null);
  },

  /**
   * Returns the elapsed time for a particular stopwatch. Primarily for
   * debugging purposes. Must be called prior to finish.
   *
   * @param {String} aHistogram - a string which must be a valid histogram name.
   *                              If an invalid name is given, the function will
   *                              throw.
   *
   * @param (Object) aObj - Optional parameter which associates the histogram
   *                        timer with the given object.
   *
   * @param {Boolean} aCanceledOkay - Optional parameter which will suppress any
   *                                  warnings that normally fire when a stopwatch
   *                                  is finished after being cancelled. Defaults
   *                                  to false.
   *
   * @returns {Integer} time in milliseconds or -1 if the stopwatch was not
   *                   found.
   */
  timeElapsed(aHistogram, aObj, aCanceledOkay) {
    return TelemetryStopwatchImpl.timeElapsed(aHistogram, aObj, null,
                                              aCanceledOkay);
  },

  /**
   * Stops the timer associated with the given histogram (and object),
   * calculates the time delta between start and finish, and adds the value
   * to the histogram.
   *
   * @param {String} aHistogram - a string which must be a valid histogram name.
   *
   * @param {Object} aObj - Optional parameter which associates the histogram
   *                        timer with the given object.
   *
   * @param {Boolean} aCanceledOkay - Optional parameter which will suppress any
   *                                  warnings that normally fire when a stopwatch
   *                                  is finished after being cancelled. Defaults
   *                                  to false.
   *
   * @returns {Boolean} True if the timer was succesfully stopped and the data
   *                    was added to the histogram, False otherwise.
   */
  finish(aHistogram, aObj, aCanceledOkay) {
    return TelemetryStopwatchImpl.finish(aHistogram, aObj, null, aCanceledOkay);
  },

  /**
   * Starts a timer associated with a keyed telemetry histogram. The timer can
   * be directly associated with a histogram and its key. Similarly to
   * @see{TelemetryStopwatch.stat} the histogram and its key can be associated
   * with an object. Each key may have multiple associated objects and each
   * object can be associated with multiple keys.
   *
   * @param {String} aHistogram - a string which must be a valid histogram name.
   *
   * @param {String} aKey - a string which must be a valid histgram key.
   *
   * @param {Object} aObj - Optional parameter. If specified, the timer is
   *                        associated with this object, meaning that multiple
   *                        timers for the same histogram may be run
   *                        concurrently,as long as they are associated with
   *                        different objects.
   * @param {Object}  [options.inSeconds=false] - Record elapsed time for this
   *                  histogram in seconds instead of milliseconds. Defaults to
   *                  false.
   *
   * @returns {Boolean} True if the timer was successfully started, false
   *                    otherwise. If a timer already exists, it can't be
   *                    started again, and the existing one will be cleared in
   *                    order to avoid measurements errors.
   */
  startKeyed(aHistogram, aKey, aObj, {inSeconds} = {}) {
    return TelemetryStopwatchImpl.start(aHistogram, aObj, aKey, {inSeconds});
  },

  /**
   * Returns whether a timer associated with a telemetry histogram is currently
   * running. Similarly to @see{TelemetryStopwatch.running} the timer and its
   * key can be associated with an object. Each key may have multiple associated
   * objects and each object can be associated with multiple keys.
   *
   * @param {String} aHistogram - a string which must be a valid histogram name.
   *
   * @param {String} aKey - a string which must be a valid histgram key.
   *
   * @param {Object} aObj - Optional parameter. If specified, the timer is
   *                        associated with this object, meaning that multiple
   *                        timers for the same histogram may be run
   *                        concurrently, as long as they are associated with
   *                        different objects.
   *
   * @returns {Boolean} True if the timer exists and is currently running.
   */
  runningKeyed(aHistogram, aKey, aObj) {
    return TelemetryStopwatchImpl.running(aHistogram, aObj, aKey);
  },

  /**
   * Deletes the timer associated with a keyed histogram. Important: Only use
   * this method when a legitimate cancellation should be done.
   *
   * @param {String} aHistogram - a string which must be a valid histogram name.
   *
   * @param {String} aKey - a string which must be a valid histgram key.
   *
   * @param {Object} aObj - Optional parameter. If specified, the timer
   *                        associated with this object is deleted.
   *
   * @return {Boolean} True if the timer exist and it was cleared, False
   *                   otherwise.
   */
  cancelKeyed(aHistogram, aKey, aObj) {
    return TelemetryStopwatchImpl.cancel(aHistogram, aObj, aKey);
  },

  /**
   * Returns the elapsed time for a particular stopwatch. Primarily for
   * debugging purposes. Must be called prior to finish.
   *
   * @param {String} aHistogram - a string which must be a valid histogram name.
   *
   * @param {String} aKey - a string which must be a valid histgram key.
   *
   * @param {Object} aObj - Optional parameter. If specified, the timer
   *                        associated with this object is used to calculate
   *                        the elapsed time.
   *
   * @return {Integer} time in milliseconds or -1 if the stopwatch was not
   *                   found.
   */
  timeElapsedKeyed(aHistogram, aKey, aObj, aCanceledOkay) {
    return TelemetryStopwatchImpl.timeElapsed(aHistogram, aObj, aKey,
                                              aCanceledOkay);
  },

  /**
   * Stops the timer associated with the given keyed histogram (and object),
   * calculates the time delta between start and finish, and adds the value
   * to the keyed histogram.
   *
   * @param {String} aHistogram - a string which must be a valid histogram name.
   *
   * @param {String} aKey - a string which must be a valid histgram key.
   *
   * @param {Object} aObj - optional parameter which associates the histogram
   *                        timer with the given object.
   *
   * @param {Boolean} aCanceledOkay - Optional parameter which will suppress any
   *                                  warnings that normally fire when a stopwatch
   *                                  is finished after being cancelled. Defaults
   *                                  to false.
   *
   * @returns {Boolean} True if the timer was succesfully stopped and the data
   *                   was added to the histogram, False otherwise.
   */
  finishKeyed(aHistogram, aKey, aObj, aCanceledOkay) {
    return TelemetryStopwatchImpl.finish(aHistogram, aObj, aKey, aCanceledOkay);
  },

  /**
   * Set the testing mode. Used by tests.
   */
  setTestModeEnabled(testing = true) {
    TelemetryStopwatchImpl.suppressErrors(testing);
  },
};

var TelemetryStopwatchImpl = {
  // Suppress errors. Used when testing.
  _suppressErrors: false,

  suppressErrors(suppress) {
    this._suppressErrors = suppress;
  },

  start(histogram, object, key, {inSeconds} = {}) {
    if (Timers.has(histogram, object, key)) {
      Timers.delete(histogram, object, key);
      if (!this._suppressErrors) {
        Cu.reportError(`TelemetryStopwatch: key "${histogram}" was already ` +
                       "initialized");
      }
      return false;
    }

    return Timers.put(histogram, object, key, Cu.now(), {inSeconds});
  },

  running(histogram, object, key) {
    return Timers.has(histogram, object, key);
  },

  cancel(histogram, object, key) {
    return Timers.delete(histogram, object, key);
  },

  timeElapsed(histogram, object, key, aCanceledOkay) {
    const startTime = Timers.get(histogram, object, key);
    if (startTime === null) {
      if (!aCanceledOkay && !this._suppressErrors) {
        Cu.reportError("TelemetryStopwatch: requesting elapsed time for " +
                       `nonexisting stopwatch. Histogram: "${histogram}", ` +
                       `key: "${key}"`);
      }
      return -1;
    }

    try {
      const delta = Cu.now() - startTime;
      if (Timers._inSeconds.has(histogram)) {
        return Math.round(delta / 1000);
      }
      return Math.round(delta);
    } catch (e) {
      if (!this._suppressErrors) {
        Cu.reportError("TelemetryStopwatch: failed to calculate elapsed time " +
                       `for Histogram: "${histogram}", key: "${key}", ` +
                       `exception: ${Log.exceptionStr(e)}`);
      }
      return -1;
    }
  },

  finish(histogram, object, key, aCanceledOkay) {
    const delta = this.timeElapsed(histogram, object, key, aCanceledOkay);
    if (delta == -1) {
      return false;
    }

    try {
      if (key) {
        Services.telemetry.getKeyedHistogramById(histogram).add(key, delta);
      } else {
        Services.telemetry.getHistogramById(histogram).add(delta);
      }
    } catch (e) {
      if (!this._suppressErrors) {
        Cu.reportError("TelemetryStopwatch: failed to update the Histogram " +
                       `"${histogram}", using key: "${key}", ` +
                       `exception: ${Log.exceptionStr(e)}`);
      }
      return false;
    }

    return Timers.delete(histogram, object, key);
  },
};
