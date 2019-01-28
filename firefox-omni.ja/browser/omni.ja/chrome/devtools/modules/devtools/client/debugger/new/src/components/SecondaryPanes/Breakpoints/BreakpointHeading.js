"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("devtools/client/shared/vendor/react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("devtools/client/shared/vendor/react-redux");

var _actions = require("../../../actions/index");

var _actions2 = _interopRequireDefault(_actions);

var _source = require("../../../utils/source");

var _selectors = require("../../../selectors/index");

var _SourceIcon = require("../../shared/SourceIcon");

var _SourceIcon2 = _interopRequireDefault(_SourceIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

class BreakpointHeading extends _react.PureComponent {
  render() {
    const { sources, source, hasSiblingOfSameName, selectSource } = this.props;

    const path = (0, _source.getDisplayPath)(source, sources);
    const query = hasSiblingOfSameName ? (0, _source.getSourceQueryString)(source) : "";

    return _react2.default.createElement(
      "div",
      {
        className: "breakpoint-heading",
        title: (0, _source.getFileURL)(source, false),
        onClick: () => selectSource(source.id)
      },
      _react2.default.createElement(_SourceIcon2.default, {
        source: source,
        shouldHide: icon => ["file", "javascript"].includes(icon)
      }),
      _react2.default.createElement(
        "div",
        { className: "filename" },
        (0, _source.getTruncatedFileName)(source, query),
        path && _react2.default.createElement(
          "span",
          null,
          `../${path}/..`
        )
      )
    );
  }
}

const mapStateToProps = (state, { source }) => ({
  hasSiblingOfSameName: (0, _selectors.getHasSiblingOfSameName)(state, source)
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, { selectSource: _actions2.default.selectSource })(BreakpointHeading);