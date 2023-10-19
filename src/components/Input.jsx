import React from "react";

function Input(props) {
  const { name, type, placeholder, className } = props;
  return (
    <div className="flex items-center">
      <input
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

function Select(props) {
  const { label, value, placeholder, options = [], name } = props;

  return (
    <div>
      <label>{label}</label>
      <select
        className="select select-bordered w-48 max-w-xs ml-3"
        value={value}>
        <option disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option} name={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export { Input, Select };
