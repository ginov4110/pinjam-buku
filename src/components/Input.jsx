import React from "react";

function Input(props) {
  const { name, type, placeholder, className, label, id, error, register } =
    props;
  return (
    <>
      <div className="flex flex-col mt-3">
        <label className="mr-3" htmlFor={id}>
          {label}
        </label>
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
  const { label, placeholder, id, error, register, options = [], name } = props;

  return (
    <div className="flex flex-col mt-3">
      <label htmlFor={id}>{label}</label>
      <select
        className="select select-bordered w-48 max-w-xs ml-3"
        defaultValue=""
        {...(register ? register(name) : {})}
        {...props}>
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} name={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

function SelectForm(props) {
  const { label, placeholder, id, error, register, options = [], name } = props;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        className="select select-bordered w-48 max-w-xs ml-3"
        defaultValue=""
        {...(register ? register(name) : {})}
        {...props}>
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} name={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

export { Input, Select, SelectForm };
