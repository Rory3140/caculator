import React, { useState } from "react";
import Screen from "./Screen.js";
import ButtonBox from "./ButtonBox.js";
import "./Wrapper.css";

const Wrapper = () => {
  let [num, setNum] = useState(0);
  let [displayNum, setDisplayNum] = useState(0);
  let [res, setRes] = useState("");
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
    setDisplayNum(0);
    setRes("");
    setOper("");
  }

  function invertClickHandler() {
    num = num * -1;
    setNum(num);
    displayNumHandler(num);
  }

  function percentClickHandler() {
    num = num / 100;
    if (num.toString().length > 13) {
      num = num.toExponential(9);
    }
    setNum(num);
    displayNumHandler(num);
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
    setRes(result);
    displayNumHandler(result);
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
      displayNumHandler(newValue);
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
      displayNumHandler(newValue);
    }
  }

  function displayNumHandler(value) {
    if (value.toString().includes(".")) {
      value = parseFloat(value)
        .toFixed(10)
        .replace(/\.?0+$/, "");
    }
    if (value.toString().length > 13) {
      value = value.toString().substring(0, 13);
    }
    setDisplayNum(value);
  }

  return (
    <div className="wrapper bg-dark-gray pa3 br3">
      <Screen value={displayNum} />
      <ButtonBox handleClick={onButtonClick} />
    </div>
  );
};

export default Wrapper;
