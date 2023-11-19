import React from "react";
import PropTypes from "prop-types";

const InputField = ({ type, name, placeholder, value, error, onChange }) => {
  const handleChange = (value) => {
    onChange({ name, value: value });
  };

  return (
    <div className="form-col">
      <input
        className="form-control"
        value={value || ""}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      />
      <span className="error-form">{error}</span>
    </div>
  );
};

InputField.propTypes = {
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default InputField;
