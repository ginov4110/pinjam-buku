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

export { Input };
