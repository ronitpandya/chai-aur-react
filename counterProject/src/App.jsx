import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(9)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
        <h1>Chai aur React</h1>
        <h2>Counter Value: {counter}</h2>

        <button
        onClick={addValue}
        >Add value</button>
        <br />
        <button
        onClick={removeValue}
        >Remove value</button>
    </>
  )
}

export default App
