"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("devtools/client/shared/vendor/react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("devtools/client/shared/vendor/react-redux");

var _ColumnBreakpoint = require("./ColumnBreakpoint");

var _ColumnBreakpoint2 = _interopRequireDefault(_ColumnBreakpoint);

var _selectors = require("../../selectors/index");

var _breakpoint = require("../../utils/breakpoint/index");

var _actions = require("../../actions/index");

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line max-len
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

class ColumnBreakpoints extends _react.Component {

  render() {
    const {
      editor,
      columnBreakpoints,
      selectedSource,
      toggleBreakpoint
    } = this.props;

    if (!selectedSource || selectedSource.isBlackBoxed) {
      return null;
    }

    let breakpoints;
    editor.codeMirror.operation(() => {
      breakpoints = columnBreakpoints.map(breakpoint => _react2.default.createElement(_ColumnBreakpoint2.default, {
        key: (0, _breakpoint.makeLocationId)(breakpoint.location),
        columnBreakpoint: breakpoint,
        editor: editor,
        source: selectedSource,
        toggleBreakpoint: toggleBreakpoint
      }));
    });
    return _react2.default.createElement(
      "div",
      null,
      breakpoints
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedSource: (0, _selectors.getSelectedSource)(state),
    columnBreakpoints: (0, _selectors.visibleColumnBreakpoints)(state)
  };
};

const { toggleBreakpoint } = _actions2.default;
const mapDispatchToProps = { toggleBreakpoint };

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ColumnBreakpoints);