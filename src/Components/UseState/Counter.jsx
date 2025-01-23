import React from 'react';
import { useState } from 'react';

const Counter = ({desc}) => {
    const [count, setCount] = useState(0)

    const Increment = () => {
      setCount((prev) => prev + 1)
    }
  
    return (
      <div className='vt-flex-container'>
        <h1>Counter</h1>
        <p>{desc}</p>
        <div className='hz-flex-container'> 
        <button className='btn' onClick={Increment}>
            Increment
          </button>
          <span className='value'>{count}</span>
          <button className='btn' onClick={() => setCount((prev) => prev-1)}>
            Decrement
          </button>
        </div>
        <div>
        <p>Topics used:</p>
        <div className="hz-flex-container">
          <p className="topic-covered">useState</p>
        </div>
      </div>
      </div>
    )
}

export default Counter