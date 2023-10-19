import React from "react";

function Button(props) {
  const { label, className, onClick } = props;
  return (
    <button type="submit" className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
