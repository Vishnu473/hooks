import { useState } from 'react'
import './App.css'
import UseStateExamples from './Components/UseState/UseStateExamples'
import UseEffectExamples from './Components/UseEffect/UseEffectExamples'

function App() {

  return (
    <>
      <div className="example-container">
      <h1>Hooks Practice with Mini Projects(Use Cases):</h1>
      <UseStateExamples />
      <UseEffectExamples />
    </div>
    </>
  )
}

export default App
