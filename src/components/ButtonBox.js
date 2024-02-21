import React from "react";
import "./ButtonBox.css";
import Button from "./Button.js";

const ButtonBox = ({handleClick}) => {
  const btnValues = [
    ["C", "+-", "%", "/"],
    ["7", "8", "9", "X"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];
  return (
    <div className="buttonbox">
      {btnValues.flat().map((button, i) => {

        var classname = "";
        if (button === "=") {
          classname = "equals";
        }

        return (
          <Button
            key={i}
            value={button}
            classname={classname}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default ButtonBox;
