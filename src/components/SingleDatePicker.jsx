import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cx from 'classnames';
import Portal from 'react-portal';
import { forbidExtraProps } from 'airbnb-prop-types';
import { addEventListener, removeEventListener } from 'consolidated-events';
import isTouchDevice from 'is-touch-device';

import SingleDatePickerShape from '../shapes/SingleDatePickerShape';
import { SingleDatePickerPhrases } from '../defaultPhrases';

import OutsideClickHandler from './OutsideClickHandler';
import toMomentObject from '../utils/toMomentObject';
import toLocalizedDateString from '../utils/toLocalizedDateString';
import getResponsiveContainerStyles from '../utils/getResponsiveContainerStyles';

import toISODateString from '../utils/toISODateString';

import SingleDatePickerInput from './SingleDatePickerInput';
import DayPickerSingleDateController from './DayPickerSingleDateController';

import CloseButton from '../svg/close.svg';

import isInclusivelyAfterDay from '../utils/isInclusivelyAfterDay';

import {
  HORIZONTAL_ORIENTATION,
  VERTICAL_ORIENTATION,
  ANCHOR_LEFT,
  ANCHOR_RIGHT,
  DAY_SIZE,
  ICON_BEFORE_POSITION,
} from '../../constants';

const propTypes = forbidExtraProps(SingleDatePickerShape);

const TIMES = [
  '12:00 AM',
  '12:30 AM',
  '01:00 AM',
  '01:30 AM',
  '02:00 AM',
  '02:30 AM',
  '03:00 AM',
  '03:30 AM',
  '04:00 AM',
  '04:30 AM',
  '05:00 AM',
  '05:30 AM',
  '06:00 AM',
  '06:30 AM',
  '07:00 AM',
  '07:30 AM',
  '08:00 AM',
  '08:30 AM',
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
  '05:00 PM',
  '05:30 PM',
  '06:00 PM',
  '06:30 PM',
  '07:00 PM',
  '07:30 PM',
  '08:00 PM',
  '08:30 PM',
  '09:00 PM',
  '09:30 PM',
  '10:00 PM',
  '10:30 PM',
  '11:00 PM',
  '11:30 PM',
];

const defaultProps = {
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
  inputIconPosition: ICON_BEFORE_POSITION,
  customInputIcon: null,
  customCloseIcon: null,

  // calendar presentation and interaction related props
  orientation: HORIZONTAL_ORIENTATION,
  anchorDirection: ANCHOR_LEFT,
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
  daySize: DAY_SIZE,
  isRTL: false,

  // navigation related props
  navPrev: null,
  navNext: null,

  onPrevMonthClick() {},
  onNextMonthClick() {},
  onClose() {},

  // month presentation and interaction related props
  renderMonth: null,

  // day presentation and interaction related props
  renderDay: null,
  enableOutsideDays: false,
  isDayBlocked: () => false,
  isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
  isDayHighlighted: () => {},

  // internationalization props
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  phrases: SingleDatePickerPhrases,
};

export default class SingleDatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.isTouchDevice = false;

    this.state = {
      dayPickerContainerStyles: {},
      isDayPickerFocused: false,
      isInputFocused: false,
      isTimeItemHovered: false,
      date: moment(),
      time: null,
      dateTime: props.dateTime && moment(props.dateTime),
      timeItemElementId: null,
    };

    if (props.dateTime) {
      const time = moment(props.dateTime);
      this.state.date = time;
      this.state.time = time.format('hh:mm A');
    }

    this.onDayPickerFocus = this.onDayPickerFocus.bind(this);
    this.onDayPickerBlur = this.onDayPickerBlur.bind(this);

    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onClearFocus = this.onClearFocus.bind(this);
    this.clearDate = this.clearDate.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.onDateTimeSelect = this.onDateTimeSelect.bind(this);
    this.onTimeItemMouseEnter = this.onTimeItemMouseEnter.bind(this);
    this.onTimeItemMouseLeave = this.onTimeItemMouseLeave.bind(this);

    this.responsivizePickerPosition = this.responsivizePickerPosition.bind(this);
  }

  /* istanbul ignore next */
  componentDidMount() {
    this.resizeHandle = addEventListener(
      window,
      'resize',
      this.responsivizePickerPosition,
      { passive: true },
    );
    this.responsivizePickerPosition();

    if (this.props.focused) {
      this.setState({
        isInputFocused: true,
      });
    }

    this.isTouchDevice = isTouchDevice();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.focused && this.props.focused) {
      this.responsivizePickerPosition();
    }
  }

  /* istanbul ignore next */
  componentWillUnmount() {
    removeEventListener(this.resizeHandle);
  }

  onChange(dateString) {
    const {
      isOutsideRange,
      keepOpenOnDateSelect,
      onDateChange,
      onFocusChange,
      onClose,
    } = this.props;
    const newDate = toMomentObject(dateString, this.getDisplayFormat());

    const isValid = newDate && !isOutsideRange(newDate);
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

  onFocus() {
    const { disabled, onFocusChange, withPortal, withFullScreenPortal } = this.props;

    const moveFocusToDayPicker = withPortal || withFullScreenPortal || this.isTouchDevice;
    if (moveFocusToDayPicker) {
      this.onDayPickerFocus();
    } else {
      this.onDayPickerBlur();
    }

    if (!disabled) {
      onFocusChange({ focused: true });
    }
  }

  onClearFocus() {
    const { startDate, endDate, focused, onFocusChange, onClose } = this.props;
    if (!focused) return;

    this.setState({
      isInputFocused: false,
      isDayPickerFocused: false,
    });

    onFocusChange({ focused: false });
    onClose({ startDate, endDate });
  }

  onDayPickerFocus() {
    this.setState({
      isInputFocused: false,
      isDayPickerFocused: true,
    });
  }

  onDayPickerBlur() {
    this.setState({
      isInputFocused: true,
      isDayPickerFocused: false,
    });
  }

  onDateChange(date) {
    const dateTime = moment(`${date.format('DD/MM/YYYY')} ${this.state.time}`, 'DD/MM/YYYY hh:mm A');
    this.setState({ dateTime, date });
  }

  onTimeChange(time) {
    const dateTime = moment(`${this.state.date.format('DD/MM/YYYY')} ${time}`, 'DD/MM/YYYY hh:mm A');
    this.setState({ dateTime, time });
  }

  onTimeItemMouseEnter(e) {
    this.setState({
      isTimeItemHovered: true,
      timeItemElementId: e.target.getAttribute('id'),
    });
  }

  onTimeItemMouseLeave() {
    this.setState({
      isTimeItemHovered: false,
      timeItemElementId: null,
    });
  }

  onDateTimeSelect() {
    this.props.onDateTimeChange(this.state.dateTime.valueOf());
    this.props.onFocusChange({ focused: null });
    this.props.onClose();
  }

  getDateString(date) {
    const displayFormat = this.getDisplayFormat();
    if (date && displayFormat) {
      return date && date.format(displayFormat);
    }
    return toLocalizedDateString(date);
  }

  getDateTimeString() {
    if (!this.state.dateTime) return '';
    const value = this.state.dateTime;
    let dayName = value.format('dddd');
    dayName = dayName.substr(0, 1).toUpperCase() + dayName.substr(1);
    const date = value.format('D');
    const month = value.format('M');
    const year = value.format('YYYY');
    const hours = value.format('hh:mm A');
    const displayString = `${dayName}, ${date} tháng ${month}, ${year} vào lúc ${hours}`;

    return displayString;
  }

  getDayPickerContainerClasses() {
    const { orientation, withPortal, withFullScreenPortal, anchorDirection, isRTL } = this.props;

    const dayPickerClassName = cx('SingleDatePicker__picker', {
      'SingleDatePicker__picker--direction-left': anchorDirection === ANCHOR_LEFT,
      'SingleDatePicker__picker--direction-right': anchorDirection === ANCHOR_RIGHT,
      'SingleDatePicker__picker--horizontal': orientation === HORIZONTAL_ORIENTATION,
      'SingleDatePicker__picker--vertical': orientation === VERTICAL_ORIENTATION,
      'SingleDatePicker__picker--portal': withPortal || withFullScreenPortal,
      'SingleDatePicker__picker--full-screen-portal': withFullScreenPortal,
      'SingleDatePicker__picker--rtl': isRTL,
    });

    return dayPickerClassName;
  }

  getDisplayFormat() {
    const { displayFormat } = this.props;
    return typeof displayFormat === 'string' ? displayFormat : displayFormat();
  }

  clearDate() {
    const { onDateChange, reopenPickerOnClearDate, onFocusChange } = this.props;
    onDateChange(null);
    if (reopenPickerOnClearDate) {
      onFocusChange({ focused: true });
    }
  }

  /* istanbul ignore next */
  responsivizePickerPosition() {
    // It's possible the portal props have been changed in response to window resizes
    // So let's ensure we reset this back to the base state each time
    this.setState({ dayPickerContainerStyles: {} });

    const {
      anchorDirection,
      horizontalMargin,
      withPortal,
      withFullScreenPortal,
      focused,
    } = this.props;
    const { dayPickerContainerStyles } = this.state;

    if (!focused) {
      return;
    }

    const isAnchoredLeft = anchorDirection === ANCHOR_LEFT;

    if (!withPortal && !withFullScreenPortal) {
      const containerRect = this.dayPickerContainer.getBoundingClientRect();
      const currentOffset = dayPickerContainerStyles[anchorDirection] || 0;
      const containerEdge =
        isAnchoredLeft ? containerRect[ANCHOR_RIGHT] : containerRect[ANCHOR_LEFT];

      this.setState({
        dayPickerContainerStyles: getResponsiveContainerStyles(
          anchorDirection,
          currentOffset,
          containerEdge,
          horizontalMargin,
        ),
      });
    }
  }

  maybeRenderDayPickerWithPortal() {
    const { focused, withPortal, withFullScreenPortal } = this.props;

    if (!focused) {
      return null;
    }

    if (withPortal || withFullScreenPortal) {
      return (
        <Portal isOpened>
          {this.renderDayPicker()}
        </Portal>
      );
    }

    return this.renderDayPicker();
  }

  renderDayPicker() {
    const {
      onDateChange,
      date,
      dateTime,
      onFocusChange,
      focused,
      enableOutsideDays,
      numberOfMonths,
      orientation,
      monthFormat,
      navPrev,
      navNext,
      onPrevMonthClick,
      onNextMonthClick,
      withPortal,
      withFullScreenPortal,
      keepOpenOnDateSelect,
      initialVisibleMonth,
      renderMonth,
      renderDay,
      renderCalendarInfo,
      hideKeyboardShortcutsPanel,
      firstDayOfWeek,
      customCloseIcon,
      phrases,
      daySize,
      isRTL,
      isOutsideRange,
      isDayBlocked,
      isDayHighlighted,
    } = this.props;
    const { dayPickerContainerStyles, isDayPickerFocused } = this.state;

    const onOutsideClick = (!withFullScreenPortal && withPortal) ? this.onClearFocus : undefined;
    const closeIcon = customCloseIcon || (<CloseButton />);

    return (
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        ref={(ref) => { this.dayPickerContainer = ref; }}
        className={this.getDayPickerContainerClasses()}
        style={Object.assign(dayPickerContainerStyles, {
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '3px',
          boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.3)',
        })}
        onClick={onOutsideClick}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          minHeight: '295px',
          maxHeight: '350px',
          borderBottom: 'solid 1px #e9e9e9',
        }}
        >
          <DayPickerSingleDateController
            date={this.state.date}
            onDateChange={this.onDateChange}
            onFocusChange={onFocusChange}
            orientation={orientation}
            enableOutsideDays={enableOutsideDays}
            numberOfMonths={numberOfMonths}
            monthFormat={monthFormat}
            withPortal={withPortal || withFullScreenPortal}
            focused={focused}
            keepOpenOnDateSelect={keepOpenOnDateSelect}
            hideKeyboardShortcutsPanel={hideKeyboardShortcutsPanel}
            initialVisibleMonth={initialVisibleMonth}
            navPrev={navPrev}
            navNext={navNext}
            onPrevMonthClick={onPrevMonthClick}
            onNextMonthClick={onNextMonthClick}
            renderMonth={renderMonth}
            renderDay={renderDay}
            renderCalendarInfo={renderCalendarInfo}
            isFocused={isDayPickerFocused}
            phrases={phrases}
            daySize={daySize}
            isRTL={isRTL}
            isOutsideRange={isOutsideRange}
            isDayBlocked={isDayBlocked}
            isDayHighlighted={isDayHighlighted}
            firstDayOfWeek={firstDayOfWeek}
          />

          <div style={{ width: '127px', backgroundColor: '#f9f9f9', padding: '15px 0 15px 0' }}>
            <div style={{ height: '90%', margin: '15px 0', overflow: 'scroll' }}>
              <ul style={{ margin: '0', height: '100%', padding: '0 20px' }}>
                {
                  /* eslint-disable */
                  TIMES.map(time => {
                    const classNames = cx('TimeListItem', {
                      'TimeListItem--selected': time === this.state.time,
                      'TimeListItem--hovered': this.state.isTimeItemHovered && time === this.state.timeItemElementId,
                    });
                    return (
                      <li
                        key={time}
                        id={time}
                        className={classNames}
                        onMouseEnter={this.onTimeItemMouseEnter}
                        onMouseLeave={this.onTimeItemMouseLeave}
                        onClick={() => this.onTimeChange(time)}
                      >
                        {time}
                      </li>
                    );
                  })
                  /* eslint-enable */
                }
              </ul>
            </div>
          </div>
        </div>

        <div className="SingleDatePickerFooter">
          <div>
            {
              this.state.date &&
              this.state.time &&
              `${this.state.date.format('DD/MM/YYYY')}, ${this.state.time}`
            }
          </div>

          <div>
            <button className="SelectOKButton" onClick={this.onDateTimeSelect}>Chọn</button>
          </div>
        </div>

        {withFullScreenPortal && (
          <button
            aria-label={phrases.closeDatePicker}
            className="SingleDatePicker__close"
            type="button"
            onClick={this.onClearFocus}
          >
            <div className="SingleDatePicker__close-icon">
              {closeIcon}
            </div>
          </button>
        )}
      </div>
    );
  }

  render() {
    const {
      id,
      placeholder,
      disabled,
      focused,
      required,
      readOnly,
      showClearDate,
      showDefaultInputIcon,
      inputIconPosition,
      customInputIcon,
      date,
      phrases,
      withPortal,
      withFullScreenPortal,
      screenReaderInputMessage,
      isRTL,
    } = this.props;

    const { isInputFocused } = this.state;

    // const displayValue = this.getDateString(date);
    const displayValue = this.getDateTimeString();
    const inputValue = toISODateString(date);

    const onOutsideClick = (!withPortal && !withFullScreenPortal) ? this.onClearFocus : undefined;

    return (
      <div className="SingleDatePicker">
        <OutsideClickHandler onOutsideClick={onOutsideClick}>
          <SingleDatePickerInput
            id={id}
            placeholder={placeholder}
            focused={focused}
            isFocused={isInputFocused}
            disabled={disabled}
            required={required}
            readOnly={readOnly}
            showCaret={!withPortal && !withFullScreenPortal}
            onClearDate={this.clearDate}
            showClearDate={showClearDate}
            showDefaultInputIcon={showDefaultInputIcon}
            inputIconPosition={inputIconPosition}
            customInputIcon={customInputIcon}
            displayValue={displayValue}
            inputValue={inputValue}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onKeyDownShiftTab={this.onClearFocus}
            onKeyDownTab={this.onClearFocus}
            onKeyDownArrowDown={this.onDayPickerFocus}
            screenReaderMessage={screenReaderInputMessage}
            phrases={phrases}
            isRTL={isRTL}
          />

          {this.maybeRenderDayPickerWithPortal()}
        </OutsideClickHandler>
      </div>
    );
  }
}

SingleDatePicker.propTypes = Object.assign(propTypes, {
  onDateTimeChange: PropTypes.func.isRequired,
});
SingleDatePicker.defaultProps = defaultProps;
