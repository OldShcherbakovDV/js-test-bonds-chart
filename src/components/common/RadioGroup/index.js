import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./radio-group.css";
/**
 * Render radio group.
 *
 * @param {string} value - The current value of radio group.
 * @param {{value: string; text: string}[]} options - The options list for radio group.
 * @param {function(newValue)} onChange - The callback that new value select.
 */
const RadioGroup = ({ value, options, onChange }) => (
  <div className="radio-group">
    {options.map((option, i) => (
      <button
        key={option.text}
        onClick={() => onChange(option.value)}
        className={cn(
          "radio-group__item",
          option.value === value ? "radio-group__item_selected" : ""
        )}
      >
        {option.text}
      </button>
    ))}
  </div>
);

RadioGroup.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioGroup;
