import React, { useState, useEffect } from "react";

const AutomaticCounter = ({ desc }) => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [btnText, setBtnText] = useState('Start');

  useEffect(() => {
    let timeInterval;

    if (isRunning) {
      timeInterval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if(timeInterval){
        clearInterval(timeInterval);
      }
    };
  }, [isRunning]);

  const HandleStartPause = () => {
    setIsRunning(!isRunning);

    //setBtnText(!isRunning ? 'Pause' : 'Resume');

    if(isRunning){
        if(btnText === 'Pause'){
            setBtnText('Resume')
        }
    }
    else{
        setBtnText('Pause')
    }
  };

  const HandleReset = () => {
    setIsRunning(false);
    setCount(0);
    setBtnText('Start');
  };

  return (
    <>
      <div className="vt-flex-container">
        <h1>AutomaticCounter</h1>
        <p>{desc}</p>
        <div>
          <div className="hz-flex-container ">
            <button className="btn" onClick={HandleStartPause}>{btnText}</button>
            <p className="value">{count}</p>
            <button className="btn" onClick={HandleReset}>Reset</button>
          </div>
        </div>
        <div>
        <p>Topics used:</p>
        <div className="hz-flex-container">
          <p className="topic-covered">useState</p>
          <p className="topic-covered">useEffect</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default AutomaticCounter;
