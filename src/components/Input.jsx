import React from "react";

function Input(props) {
  const { name, type, placeholder, className, label, id, error, register } =
    props;
  return (
    <>
      <div className="flex items-center">
        <label className="mr-3" htmlFor={id}>
          {label}
        </label>
        <br />
        <input
          className={className}
          placeholder={placeholder}
          {...(register
            ? register(name, {
                valueAsNumber: type === "number" ? true : false,
              })
            : {})}
          {...props}
        />
      </div>
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </>
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
