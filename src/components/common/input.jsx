import React from "react";

const Input = ({ name, value, onChange, label , error , type}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        // ref={this.username}
        id={name}
        name={name}
        type={type}
        className="form-control"
      />
     { error && <div className="alert alert-danger">{error}</div>}
      {/* we can use autoFocus to put focus on an input field insead of Refs */}
    </div>
  );
};

export default Input;
