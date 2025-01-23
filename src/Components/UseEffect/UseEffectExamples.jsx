import React from 'react'
import AutomaticCounter from './AutomaticCounter';
import TitleNotifier from './TitleNotifier';
import WindowSizeTracker from './WindowSizeTracker';

const UseEffectExamples = () => {
  return (
    <div>
      <ul className="examples">
        <li>
          <AutomaticCounter desc="Create a counter that automatically increments every second and a start/stop button to control the counter" />
        </li>
        <li>
          <TitleNotifier desc="A React component that dynamically updates the browser tab's title based on user input, featuring a toggle switch to enable/disable the live title updates" />
        </li>
        <li><WindowSizeTracker desc="A React component that tracks the current window size, stores the last 5 resize events with timestamps, and allows for clearing history, showing mobile warnings, and pausing/resuming tracking."/></li>
      </ul>
    </div>

  )
}

export default UseEffectExamples