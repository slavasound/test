"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBreakpointAtLocation = getBreakpointAtLocation;
exports.getBreakpointsAtLine = getBreakpointsAtLine;

var _sources = require("../reducers/sources");

var _breakpoints = require("../reducers/breakpoints");

var _source = require("../utils/source");

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */
function getColumn(column, selectedSource) {
  if (column) {
    return column;
  }

  return (0, _source.isGenerated)(selectedSource) ? undefined : 0;
}

function getLocation(bp, selectedSource) {
  return (0, _source.isGenerated)(selectedSource) ? bp.generatedLocation || bp.location : bp.location;
}

function getBreakpointsForSource(state, selectedSource) {
  const breakpoints = (0, _breakpoints.getBreakpoints)(state);
  return breakpoints.filter(bp => {
    const location = getLocation(bp, selectedSource);
    return location.sourceId === selectedSource.id;
  });
}

function findBreakpointAtLocation(breakpoints, selectedSource, {
  line,
  column
}) {
  return breakpoints.find(breakpoint => {
    const location = getLocation(breakpoint, selectedSource);
    const sameLine = location.line === line;

    if (!sameLine) {
      return false;
    }

    if (column === undefined) {
      return true;
    }

    return location.column === getColumn(column, selectedSource);
  });
}
/*
 * Finds a breakpoint at a location (line, column) of the
 * selected source.
 *
 * This is useful for finding a breakpoint when the
 * user clicks in the gutter or on a token.
 */


function getBreakpointAtLocation(state, location) {
  const selectedSource = (0, _sources.getSelectedSource)(state);
  const breakpoints = getBreakpointsForSource(state, selectedSource);
  return findBreakpointAtLocation(breakpoints, selectedSource, location);
}

function getBreakpointsAtLine(state, line) {
  const selectedSource = (0, _sources.getSelectedSource)(state);
  const breakpoints = getBreakpointsForSource(state, selectedSource);
  return breakpoints.filter(breakpoint => getLocation(breakpoint, selectedSource).line === line);
}