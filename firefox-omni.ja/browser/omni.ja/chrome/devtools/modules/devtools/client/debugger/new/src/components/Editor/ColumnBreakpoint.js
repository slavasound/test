"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("devtools/client/shared/vendor/react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("devtools/client/shared/vendor/react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require("devtools/client/debugger/new/dist/vendors").vendored["classnames"];

var _classnames2 = _interopRequireDefault(_classnames);

var _editor = require("../../utils/editor/index");

var _Svg = require("devtools/client/debugger/new/dist/vendors").vendored["Svg"];

var _Svg2 = _interopRequireDefault(_Svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line max-len
const breakpointImg = document.createElement("div"); /* This Source Code Form is subject to the terms of the Mozilla Public
                                                      * License, v. 2.0. If a copy of the MPL was not distributed with this
                                                      * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

_reactDom2.default.render(_react2.default.createElement(_Svg2.default, { name: "column-marker" }), breakpointImg);
function makeBookmark(isActive, { onClick }) {
  const bp = breakpointImg.cloneNode(true);
  const className = isActive ? "active" : "disabled";
  bp.className = (0, _classnames2.default)("call-site", className);
  bp.onclick = onClick;
  return bp;
}

class CallSite extends _react.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.addCallSite = nextProps => {
      const { columnBreakpoint, source } = nextProps || this.props;
      const sourceId = source.id;
      const { line, column } = columnBreakpoint.location;
      const widget = makeBookmark(columnBreakpoint.enabled, {
        onClick: this.toggleBreakpoint
      });
      const doc = (0, _editor.getDocument)(sourceId);
      this.bookmark = doc.setBookmark({ line: line - 1, ch: column }, { widget });
    }, this.clearCallSite = () => {
      if (this.bookmark) {
        this.bookmark.clear();
        this.bookmark = null;
      }
    }, this.toggleBreakpoint = () => {
      const { columnBreakpoint, toggleBreakpoint } = this.props;
      const { line, column } = columnBreakpoint.location;
      toggleBreakpoint(line, column);
    }, _temp;
  }

  componentDidMount() {
    this.addCallSite();
  }

  componentWillUnmount() {
    this.clearCallSite();
  }

  componentDidUpdate() {
    this.clearCallSite();
    this.addCallSite();
  }

  render() {
    return null;
  }
}
exports.default = CallSite;