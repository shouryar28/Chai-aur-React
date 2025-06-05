import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  function addValue(){

    // Ye batches mein jaayega 

    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);

    // ye individually jayegaa

    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={addValue}> Add Value </button>
    </>
  )
}

export default App
