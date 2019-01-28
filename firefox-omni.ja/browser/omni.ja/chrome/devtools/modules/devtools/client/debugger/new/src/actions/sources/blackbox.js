"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleBlackBox = toggleBlackBox;

var _devtoolsSourceMap = require("devtools/client/shared/source-map/index.js");

var _telemetry = require("../../utils/telemetry");

var _prefs = require("../../utils/prefs");

var _promise = require("../utils/middleware/promise");

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

/**
 * Redux actions for the sources state
 * @module actions/sources
 */

function toggleBlackBox(source) {
  return async ({ dispatch, getState, client, sourceMaps }) => {
    const { isBlackBoxed, id } = source;

    if (!isBlackBoxed) {
      (0, _telemetry.recordEvent)("blackbox");
    }

    let promise;
    if (_prefs.features.originalBlackbox && (0, _devtoolsSourceMap.isOriginalId)(id)) {
      promise = Promise.resolve({ isBlackBoxed: !isBlackBoxed });
    } else {
      promise = client.blackBox(id, isBlackBoxed);
    }

    return dispatch({
      type: "BLACKBOX",
      source,
      [_promise.PROMISE]: promise
    });
  };
}