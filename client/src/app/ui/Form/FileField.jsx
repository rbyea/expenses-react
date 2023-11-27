import React from "react";
import PropTypes from "prop-types";

const FileField = ({ type, name, onChange }) => {
  return (
    <input
      className="form-control"
      type="file"
      name="profileImage"
      onChange={onChange}
    />
  );
};

FileField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
};

export default FileField;
