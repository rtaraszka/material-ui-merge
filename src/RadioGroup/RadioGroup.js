import React from "react";
import PropTypes from "prop-types";
import RadioGroupM from "@material-ui/core/RadioGroup";

function RadioGroup(props) {
  return <RadioGroupM {...props}>{props.children}</RadioGroupM>;
}

RadioGroup.propTypes = {
  /**
   * @uxpinignoreprop
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * @uxpinignoreprop
   * The name used to reference the value of the control.
   */
  name: PropTypes.string,

  /**
   * @ignore
   * @uxpinignoreprop
   */
  onBlur: PropTypes.func,

  /**
   * Callback fired when a RadioGroup button is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   * @param {string} value The `value` of the selected RadioGroup button
   */
  onChange: PropTypes.func,

  /**
   * @ignore
   * @uxpinignoreprop
   */
  onKeyDown: PropTypes.func,

  /**
   * Value of the selected RadioGroup button.
   * @uxpinbind onChange 1
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
};

export { RadioGroup as default };
