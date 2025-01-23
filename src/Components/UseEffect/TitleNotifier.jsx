import React, { useEffect, useState } from "react";

const TitleNotifier = ({ desc }) => {
    const [inputText, setInput] = useState('Hooks Practice');
    const [isEnable, setIsEnable] = useState(false);

    const ChangeTitle = (e) => {
        if(isEnable){
            setInput(e.target.value);
        }
    }

    const toggleBtn = () => {
        setIsEnable(!isEnable);
    }

    useEffect(() => {
        if(isEnable){//Update title only on enable feature
            document.title = inputText === 'Hooks Practice' ? 'Welcome!' : 'Hello! '+inputText;
        }

        return (() => {
            
            document.title = 'Hooks Practice';
        });
    }, [inputText, isEnable])
    

  return (
    <div className="vt-flex-container">
      <h1>TitleNotifier</h1>
      <p>{desc}</p>
      <div className="hz-flex-container">
      <p>You can enable/disable this feature:</p>
        <div><button className="btn" onClick={toggleBtn}>{isEnable ? 'Disable' : 'Enable'}</button></div>
      </div>
      <div className=" hz-flex-container">
        <input
          type="text"
          placeholder="type your name and see title"
          className="input-block"
          onChange={ChangeTitle}
        />
      </div>
      <div>
        <p>Topics used:</p>
        <div className="hz-flex-container">
          <p className="topic-covered">useState</p>
          <p className="topic-covered">useEffect</p>
        </div>
      </div>
    </div>
  );
};

export default TitleNotifier;
