"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToList = convertToList;
exports.formatPausePoints = formatPausePoints;
exports.mapPausePoints = mapPausePoints;

var _lodash = require("devtools/client/shared/vendor/lodash");

function insertStrtAt(string, index, newString) {
  const start = string.slice(0, index);
  const end = string.slice(index);
  return `${start}${newString}${end}`;
} /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

function convertToList(pausePoints) {
  const list = [];
  for (const line in pausePoints) {
    for (const column in pausePoints[line]) {
      list.push(pausePoints[line][column]);
    }
  }
  return list;
}

function formatPausePoints(text, pausePoints) {
  const nodes = (0, _lodash.reverse)(convertToList(pausePoints));
  const lines = text.split("\n");
  nodes.forEach((node, index) => {
    const { line, column } = node.location;
    const { break: breakPoint, step } = node.types;
    const types = `${breakPoint ? "b" : ""}${step ? "s" : ""}`;
    lines[line - 1] = insertStrtAt(lines[line - 1], column, `/*${types}*/`);
  });

  return lines.join("\n");
}

async function mapPausePoints(pausePoints, iteratee) {
  const results = await Promise.all(convertToList(pausePoints).map(iteratee));
  let index = 0;

  for (const line in pausePoints) {
    const linePoints = pausePoints[line];
    for (const column in linePoints) {
      newLinePoints[column] = results[index++];
    }
  }

  return pausePoints;
}