import React from "react";

function Button(props) {
  const { label, className } = props;
  return (
    <button type="submit" className={className}>
      {label}
    </button>
  );
}

export default Button;
