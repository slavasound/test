"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBreakpointSources = undefined;

var _lodash = require("devtools/client/shared/vendor/lodash");

var _reselect = require("devtools/client/debugger/new/dist/vendors").vendored["reselect"];

var _selectors = require("../selectors/index");

var _source = require("../utils/source");

var _sourceMaps = require("../utils/source-maps");

function formatBreakpoint(breakpoint, selectedSource) {
  const { id, condition, disabled } = breakpoint;

  return {
    id,
    condition,
    disabled,
    text: selectedSource && (0, _source.isGenerated)(selectedSource) ? breakpoint.text : breakpoint.originalText,
    selectedLocation: (0, _sourceMaps.getSelectedLocation)(breakpoint, selectedSource)
  };
} /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

function getBreakpointsForSource(source, selectedSource, breakpoints) {
  return breakpoints.sort((a, b) => a.location.line - b.location.line).filter(bp => !bp.hidden && !bp.loading && (bp.text || bp.originalText || bp.condition || bp.disabled)).map(bp => formatBreakpoint(bp, selectedSource)).filter(bp => bp.selectedLocation.sourceId == source.id);
}

function findBreakpointSources(sources, selectedSource, breakpoints) {
  const sourceIds = (0, _lodash.uniq)(breakpoints.map(bp => bp.location.sourceId));

  const breakpointSources = sourceIds.map(id => sources[id]).filter(source => source && !source.isBlackBoxed);

  return (0, _lodash.sortBy)(breakpointSources, source => (0, _source.getFilename)(source));
}

const getBreakpointSources = exports.getBreakpointSources = (0, _reselect.createSelector)(_selectors.getBreakpointsList, _selectors.getSources, _selectors.getSelectedSource, (breakpoints, sources, selectedSource) => findBreakpointSources(sources, selectedSource, breakpoints).map(source => ({
  source,
  breakpoints: getBreakpointsForSource(source, selectedSource, breakpoints)
})).filter(({ breakpoints: bpSources }) => bpSources.length > 0));