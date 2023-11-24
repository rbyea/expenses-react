import React from "react";
import PropTypes from "prop-types";

const TextareaField = ({ name, placeholder, value, error, onChange }) => {
  const handleChange = (value) => {
    onChange({ name, value: value });
  };

  return (
    <div className="form-col">
      <textarea
        className="form-control"
        value={value || ""}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      ></textarea>
      <span className="error-form">{error}</span>
    </div>
  );
};

TextareaField.propTypes = {
  error: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default TextareaField;
