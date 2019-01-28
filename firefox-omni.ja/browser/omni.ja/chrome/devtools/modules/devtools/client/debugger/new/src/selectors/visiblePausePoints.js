"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVisiblePausePoints = getVisiblePausePoints;

var _sources = require("../reducers/sources");

var _ast = require("../reducers/ast");

var _pausePoints = require("../utils/pause/pausePoints");

function getVisiblePausePoints(state) {
  const source = (0, _sources.getSelectedSource)(state);
  if (!source) {
    return null;
  }

  const pausePoints = (0, _ast.getPausePoints)(state, source.id);
  return (0, _pausePoints.convertToList)(pausePoints);
} /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */