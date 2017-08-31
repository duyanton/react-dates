module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("airbnb-prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("../defaultPhrases");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("../../constants");

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("is-touch-device");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function () {
      function render() {
        return _react2["default"].createElement(
          "svg",
          _extends({ viewBox: "0 0 12 12" }, this.props),
          _react2["default"].createElement("path", { fillRule: "evenodd", d: "M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z" })
        );
      }

      return render;
    }()
  }]);

  return SVG;
}(_react2["default"].Component);

exports["default"] = SVG;

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

module.exports = require("../utils/toISODateString");

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = require("../utils/isInclusivelyAfterDay");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("./OutsideClickHandler");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("consolidated-events");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("object.assign");

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports) {

module.exports = require("../utils/getResponsiveContainerStyles");

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

module.exports = require("../utils/toLocalizedDateString");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("../utils/toMomentObject");

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-portal");

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

module.exports = require("../shapes/SingleDatePickerShape");

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, exports) {

module.exports = require("./DayPickerSingleDateController");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("./SingleDatePickerInput");

/***/ }),
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _object = __webpack_require__(18);

var _object2 = _interopRequireDefault(_object);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(7);

var _moment2 = _interopRequireDefault(_moment);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPortal = __webpack_require__(39);

var _reactPortal2 = _interopRequireDefault(_reactPortal);

var _airbnbPropTypes = __webpack_require__(1);

var _consolidatedEvents = __webpack_require__(17);

var _isTouchDevice = __webpack_require__(9);

var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

var _SingleDatePickerShape = __webpack_require__(44);

var _SingleDatePickerShape2 = _interopRequireDefault(_SingleDatePickerShape);

var _defaultPhrases = __webpack_require__(3);

var _OutsideClickHandler = __webpack_require__(16);

var _OutsideClickHandler2 = _interopRequireDefault(_OutsideClickHandler);

var _toMomentObject = __webpack_require__(33);

var _toMomentObject2 = _interopRequireDefault(_toMomentObject);

var _toLocalizedDateString = __webpack_require__(32);

var _toLocalizedDateString2 = _interopRequireDefault(_toLocalizedDateString);

var _getResponsiveContainerStyles = __webpack_require__(28);

var _getResponsiveContainerStyles2 = _interopRequireDefault(_getResponsiveContainerStyles);

var _toISODateString = __webpack_require__(13);

var _toISODateString2 = _interopRequireDefault(_toISODateString);

var _SingleDatePickerInput = __webpack_require__(59);

var _SingleDatePickerInput2 = _interopRequireDefault(_SingleDatePickerInput);

var _DayPickerSingleDateController = __webpack_require__(58);

var _DayPickerSingleDateController2 = _interopRequireDefault(_DayPickerSingleDateController);

var _close = __webpack_require__(11);

var _close2 = _interopRequireDefault(_close);

var _isInclusivelyAfterDay = __webpack_require__(15);

var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)(_SingleDatePickerShape2['default']);

var TIMES = ['12:00 AM', '12:30 AM', '01:00 AM', '01:30 AM', '02:00 AM', '02:30 AM', '03:00 AM', '03:30 AM', '04:00 AM', '04:30 AM', '05:00 AM', '05:30 AM', '06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'];

var defaultProps = {
  // required props for a functional interactive SingleDatePicker
  date: null,
  focused: false,

  // input related props
  id: 'date',
  placeholder: 'Date',
  disabled: false,
  required: false,
  readOnly: false,
  screenReaderInputMessage: '',
  showClearDate: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customInputIcon: null,
  customCloseIcon: null,

  // calendar presentation and interaction related props
  orientation: _constants.HORIZONTAL_ORIENTATION,
  anchorDirection: _constants.ANCHOR_LEFT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  firstDayOfWeek: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  renderCalendarInfo: null,
  hideKeyboardShortcutsPanel: false,
  daySize: _constants.DAY_SIZE,
  isRTL: false,

  // navigation related props
  navPrev: null,
  navNext: null,

  onPrevMonthClick: function () {
    function onPrevMonthClick() {}

    return onPrevMonthClick;
  }(),
  onNextMonthClick: function () {
    function onNextMonthClick() {}

    return onNextMonthClick;
  }(),
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),

  // month presentation and interaction related props
  renderMonth: null,

  // day presentation and interaction related props
  renderDay: null,
  enableOutsideDays: false,
  isDayBlocked: function () {
    function isDayBlocked() {
      return false;
    }

    return isDayBlocked;
  }(),
  isOutsideRange: function () {
    function isOutsideRange(day) {
      return !(0, _isInclusivelyAfterDay2['default'])(day, (0, _moment2['default'])());
    }

    return isOutsideRange;
  }(),
  isDayHighlighted: function () {
    function isDayHighlighted() {}

    return isDayHighlighted;
  }(),

  // internationalization props
  displayFormat: function () {
    function displayFormat() {
      return _moment2['default'].localeData().longDateFormat('L');
    }

    return displayFormat;
  }(),
  monthFormat: 'MMMM YYYY',
  phrases: _defaultPhrases.SingleDatePickerPhrases
};

var SingleDatePicker = function (_React$Component) {
  _inherits(SingleDatePicker, _React$Component);

  function SingleDatePicker(props) {
    _classCallCheck(this, SingleDatePicker);

    var _this = _possibleConstructorReturn(this, (SingleDatePicker.__proto__ || Object.getPrototypeOf(SingleDatePicker)).call(this, props));

    _this.isTouchDevice = false;

    _this.state = {
      dayPickerContainerStyles: {},
      isDayPickerFocused: false,
      isInputFocused: false,
      isTimeItemHovered: false,
      date: (0, _moment2['default'])(),
      time: null,
      dateTime: props.dateTime && (0, _moment2['default'])(props.dateTime * 1000),
      timeItemElementId: null
    };

    if (props.dateTime) {
      var time = (0, _moment2['default'])(props.dateTime * 1000);
      _this.state.date = time;
      _this.state.time = time.format('hh:mm A');
    }

    _this.onDayPickerFocus = _this.onDayPickerFocus.bind(_this);
    _this.onDayPickerBlur = _this.onDayPickerBlur.bind(_this);

    _this.onChange = _this.onChange.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    _this.onClearFocus = _this.onClearFocus.bind(_this);
    _this.clearDate = _this.clearDate.bind(_this);
    _this.onDateChange = _this.onDateChange.bind(_this);
    _this.onTimeChange = _this.onTimeChange.bind(_this);
    _this.onDateTimeSelect = _this.onDateTimeSelect.bind(_this);
    _this.onTimeItemMouseEnter = _this.onTimeItemMouseEnter.bind(_this);
    _this.onTimeItemMouseLeave = _this.onTimeItemMouseLeave.bind(_this);

    _this.responsivizePickerPosition = _this.responsivizePickerPosition.bind(_this);
    return _this;
  }

  /* istanbul ignore next */

  _createClass(SingleDatePicker, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        this.resizeHandle = (0, _consolidatedEvents.addEventListener)(window, 'resize', this.responsivizePickerPosition, { passive: true });
        this.responsivizePickerPosition();

        if (this.props.focused) {
          this.setState({
            isInputFocused: true
          });
        }

        this.isTouchDevice = (0, _isTouchDevice2['default'])();
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(prevProps) {
        if (!prevProps.focused && this.props.focused) {
          this.responsivizePickerPosition();
        }
      }

      return componentDidUpdate;
    }()

    /* istanbul ignore next */

  }, {
    key: 'componentWillUnmount',
    value: function () {
      function componentWillUnmount() {
        (0, _consolidatedEvents.removeEventListener)(this.resizeHandle);
      }

      return componentWillUnmount;
    }()
  }, {
    key: 'onChange',
    value: function () {
      function onChange(dateString) {
        var _props = this.props,
            isOutsideRange = _props.isOutsideRange,
            keepOpenOnDateSelect = _props.keepOpenOnDateSelect,
            onDateChange = _props.onDateChange,
            onFocusChange = _props.onFocusChange,
            onClose = _props.onClose;

        var newDate = (0, _toMomentObject2['default'])(dateString, this.getDisplayFormat());

        var isValid = newDate && !isOutsideRange(newDate);
        if (isValid) {
          onDateChange(newDate);
          if (!keepOpenOnDateSelect) {
            onFocusChange({ focused: false });
            onClose({ date: newDate });
          }
        } else {
          onDateChange(null);
        }
      }

      return onChange;
    }()
  }, {
    key: 'onFocus',
    value: function () {
      function onFocus() {
        var _props2 = this.props,
            disabled = _props2.disabled,
            onFocusChange = _props2.onFocusChange,
            withPortal = _props2.withPortal,
            withFullScreenPortal = _props2.withFullScreenPortal;

        var moveFocusToDayPicker = withPortal || withFullScreenPortal || this.isTouchDevice;
        if (moveFocusToDayPicker) {
          this.onDayPickerFocus();
        } else {
          this.onDayPickerBlur();
        }

        if (!disabled) {
          onFocusChange({ focused: true });
        }
      }

      return onFocus;
    }()
  }, {
    key: 'onClearFocus',
    value: function () {
      function onClearFocus() {
        var _props3 = this.props,
            startDate = _props3.startDate,
            endDate = _props3.endDate,
            focused = _props3.focused,
            onFocusChange = _props3.onFocusChange,
            onClose = _props3.onClose;

        if (!focused) return;

        this.setState({
          isInputFocused: false,
          isDayPickerFocused: false
        });

        onFocusChange({ focused: false });
        onClose({ startDate: startDate, endDate: endDate });
      }

      return onClearFocus;
    }()
  }, {
    key: 'onDayPickerFocus',
    value: function () {
      function onDayPickerFocus() {
        this.setState({
          isInputFocused: false,
          isDayPickerFocused: true
        });
      }

      return onDayPickerFocus;
    }()
  }, {
    key: 'onDayPickerBlur',
    value: function () {
      function onDayPickerBlur() {
        this.setState({
          isInputFocused: true,
          isDayPickerFocused: false
        });
      }

      return onDayPickerBlur;
    }()
  }, {
    key: 'onDateChange',
    value: function () {
      function onDateChange(date) {
        var dateTime = (0, _moment2['default'])(String(date.format('DD/MM/YYYY')) + ' ' + String(this.state.time), 'DD/MM/YYYY hh:mm A');
        this.props.onDateTimeChange(dateTime.unix());
        this.setState({ dateTime: dateTime, date: date });
      }

      return onDateChange;
    }()
  }, {
    key: 'onTimeChange',
    value: function () {
      function onTimeChange(time) {
        var dateTime = (0, _moment2['default'])(String(this.state.date.format('DD/MM/YYYY')) + ' ' + String(time), 'DD/MM/YYYY hh:mm A');
        this.props.onDateTimeChange(dateTime.unix());
        this.setState({ dateTime: dateTime, time: time });
      }

      return onTimeChange;
    }()
  }, {
    key: 'onTimeItemMouseEnter',
    value: function () {
      function onTimeItemMouseEnter(e) {
        this.setState({
          isTimeItemHovered: true,
          timeItemElementId: e.target.getAttribute('id')
        });
      }

      return onTimeItemMouseEnter;
    }()
  }, {
    key: 'onTimeItemMouseLeave',
    value: function () {
      function onTimeItemMouseLeave() {
        this.setState({
          isTimeItemHovered: false,
          timeItemElementId: null
        });
      }

      return onTimeItemMouseLeave;
    }()
  }, {
    key: 'onDateTimeSelect',
    value: function () {
      function onDateTimeSelect() {
        this.props.onDateTimeChange(this.state.dateTime.unix());
        this.props.onFocusChange({ focused: null });
        this.props.onClose();
      }

      return onDateTimeSelect;
    }()
  }, {
    key: 'getDateString',
    value: function () {
      function getDateString(date) {
        var displayFormat = this.getDisplayFormat();
        if (date && displayFormat) {
          return date && date.format(displayFormat);
        }
        return (0, _toLocalizedDateString2['default'])(date);
      }

      return getDateString;
    }()
  }, {
    key: 'getDateTimeString',
    value: function () {
      function getDateTimeString() {
        if (!this.state.dateTime) return '';
        var value = this.state.dateTime;
        var dayName = value.format('dddd');
        dayName = dayName.substr(0, 1).toUpperCase() + dayName.substr(1);
        var date = value.format('D');
        var month = value.format('M');
        var year = value.format('YYYY');
        var hours = value.format('HH:mm');
        var displayString = String(dayName) + ', ' + String(date) + ' th\xE1ng ' + String(month) + ', ' + String(year) + ' v\xE0o l\xFAc ' + String(hours);

        return displayString;
      }

      return getDateTimeString;
    }()
  }, {
    key: 'getDayPickerContainerClasses',
    value: function () {
      function getDayPickerContainerClasses() {
        var _props4 = this.props,
            orientation = _props4.orientation,
            withPortal = _props4.withPortal,
            withFullScreenPortal = _props4.withFullScreenPortal,
            anchorDirection = _props4.anchorDirection,
            isRTL = _props4.isRTL;

        var dayPickerClassName = (0, _classnames2['default'])('SingleDatePicker__picker', {
          'SingleDatePicker__picker--direction-left': anchorDirection === _constants.ANCHOR_LEFT,
          'SingleDatePicker__picker--direction-right': anchorDirection === _constants.ANCHOR_RIGHT,
          'SingleDatePicker__picker--horizontal': orientation === _constants.HORIZONTAL_ORIENTATION,
          'SingleDatePicker__picker--vertical': orientation === _constants.VERTICAL_ORIENTATION,
          'SingleDatePicker__picker--portal': withPortal || withFullScreenPortal,
          'SingleDatePicker__picker--full-screen-portal': withFullScreenPortal,
          'SingleDatePicker__picker--rtl': isRTL
        });

        return dayPickerClassName;
      }

      return getDayPickerContainerClasses;
    }()
  }, {
    key: 'getDisplayFormat',
    value: function () {
      function getDisplayFormat() {
        var displayFormat = this.props.displayFormat;

        return typeof displayFormat === 'string' ? displayFormat : displayFormat();
      }

      return getDisplayFormat;
    }()
  }, {
    key: 'clearDate',
    value: function () {
      function clearDate() {
        var _props5 = this.props,
            onDateChange = _props5.onDateChange,
            reopenPickerOnClearDate = _props5.reopenPickerOnClearDate,
            onFocusChange = _props5.onFocusChange;

        onDateChange(null);
        if (reopenPickerOnClearDate) {
          onFocusChange({ focused: true });
        }
      }

      return clearDate;
    }()

    /* istanbul ignore next */

  }, {
    key: 'responsivizePickerPosition',
    value: function () {
      function responsivizePickerPosition() {
        // It's possible the portal props have been changed in response to window resizes
        // So let's ensure we reset this back to the base state each time
        this.setState({ dayPickerContainerStyles: {} });

        var _props6 = this.props,
            anchorDirection = _props6.anchorDirection,
            horizontalMargin = _props6.horizontalMargin,
            withPortal = _props6.withPortal,
            withFullScreenPortal = _props6.withFullScreenPortal,
            focused = _props6.focused;
        var dayPickerContainerStyles = this.state.dayPickerContainerStyles;

        if (!focused) {
          return;
        }

        var isAnchoredLeft = anchorDirection === _constants.ANCHOR_LEFT;

        if (!withPortal && !withFullScreenPortal) {
          var containerRect = this.dayPickerContainer.getBoundingClientRect();
          var currentOffset = dayPickerContainerStyles[anchorDirection] || 0;
          var containerEdge = isAnchoredLeft ? containerRect[_constants.ANCHOR_RIGHT] : containerRect[_constants.ANCHOR_LEFT];

          this.setState({
            dayPickerContainerStyles: (0, _getResponsiveContainerStyles2['default'])(anchorDirection, currentOffset, containerEdge, horizontalMargin)
          });
        }
      }

      return responsivizePickerPosition;
    }()
  }, {
    key: 'maybeRenderDayPickerWithPortal',
    value: function () {
      function maybeRenderDayPickerWithPortal() {
        var _props7 = this.props,
            focused = _props7.focused,
            withPortal = _props7.withPortal,
            withFullScreenPortal = _props7.withFullScreenPortal;

        if (!focused) {
          return null;
        }

        if (withPortal || withFullScreenPortal) {
          return _react2['default'].createElement(_reactPortal2['default'], { isOpened: true }, this.renderDayPicker());
        }

        return this.renderDayPicker();
      }

      return maybeRenderDayPickerWithPortal;
    }()
  }, {
    key: 'renderDayPicker',
    value: function () {
      function renderDayPicker() {
        var _this2 = this;

        var _props8 = this.props,
            onDateChange = _props8.onDateChange,
            date = _props8.date,
            dateTime = _props8.dateTime,
            onFocusChange = _props8.onFocusChange,
            focused = _props8.focused,
            enableOutsideDays = _props8.enableOutsideDays,
            numberOfMonths = _props8.numberOfMonths,
            orientation = _props8.orientation,
            monthFormat = _props8.monthFormat,
            navPrev = _props8.navPrev,
            navNext = _props8.navNext,
            onPrevMonthClick = _props8.onPrevMonthClick,
            onNextMonthClick = _props8.onNextMonthClick,
            withPortal = _props8.withPortal,
            withFullScreenPortal = _props8.withFullScreenPortal,
            keepOpenOnDateSelect = _props8.keepOpenOnDateSelect,
            initialVisibleMonth = _props8.initialVisibleMonth,
            renderMonth = _props8.renderMonth,
            renderDay = _props8.renderDay,
            renderCalendarInfo = _props8.renderCalendarInfo,
            hideKeyboardShortcutsPanel = _props8.hideKeyboardShortcutsPanel,
            firstDayOfWeek = _props8.firstDayOfWeek,
            customCloseIcon = _props8.customCloseIcon,
            phrases = _props8.phrases,
            daySize = _props8.daySize,
            isRTL = _props8.isRTL,
            isOutsideRange = _props8.isOutsideRange,
            isDayBlocked = _props8.isDayBlocked,
            isDayHighlighted = _props8.isDayHighlighted;
        var _state = this.state,
            dayPickerContainerStyles = _state.dayPickerContainerStyles,
            isDayPickerFocused = _state.isDayPickerFocused;

        var onOutsideClick = !withFullScreenPortal && withPortal ? this.onClearFocus : undefined;
        var closeIcon = customCloseIcon || _react2['default'].createElement(_close2['default'], null);

        return _react2['default'].createElement('div', { // eslint-disable-line jsx-a11y/no-static-element-interactions
          ref: function () {
            function ref(_ref) {
              _this2.dayPickerContainer = _ref;
            }

            return ref;
          }(),
          className: this.getDayPickerContainerClasses(),
          style: (0, _object2['default'])(dayPickerContainerStyles, {
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '3px',
            boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.3)'
          }),
          onClick: onOutsideClick
        }, _react2['default'].createElement('div', { style: {
            display: 'flex',
            flexDirection: 'row',
            minHeight: '295px',
            maxHeight: '350px',
            borderBottom: 'solid 1px #e9e9e9'
          }
        }, _react2['default'].createElement(_DayPickerSingleDateController2['default'], {
          date: this.state.date,
          onDateChange: this.onDateChange,
          onFocusChange: onFocusChange,
          orientation: orientation,
          enableOutsideDays: enableOutsideDays,
          numberOfMonths: numberOfMonths,
          monthFormat: monthFormat,
          withPortal: withPortal || withFullScreenPortal,
          focused: focused,
          keepOpenOnDateSelect: keepOpenOnDateSelect,
          hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
          initialVisibleMonth: initialVisibleMonth,
          navPrev: navPrev,
          navNext: navNext,
          onPrevMonthClick: onPrevMonthClick,
          onNextMonthClick: onNextMonthClick,
          renderMonth: renderMonth,
          renderDay: renderDay,
          renderCalendarInfo: renderCalendarInfo,
          isFocused: isDayPickerFocused,
          phrases: phrases,
          daySize: daySize,
          isRTL: isRTL,
          isOutsideRange: isOutsideRange,
          isDayBlocked: isDayBlocked,
          isDayHighlighted: isDayHighlighted,
          firstDayOfWeek: firstDayOfWeek
        }), _react2['default'].createElement('div', { style: { width: '25%', backgroundColor: '#f9f9f9', padding: '15px 0 15px 0' } }, _react2['default'].createElement('div', { style: { height: '90%', margin: '15px 0', overflow: 'scroll' } }, _react2['default'].createElement('ul', { style: { margin: '0', height: '100%', padding: '0 20px' } },

        /* eslint-disable */
        TIMES.map(function (time) {
          var classNames = (0, _classnames2['default'])('TimeListItem', {
            'TimeListItem--selected': time === _this2.state.time,
            'TimeListItem--hovered': _this2.state.isTimeItemHovered && time === _this2.state.timeItemElementId
          });
          return _react2['default'].createElement('li', {
            key: time,
            id: time,
            className: classNames,
            onMouseEnter: _this2.onTimeItemMouseEnter,
            onMouseLeave: _this2.onTimeItemMouseLeave,
            onClick: function () {
              function onClick() {
                return _this2.onTimeChange(time);
              }

              return onClick;
            }()
          }, time);
        })
        /* eslint-enable */

        )))), _react2['default'].createElement('div', { className: 'SingleDatePickerFooter' }, _react2['default'].createElement('div', null, this.state.date && this.state.time && String(this.state.date.format('DD/MM/YYYY')) + ', ' + String(this.state.time)), _react2['default'].createElement('div', null, _react2['default'].createElement('button', { className: 'CalendarDay__selectButton', onClick: this.onDateTimeSelect }, "Ch\u1ECDn"))), withFullScreenPortal && _react2['default'].createElement('button', {
          'aria-label': phrases.closeDatePicker,
          className: 'SingleDatePicker__close',
          type: 'button',
          onClick: this.onClearFocus
        }, _react2['default'].createElement('div', { className: 'SingleDatePicker__close-icon' }, closeIcon)));
      }

      return renderDayPicker;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props9 = this.props,
            id = _props9.id,
            placeholder = _props9.placeholder,
            disabled = _props9.disabled,
            focused = _props9.focused,
            required = _props9.required,
            readOnly = _props9.readOnly,
            showClearDate = _props9.showClearDate,
            showDefaultInputIcon = _props9.showDefaultInputIcon,
            inputIconPosition = _props9.inputIconPosition,
            customInputIcon = _props9.customInputIcon,
            date = _props9.date,
            phrases = _props9.phrases,
            withPortal = _props9.withPortal,
            withFullScreenPortal = _props9.withFullScreenPortal,
            screenReaderInputMessage = _props9.screenReaderInputMessage,
            isRTL = _props9.isRTL;
        var isInputFocused = this.state.isInputFocused;

        // const displayValue = this.getDateString(date);

        var displayValue = this.getDateTimeString();
        var inputValue = (0, _toISODateString2['default'])(date);

        var onOutsideClick = !withPortal && !withFullScreenPortal ? this.onClearFocus : undefined;

        return _react2['default'].createElement('div', { className: 'SingleDatePicker' }, _react2['default'].createElement(_OutsideClickHandler2['default'], { onOutsideClick: onOutsideClick }, _react2['default'].createElement(_SingleDatePickerInput2['default'], {
          id: id,
          placeholder: placeholder,
          focused: focused,
          isFocused: isInputFocused,
          disabled: disabled,
          required: required,
          readOnly: readOnly,
          showCaret: !withPortal && !withFullScreenPortal,
          onClearDate: this.clearDate,
          showClearDate: showClearDate,
          showDefaultInputIcon: showDefaultInputIcon,
          inputIconPosition: inputIconPosition,
          customInputIcon: customInputIcon,
          displayValue: displayValue,
          inputValue: inputValue,
          onChange: this.onChange,
          onFocus: this.onFocus,
          onKeyDownShiftTab: this.onClearFocus,
          onKeyDownTab: this.onClearFocus,
          onKeyDownArrowDown: this.onDayPickerFocus,
          screenReaderMessage: screenReaderInputMessage,
          phrases: phrases,
          isRTL: isRTL
        }), this.maybeRenderDayPickerWithPortal()));
      }

      return render;
    }()
  }]);

  return SingleDatePicker;
}(_react2['default'].Component);

exports['default'] = SingleDatePicker;

SingleDatePicker.propTypes = (0, _object2['default'])(propTypes, {
  onDateTimeChange: _propTypes2['default'].func.isRequired
});
SingleDatePicker.defaultProps = defaultProps;

/***/ })
/******/ ]);