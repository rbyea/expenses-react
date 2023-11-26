import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  type,
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
        <input
          className="form-control"
          value={value || ""}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value)}
        />
      </label>
      <span className="error-form">{error}</span>
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default InputField;
