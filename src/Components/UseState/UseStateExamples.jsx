import React from 'react'
import Counter from './Counter'
import ColorSwitcher from './ColorSwitcher'
import InputCharCounter from './InputcharCounter'
import TodoCrud from './TodoCrud'

const UseStateExamples = () => {
  return (
    <div>
      <ul className="examples">
        <li>
          <Counter desc="A basic Counter application that is incremented and decremented on a button click." />
        </li>
        <li>
          <ColorSwitcher desc="Clicking a button changes the background and text color of the container. Clicking the same colored btn twice will set the background and text to default values." />
        </li>
        <li>
          <InputCharCounter desc="Displays the characters typed (live). Inform you in advance to 10 characters when the limit reached." />
        </li>
        <li>
          <TodoCrud desc="A Basic Todo App that performs CRUD operations mainly using useState." />
        </li>
      </ul>
    </div>
  )
}

export default UseStateExamples