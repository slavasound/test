"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visibleColumnBreakpoints = undefined;
exports.formatColumnBreakpoints = formatColumnBreakpoints;
exports.getColumnBreakpoints = getColumnBreakpoints;

var _lodash = require("devtools/client/shared/vendor/lodash");

var _reselect = require("devtools/client/debugger/new/dist/vendors").vendored["reselect"];

var _selectors = require("../selectors/index");

var _visibleBreakpoints = require("./visibleBreakpoints");

var _visiblePausePoints = require("./visiblePausePoints");

var _breakpoint = require("../utils/breakpoint/index");

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

function contains(location, range) {
  return location.line >= range.start.line && location.line <= range.end.line && location.column >= range.start.column && location.column <= range.end.column;
}

function groupBreakpoints(breakpoints) {
  const map = (0, _lodash.groupBy)(breakpoints, ({ location }) => location.line);
  for (const line in map) {
    map[line] = (0, _lodash.groupBy)(map[line], ({ location }) => location.column);
  }

  return map;
}

function isEnabled(location, breakpointMap) {
  const { line, column } = location;
  return (0, _lodash.hasIn)(breakpointMap, [line, column]);
}

function getLineCount(columnBreakpoints) {
  const lineCount = {};
  columnBreakpoints.forEach(({ location: { line } }) => {
    if (!lineCount[line]) {
      lineCount[line] = 0;
    }

    lineCount[line] = lineCount[line] + 1;
  });

  return lineCount;
}

function formatColumnBreakpoints(columnBreakpoints) {
  console.log("Column Breakpoints\n\n", columnBreakpoints.map(({ location, enabled }) => `(${location.line}, ${location.column}) ${enabled}`).join("\n"));
}

function getColumnBreakpoints(pausePoints, breakpoints, viewport) {
  if (!pausePoints) {
    return [];
  }

  const breakpointMap = groupBreakpoints(breakpoints);

  // We only want to show a column breakpoint if several conditions are matched
  // 1. it is a "break" point and not a "step" point
  // 2. there is a breakpoint on that line
  // 3. the breakpoint is in the current viewport
  // 4. it is the first breakpoint to appear at that generated location
  // 5. there is atleast one other breakpoint on that line

  let columnBreakpoints = pausePoints.filter(({ types, location }) =>
  // 1. check that the pause point is a "break" point
  types.break &&
  // 2. check that there is a registered breakpoint on the line
  breakpointMap[location.line] &&
  // 3. check that the breakpoint is visible
  viewport && contains(location, viewport));

  // 4. Only show one column breakpoint per generated location
  columnBreakpoints = (0, _lodash.sortedUniqBy)(columnBreakpoints, ({ generatedLocation }) => (0, _breakpoint.makeLocationId)(generatedLocation));

  // 5. Check that there is atleast one other possible breakpoint on the line
  const lineCount = getLineCount(columnBreakpoints);
  columnBreakpoints = columnBreakpoints.filter(({ location: { line } }) => lineCount[line] > 1);

  return columnBreakpoints.map(({ location }) => ({
    location,
    enabled: isEnabled(location, breakpointMap)
  }));
}

const visibleColumnBreakpoints = exports.visibleColumnBreakpoints = (0, _reselect.createSelector)(_visiblePausePoints.getVisiblePausePoints, _visibleBreakpoints.getVisibleBreakpoints, _selectors.getViewport, getColumnBreakpoints);