import React, { useEffect, useState } from "react";
import "./Tester.css";
import Button from "../button/Button";

let start = 0;
let end = 0;
let result = 0;

const Tester = () => {
  const [isRun, setIsRun] = useState(false);
  const [colorClass, setColorClass] = useState("blue");
  const [btnText, setBtnText] = useState("Start");
  const [currentTime, setCurrentTime] = useState(null);
  const [bestTime, setBestTime] = useState(null);

  const handleChange = () => {
    setIsRun((isRun) => !isRun);
  };

  const changeGreen = () => {
    setColorClass("green");
    start = Date.now();
  };

  const randomTimer = () => {
    let randomNum = Math.random() * (7000 - 3000) + 3000;
    setTimeout(changeGreen, randomNum);
  };

  const resultCheck = () => {
    if (currentTime != null) {
      setCurrentTime(result);
      if (result < bestTime || bestTime === null) {
        setBestTime(result);
      }
    }
    if (currentTime == null) {
      setCurrentTime(0);
    }
  };

  const changeColor = () => {
    if (isRun) {
      setBtnText("Stop");
      setColorClass("red");

      randomTimer();
    } else {
      setBtnText("Start");
      setColorClass("blue");
      end = Date.now();
      result = end - start;
      resultCheck();
    }
  };

  useEffect(changeColor, [isRun]);

  return (
    <div className="main-frame">
      <h1>Reaction Challenge ⏳</h1>
      <p>Click the button as soon as the box turns green!</p>

      <div id="color-box" className={colorClass}></div>

      <Button handleChange={handleChange} text={btnText === "Iniciar" ? "Start" : btnText === "Stop" ? "Stop" : btnText} />

      <p>
        ⏱️ Your reaction time: <span>{currentTime}</span> ms
      </p>
      <p>
        🥇 Best time: <span>{bestTime}</span> ms
      </p>
    </div>
  );
};

export default Tester;
