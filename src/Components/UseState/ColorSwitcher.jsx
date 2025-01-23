import React, { useState } from "react";

const ColorSwitcher = ({ desc }) => {
  const [background, setBackground] = useState("white");
  const [textColor, setText] = useState("black");

  const colors = [
    { bg: "#A8E6CF", text: "#333333" },
    { bg: "#FFBC99", text: "#1D3557" },
    { bg: "#B3A7D3", text: "#2F3A48" },
    { bg: "#006D6F", text: "#FFF" },
    { bg: "#FF7043", text: "#1D3557" },
  ];

  const changeColors = ({ bg, text }) => {
    bg === background ? setBackground("#fff") : setBackground(bg);
    text === textColor ? setText("#000") : setText(text);
  };

  return (
    <div
      className="vt-flex-container"
      style={{ backgroundColor: background, color: textColor }}
    >
      <h1>ColorSwitcher</h1>
      <p>{desc}</p>
      <div className="hz-flex-container">
        {colors.map((color, index) => {
          return (
            <button
              className="btn"
              style={{ backgroundColor: color.bg, color: color.text }}
              key={index}
              onClick={() => changeColors(color)}
            >
              {color.bg}
            </button>
          );
        })}
      </div>
      <div>
        <p>Topics used:</p>
        <div className="hz-flex-container">
          <p className="topic-covered">useState</p>
        </div>
      </div>
    </div>
  );
};

export default ColorSwitcher;
