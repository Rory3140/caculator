import React from "react";
import "./Button.css";

const Button = ({ value, classname, onClick }) => {
  return (
    <button className={`${classname} br4 grow`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
