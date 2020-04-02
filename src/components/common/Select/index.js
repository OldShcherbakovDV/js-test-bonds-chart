import React, { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./select.css";

/**
 * Render select.
 *
 * @param {string} value - The current value of select.
 * @param {{value: string; text: string}[]} options - The options list for select.
 * @param {function(newValue)} onChange - The callback that new value select.
 */
const Select = ({ value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOptions = options.filter(option => option.value === value);
  const onSelect = value => {
    setIsOpen(false);
    onChange(value);
  };

  const buttonText = selectedOptions.length ? selectedOptions[0].text : "";
  const optionsList = isOpen ? (
    <div className="select__options">
      {options.map(option => (
        <div
          className={cn(
            "select__options__item",
            option.value === value ? "select__options__item_selected" : ""
          )}
          onClick={() => onSelect(option.value)}
          key={option.value}
        >
          {option.text}
        </div>
      ))}
    </div>
  ) : null;

  return (
    <div className="select">
      <div
        className={cn("select__button", isOpen ? "select__button_open" : "")}
        onClick={() => setIsOpen(!isOpen)}
      >
        {buttonText}
      </div>
      {optionsList}
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Select;
