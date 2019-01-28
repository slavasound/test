"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("devtools/client/shared/vendor/react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("devtools/client/shared/vendor/react-redux");

var _classnames = require("devtools/client/debugger/new/dist/vendors").vendored["classnames"];

var _classnames2 = _interopRequireDefault(_classnames);

var _actions = require("../../actions/index");

var _actions2 = _interopRequireDefault(_actions);

var _Button = require("../shared/Button/index");

var _selectors = require("../../selectors/index");

var _ExceptionOption = require("./Breakpoints/ExceptionOption");

var _ExceptionOption2 = _interopRequireDefault(_ExceptionOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class XHRBreakpoints extends _react.Component {

  constructor(props) {
    super(props);

    this.handleNewSubmit = e => {
      e.preventDefault();
      e.stopPropagation();

      this.props.setXHRBreakpoint(this.state.inputValue, "ANY");

      this.hideInput();
    };

    this.handleExistingSubmit = e => {
      e.preventDefault();
      e.stopPropagation();

      const { editIndex, inputValue, inputMethod } = this.state;
      const { xhrBreakpoints } = this.props;
      const { path, method } = xhrBreakpoints.get(editIndex);

      if (path !== inputValue || method != inputMethod) {
        this.props.updateXHRBreakpoint(editIndex, inputValue, inputMethod);
      }

      this.hideInput();
    };

    this.handleChange = e => {
      const target = e.target;
      this.setState({ inputValue: target.value });
    };

    this.hideInput = () => {
      this.setState({
        focused: false,
        editing: false,
        editIndex: -1,
        inputValue: "",
        inputMethod: ""
      });
      this.props.onXHRAdded();
    };

    this.onFocus = () => {
      this.setState({ focused: true });
    };

    this.editExpression = index => {
      const { xhrBreakpoints } = this.props;
      const { path, method } = xhrBreakpoints.get(index);
      this.setState({
        inputValue: path,
        inputMethod: method,
        editing: true,
        editIndex: index
      });
    };

    this.handleCheckbox = index => {
      const {
        xhrBreakpoints,
        enableXHRBreakpoint,
        disableXHRBreakpoint
      } = this.props;
      const breakpoint = xhrBreakpoints.get(index);
      if (breakpoint.disabled) {
        enableXHRBreakpoint(index);
      } else {
        disableXHRBreakpoint(index);
      }
    };

    this.renderBreakpoint = breakpoint => {
      const { path, text, disabled, method } = breakpoint;
      const { editIndex } = this.state;
      const { removeXHRBreakpoint, xhrBreakpoints } = this.props;

      // The "pause on any" checkbox
      if (!path) {
        return;
      }

      // Finds the xhrbreakpoint so as to not make assumptions about position
      const index = xhrBreakpoints.findIndex(bp => bp.path === path && bp.method === method);

      if (index === editIndex) {
        return this.renderXHRInput(this.handleExistingSubmit);
      }

      return _react2.default.createElement(
        "li",
        {
          className: "xhr-container",
          key: path,
          title: path,
          onDoubleClick: (items, options) => this.editExpression(index)
        },
        _react2.default.createElement("input", {
          type: "checkbox",
          className: "xhr-checkbox",
          checked: !disabled,
          onChange: () => this.handleCheckbox(index),
          onClick: ev => ev.stopPropagation()
        }),
        _react2.default.createElement(
          "div",
          { className: "xhr-label" },
          text
        ),
        _react2.default.createElement(
          "div",
          { className: "xhr-container__close-btn" },
          _react2.default.createElement(_Button.CloseButton, { handleClick: e => removeXHRBreakpoint(index) })
        )
      );
    };

    this.renderBreakpoints = () => {
      const { showInput, xhrBreakpoints } = this.props;

      // At present, the "Pause on any URL" checkbox creates an xhrBreakpoint
      // of "ANY" with no path, so we can remove that before creating the list
      const explicitXhrBreakpoints = xhrBreakpoints.filter(bp => bp.path !== "");

      return _react2.default.createElement(
        "ul",
        { className: "pane expressions-list" },
        explicitXhrBreakpoints.map(this.renderBreakpoint),
        (showInput || explicitXhrBreakpoints.size === 0) && this.renderXHRInput(this.handleNewSubmit)
      );
    };

    this.renderCheckbox = () => {
      const { shouldPauseOnAny, togglePauseOnAny, xhrBreakpoints } = this.props;

      return _react2.default.createElement(
        "div",
        {
          className: (0, _classnames2.default)("breakpoints-exceptions-options", {
            empty: xhrBreakpoints.size === 0
          })
        },
        _react2.default.createElement(_ExceptionOption2.default, {
          className: "breakpoints-exceptions",
          label: L10N.getStr("pauseOnAnyXHR"),
          isChecked: shouldPauseOnAny,
          onChange: () => togglePauseOnAny()
        })
      );
    };

    this.state = {
      editing: false,
      inputValue: "",
      inputMethod: "",
      focused: false,
      editIndex: -1
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const input = this._input;

    if (!input) {
      return;
    }

    if (!prevState.editing && this.state.editing) {
      input.setSelectionRange(0, input.value.length);
      input.focus();
    } else if (this.props.showInput && !this.state.focused) {
      input.focus();
    }
  }

  renderXHRInput(onSubmit) {
    const { focused, inputValue } = this.state;
    const { showInput } = this.props;
    const placeholder = L10N.getStr("xhrBreakpoints.placeholder");

    return _react2.default.createElement(
      "li",
      {
        className: (0, _classnames2.default)("xhr-input-container", { focused }),
        key: "xhr-input"
      },
      _react2.default.createElement(
        "form",
        { className: "xhr-input-form", onSubmit: onSubmit },
        _react2.default.createElement("input", {
          className: "xhr-input",
          type: "text",
          placeholder: placeholder,
          onChange: this.handleChange,
          onBlur: this.hideInput,
          onFocus: this.onFocus,
          autoFocus: showInput,
          value: inputValue,
          ref: c => this._input = c
        }),
        _react2.default.createElement("input", { type: "submit", style: { display: "none" } })
      )
    );
  }


  render() {
    return _react2.default.createElement(
      "div",
      null,
      this.renderCheckbox(),
      this.renderBreakpoints()
    );
  }
} /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

const mapStateToProps = state => {
  return {
    xhrBreakpoints: (0, _selectors.getXHRBreakpoints)(state),
    shouldPauseOnAny: (0, _selectors.shouldPauseOnAnyXHR)(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  setXHRBreakpoint: _actions2.default.setXHRBreakpoint,
  removeXHRBreakpoint: _actions2.default.removeXHRBreakpoint,
  enableXHRBreakpoint: _actions2.default.enableXHRBreakpoint,
  disableXHRBreakpoint: _actions2.default.disableXHRBreakpoint,
  updateXHRBreakpoint: _actions2.default.updateXHRBreakpoint,
  togglePauseOnAny: _actions2.default.togglePauseOnAny
})(XHRBreakpoints);