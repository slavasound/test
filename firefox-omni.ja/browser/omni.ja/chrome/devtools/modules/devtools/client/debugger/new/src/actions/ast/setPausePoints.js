"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPausePoints = setPausePoints;

var _selectors = require("../../selectors/index");

var _parser = require("../../workers/parser/index");

var parser = _interopRequireWildcard(_parser);

var _source = require("../../utils/source");

var _pausePoints = require("../../utils/pause/pausePoints");

var _prefs = require("../../utils/prefs");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function compressPausePoints(pausePoints) {
  const compressed = {};
  for (const line in pausePoints) {
    compressed[line] = {};
    for (const col in pausePoints[line]) {
      const { types } = pausePoints[line][col];
      compressed[line][col] = (types.break ? 1 : 0) | (types.step ? 2 : 0);
    }
  }

  return compressed;
} /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

async function mapLocations(pausePoints, source, sourceMaps) {
  const sourceId = source.id;
  return (0, _pausePoints.mapPausePoints)(pausePoints, async ({ types, location }) => {
    const generatedLocation = await sourceMaps.getGeneratedLocation({ ...location, sourceId }, source);

    return { types, location, generatedLocation };
  });
}
function setPausePoints(sourceId) {
  return async ({ dispatch, getState, client, sourceMaps }) => {
    const source = (0, _selectors.getSourceFromId)(getState(), sourceId);
    if (!_prefs.features.pausePoints || !source || !source.text) {
      return;
    }

    if (source.isWasm) {
      return;
    }

    let pausePoints = await parser.getPausePoints(sourceId);

    if (_prefs.features.columnBreakpoints) {
      pausePoints = await mapLocations(pausePoints, source, sourceMaps);
    }

    if ((0, _source.isGenerated)(source)) {
      const compressed = compressPausePoints(pausePoints);
      await client.setPausePoints(sourceId, compressed);
    }

    dispatch({
      type: "SET_PAUSE_POINTS",
      sourceText: source.text || "",
      sourceId,
      pausePoints
    });
  };
}