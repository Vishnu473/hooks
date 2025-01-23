import React, { useEffect, useState } from "react";

const WindowSizeTracker = ({ desc }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    timeStamp: Date.now(),
  });

  const [resizeList, setResizeList] = useState([]);
  const [isEnable, setIsEnable] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const currentWindowSize = {
        ...windowSize,
        width: window.innerWidth,
        height: window.innerHeight,
        timeStamp: Date.now(),
      };

      setWindowSize((prev) => currentWindowSize);
      setResizeList((prevList) => {
        const updatedList = [currentWindowSize, ...prevList];
        return updatedList.slice(0, 5);
      });
    };
    if (isEnable) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isEnable]);

  const isMobileSize = windowSize.width < 768;

  const removeHistory = () => {
    setResizeList([]);
  };

  const handleToggle = () => {
    setIsEnable(!isEnable);
  };

  return (
    <>
      <div className="vt-flex-container">
        <h1>WindowSizeTracker</h1>
        <p>{desc}</p>
        <div className="vt-flex-container">
          <div className="hz-flex-container">
            <p>You can enable/disable this feature:</p>
            <button className="btn" onClick={handleToggle}>
              {isEnable ? "Disable" : "Enable"}
            </button>
          </div>
          {!isEnable ? (
            <p>Kindly enable to experience the project :)</p>
          ) : (
            <div>
              <div className="vt-flex-container center">
                <h3 style={{ color: isMobileSize ? "orangered" : "black" }}>
                  {isMobileSize
                    ? "WindowSize below this is for Mobile Devices"
                    : "Current Window size is:"}
                </h3>
                <p>
                  width: {windowSize.width}px and height: {windowSize.height}px
                </p>
              </div>
              <div className="vt-flex-container center">
                {resizeList.length === 0 ? (
                  <p style={{color:'orangered'}}>Currently, No data to show. Resize the window to check.</p>
                ) : (
                  <div className="hz-flex-container">
                    <h3>Recent 5 resizes</h3>
                    <button className="btn" onClick={removeHistory}>
                      Delete
                    </button>
                  </div>
                )}
                {resizeList.map((resizeObj) => {
                  return (
                    <div key={resizeObj.timeStamp}>
                      <p>
                      {new Date(resizeObj.timeStamp).toLocaleString()} - width -{" "}
                      {resizeObj.width}px and height - {resizeObj.height} px
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
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

export default WindowSizeTracker;
