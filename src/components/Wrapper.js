import React, { useState } from "react";
import Screen from "./Screen.js";
import ButtonBox from "./ButtonBox.js";
import "./Wrapper.css";

const Wrapper = () => {
  let [num, setNum] = useState(0);
  let [res, setRes] = useState(0);
  let [oper, setOper] = useState("");

  function onButtonClick(event) {
    let value = event.target.innerHTML;

    switch (value) {
      case "C":
        resetClickHandler();
        break;
      case "+-":
        invertClickHandler();
        break;
      case "%":
        percentClickHandler();
        break;
      case "/":
      case "X":
      case "-":
      case "+":
        operClickHandler(value);
        break;
      case "=":
        equalsClickHandler();
        break;
      case ".":
        decClickHandler();
        break;
      default:
        numClickHandler(value);
    }
  }

  function resetClickHandler() {
    setNum(0);
    setRes(0);
    setOper("");
  }

  function invertClickHandler() {
    num = num * -1;
    setNum(num);
  }

  function percentClickHandler() {
    num = num / 100;
    if (num.toString().length > 13) {
      num = num.toExponential(9);
    }
    setNum(num);
  }

  function operClickHandler(value) {
    setOper(value);
    let result = 0;
    switch (oper) {
      case "+":
        result = res + num;
        break;
      case "-":
        result = res - num;
        break;
      case "X":
        result = res * num;
        break;
      case "/":
        if (num !== 0) {
          result = res / num;
        }
        break;
      default:
        result = num;
        break;
    }
    setNum(0);
    if (result.toString().length > 13) {
      result = result.toExponential(9);
    }
    setRes(result);
    return result;
  }

  function equalsClickHandler() {
    let result = operClickHandler("");
    setOper("=");
    setNum(result);
  }

  function decClickHandler() {
    if (!num.toString().includes(".")) {
      let newValue = num + ".";
      setNum(newValue);
    }
  }

  function numClickHandler(value) {
    if (num.toString().length < 13) {
      let newValue;

      if (num === 0 || oper === "=") {
        if (oper === "=") {
          setOper("");
        }
        newValue = value;
      } else {
        newValue = num + value;
      }
      newValue = Number(newValue);
      setNum(newValue);
    }
  }

  return (
    <div className="wrapper bg-dark-gray pa3 br3">
      <Screen value={num === 0 ? res : num} />
      <ButtonBox handleClick={onButtonClick} />
    </div>
  );
};

export default Wrapper;
