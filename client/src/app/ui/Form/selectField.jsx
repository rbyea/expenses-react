import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
  chart
}) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const getInputClassName = () => {
    return error
      ? "form-select is-invalid"
      : error === undefined
      ? "form-select"
      : "form-select is-valid";
  };

  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.values(options)
      : options;

  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className={getInputClassName()}
      >
        <option value="" disabled>
          Выбрать
        </option>
        {optionsArray.length > 0 &&
          optionsArray.map((obj) => (
            <option
              name={obj.label}
              key={obj.value}
              value={chart === true ? obj.label : obj.value}
            >
              {obj.label}
            </option>
          ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  chart: PropTypes.bool,
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default SelectField;
