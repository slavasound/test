"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPausePoints = undefined;
exports.setSourceMetaData = setSourceMetaData;
exports.setSymbols = setSymbols;
exports.setOutOfScopeLocations = setOutOfScopeLocations;

var _selectors = require("../selectors/index");

var _pause = require("./pause/index");

var _tabs = require("./tabs");

var _promise = require("./utils/middleware/promise");

var _setInScopeLines = require("./ast/setInScopeLines");

var _setPausePoints = require("./ast/setPausePoints");

var _parser = require("../workers/parser/index");

var _source = require("../utils/source");

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

exports.setPausePoints = _setPausePoints.setPausePoints;
function setSourceMetaData(sourceId) {
  return async ({ dispatch, getState }) => {
    const source = (0, _selectors.getSource)(getState(), sourceId);
    if (!source || !(0, _source.isLoaded)(source) || source.isWasm) {
      return;
    }

    const framework = await (0, _parser.getFramework)(source.id);
    if (framework) {
      dispatch((0, _tabs.updateTab)(source, framework));
    }

    dispatch({
      type: "SET_SOURCE_METADATA",
      sourceId: source.id,
      sourceMetaData: {
        framework
      }
    });
  };
}

function setSymbols(sourceId) {
  return async ({ dispatch, getState, sourceMaps }) => {
    const source = (0, _selectors.getSourceFromId)(getState(), sourceId);

    if (source.isWasm || (0, _selectors.hasSymbols)(getState(), source) || !(0, _source.isLoaded)(source)) {
      return;
    }

    await dispatch({
      type: "SET_SYMBOLS",
      sourceId,
      [_promise.PROMISE]: (0, _parser.getSymbols)(sourceId)
    });

    if ((0, _selectors.isPaused)(getState())) {
      await dispatch((0, _pause.fetchExtra)());
      await dispatch((0, _pause.mapFrames)());
    }

    await dispatch((0, _setPausePoints.setPausePoints)(sourceId));
    await dispatch(setSourceMetaData(sourceId));
  };
}

function setOutOfScopeLocations() {
  return async ({ dispatch, getState }) => {
    const location = (0, _selectors.getSelectedLocation)(getState());
    if (!location) {
      return;
    }

    const source = (0, _selectors.getSourceFromId)(getState(), location.sourceId);

    let locations = null;
    if (location.line && source && !source.isWasm && (0, _selectors.isPaused)(getState())) {
      locations = await (0, _parser.findOutOfScopeLocations)(source.id, location);
    }

    dispatch({
      type: "OUT_OF_SCOPE_LOCATIONS",
      locations
    });
    dispatch((0, _setInScopeLines.setInScopeLines)());
  };
}