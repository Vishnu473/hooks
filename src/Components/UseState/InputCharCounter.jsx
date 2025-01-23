import React, { useEffect, useState } from "react";

const InputCharCounter = ({ desc }) => {
  const [charCount, setCharCount] = useState(0);
  const [textColor, setTextColor] = useState("green");

  const detectchar = (e) => {
    setCharCount(e.target.value.length);
  };

  useEffect(() => {
    if (charCount > 20) {
      setTextColor("red");
    } else {
      setTextColor("green");
    }
  }, [charCount]);

  return (
    <>
      <div className="vt-flex-container">
        <h1>InputCharCounter</h1>
        <p>{desc}</p>
        <div className="vt-flex-container ">
          <p>Characters Counted: {charCount}</p>
          <input
            type="text"
            className="input-block"
            placeholder="Enter text"
            onChange={detectchar}
            maxLength="30"
          />
          {charCount > 20 && charCount < 30 ? (
            <p style={{ color: textColor }}>
              only {30 - charCount} characters left!
            </p>
          ) : (
            ""
          )}
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

export default InputCharCounter;
