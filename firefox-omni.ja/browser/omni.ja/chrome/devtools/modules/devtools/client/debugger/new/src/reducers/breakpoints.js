"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialBreakpointsState = initialBreakpointsState;
exports.getBreakpointsMap = getBreakpointsMap;
exports.getBreakpointsList = getBreakpointsList;
exports.getBreakpointCount = getBreakpointCount;
exports.getBreakpoint = getBreakpoint;
exports.getBreakpointsDisabled = getBreakpointsDisabled;
exports.getBreakpointsLoading = getBreakpointsLoading;
exports.getBreakpointsForSource = getBreakpointsForSource;
exports.getBreakpointForLine = getBreakpointForLine;
exports.getHiddenBreakpoint = getHiddenBreakpoint;
exports.getHiddenBreakpointLocation = getHiddenBreakpointLocation;

var _immutable = require("devtools/client/shared/vendor/immutable");

var I = _interopRequireWildcard(_immutable);

var _devtoolsSourceMap = require("devtools/client/shared/source-map/index.js");

var _breakpoint = require("../utils/breakpoint/index");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function initialBreakpointsState(xhrBreakpoints = []) {
  return {
    breakpoints: {},
    xhrBreakpoints: I.List(xhrBreakpoints),
    breakpointsDisabled: false
  };
} /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

/**
 * Breakpoints reducer
 * @module reducers/breakpoints
 */

function update(state = initialBreakpointsState(), action) {
  switch (action.type) {
    case "ADD_BREAKPOINT":
      {
        return addBreakpoint(state, action);
      }

    case "SYNC_BREAKPOINT":
      {
        return syncBreakpoint(state, action);
      }

    case "ENABLE_BREAKPOINT":
      {
        return addBreakpoint(state, action);
      }

    case "DISABLE_BREAKPOINT":
      {
        return updateBreakpoint(state, action);
      }

    case "DISABLE_ALL_BREAKPOINTS":
      {
        return updateAllBreakpoints(state, action);
      }

    case "ENABLE_ALL_BREAKPOINTS":
      {
        return updateAllBreakpoints(state, action);
      }

    case "SET_BREAKPOINT_CONDITION":
      {
        return updateBreakpoint(state, action);
      }

    case "REMOVE_BREAKPOINT":
      {
        return removeBreakpoint(state, action);
      }

    case "REMAP_BREAKPOINTS":
      {
        return remapBreakpoints(state, action);
      }

    case "NAVIGATE":
      {
        return initialBreakpointsState(state.xhrBreakpoints);
      }

    case "SET_XHR_BREAKPOINT":
      {
        return addXHRBreakpoint(state, action);
      }

    case "REMOVE_XHR_BREAKPOINT":
      {
        return removeXHRBreakpoint(state, action);
      }

    case "UPDATE_XHR_BREAKPOINT":
      {
        return updateXHRBreakpoint(state, action);
      }

    case "ENABLE_XHR_BREAKPOINT":
      {
        return updateXHRBreakpoint(state, action);
      }

    case "DISABLE_XHR_BREAKPOINT":
      {
        return updateXHRBreakpoint(state, action);
      }
  }

  return state;
}

function addXHRBreakpoint(state, action) {
  const { xhrBreakpoints } = state;
  const { breakpoint } = action;
  const { path, method } = breakpoint;

  const existingBreakpointIndex = state.xhrBreakpoints.findIndex(bp => bp.path === path && bp.method === method);

  if (existingBreakpointIndex === -1) {
    return {
      ...state,
      xhrBreakpoints: xhrBreakpoints.push(breakpoint)
    };
  } else if (xhrBreakpoints.get(existingBreakpointIndex) !== breakpoint) {
    return {
      ...state,
      xhrBreakpoints: xhrBreakpoints.set(existingBreakpointIndex, breakpoint)
    };
  }

  return state;
}

function removeXHRBreakpoint(state, action) {
  const {
    breakpoint: { path, method }
  } = action;
  const { xhrBreakpoints } = state;

  if (action.status === "start") {
    return state;
  }

  const index = xhrBreakpoints.findIndex(bp => bp.path === path && bp.method === method);

  return {
    ...state,
    xhrBreakpoints: xhrBreakpoints.delete(index)
  };
}

function updateXHRBreakpoint(state, action) {
  const { breakpoint, index } = action;
  const { xhrBreakpoints } = state;
  return {
    ...state,
    xhrBreakpoints: xhrBreakpoints.set(index, breakpoint)
  };
}

function setBreakpoint(state, locationId, breakpoint) {
  return {
    ...state,
    breakpoints: { ...state.breakpoints, [locationId]: breakpoint }
  };
}

function unsetBreakpoint(state, locationId) {
  const breakpoints = { ...state.breakpoints };
  delete breakpoints[locationId];
  return {
    ...state,
    breakpoints: { ...breakpoints }
  };
}

function addBreakpoint(state, action) {
  if (action.status === "start" && action.breakpoint) {
    const { breakpoint } = action;
    const locationId = (0, _breakpoint.makeLocationId)(breakpoint.location);
    return setBreakpoint(state, locationId, breakpoint);
  }

  // when the action completes, we can commit the breakpoint
  if (action.status === "done") {
    const { value } = action;
    return syncBreakpoint(state, value);
  }

  // Remove the optimistic update
  if (action.status === "error" && action.breakpoint) {
    const locationId = (0, _breakpoint.makeLocationId)(action.breakpoint.location);
    return unsetBreakpoint(state, locationId);
  }

  return state;
}

function syncBreakpoint(state, data) {
  const { breakpoint, previousLocation } = data;

  if (previousLocation) {
    state = {
      ...state,
      breakpoints: { ...state.breakpoints }
    };
    delete state.breakpoints[(0, _breakpoint.makeLocationId)(previousLocation)];
  }

  if (!breakpoint) {
    return state;
  }

  const locationId = (0, _breakpoint.makeLocationId)(breakpoint.location);
  return setBreakpoint(state, locationId, breakpoint);
}

function updateBreakpoint(state, action) {
  const { breakpoint } = action;
  const locationId = (0, _breakpoint.makeLocationId)(breakpoint.location);
  return setBreakpoint(state, locationId, breakpoint);
}

function updateAllBreakpoints(state, action) {
  const { breakpoints } = action;
  state = {
    ...state,
    breakpoints: { ...state.breakpoints }
  };
  breakpoints.forEach(breakpoint => {
    const locationId = (0, _breakpoint.makeLocationId)(breakpoint.location);
    state.breakpoints[locationId] = breakpoint;
  });
  return state;
}

function remapBreakpoints(state, action) {
  const breakpoints = action.breakpoints.reduce((updatedBreakpoints, breakpoint) => {
    const locationId = (0, _breakpoint.makeLocationId)(breakpoint.location);
    return { ...updatedBreakpoints, [locationId]: breakpoint };
  }, {});

  return { ...state, breakpoints };
}

function removeBreakpoint(state, action) {
  const { breakpoint } = action;
  const id = (0, _breakpoint.makeLocationId)(breakpoint.location);
  return unsetBreakpoint(state, id);
}

// Selectors
// TODO: these functions should be moved out of the reducer

function getBreakpointsMap(state) {
  return state.breakpoints.breakpoints;
}

function getBreakpointsList(state) {
  return Object.values(getBreakpointsMap(state));
}

function getBreakpointCount(state) {
  return getBreakpointsList(state).length;
}

function getBreakpoint(state, location) {
  const breakpoints = getBreakpointsMap(state);
  return breakpoints[(0, _breakpoint.makeLocationId)(location)];
}

function getBreakpointsDisabled(state) {
  const breakpoints = getBreakpointsList(state);
  return breakpoints.every(breakpoint => breakpoint.disabled);
}

function getBreakpointsLoading(state) {
  const breakpoints = getBreakpointsList(state);
  const isLoading = breakpoints.some(breakpoint => breakpoint.loading);
  return breakpoints.length > 0 && isLoading;
}

function getBreakpointsForSource(state, sourceId) {
  if (!sourceId) {
    return [];
  }

  const isGeneratedSource = (0, _devtoolsSourceMap.isGeneratedId)(sourceId);
  const breakpoints = getBreakpointsList(state);
  return breakpoints.filter(bp => {
    const location = isGeneratedSource ? bp.generatedLocation || bp.location : bp.location;
    return location.sourceId === sourceId;
  });
}

function getBreakpointForLine(state, sourceId, line) {
  if (!sourceId) {
    return undefined;
  }
  const breakpoints = getBreakpointsList(state);
  return breakpoints.find(breakpoint => breakpoint.location.line === line);
}

function getHiddenBreakpoint(state) {
  const breakpoints = getBreakpointsList(state);
  return breakpoints.find(bp => bp.hidden);
}

function getHiddenBreakpointLocation(state) {
  const hiddenBreakpoint = getHiddenBreakpoint(state);
  if (!hiddenBreakpoint) {
    return null;
  }
  return hiddenBreakpoint.location;
}

exports.default = update;