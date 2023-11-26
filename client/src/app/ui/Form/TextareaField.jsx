import React from "react";
import PropTypes from "prop-types";

const TextareaField = ({
  name,
  placeholder,
  value,
  error,
  onChange,
  label
}) => {
  const handleChange = (value) => {
    onChange({ name, value: value });
  };

  return (
    <div className="form-col">
      <label>
        {label && <span>{label}</span>}
        <textarea
          className="form-control"
          value={value || ""}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value)}
        ></textarea>
      </label>
      <span className="error-form">{error}</span>
    </div>
  );
};

TextareaField.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default TextareaField;
