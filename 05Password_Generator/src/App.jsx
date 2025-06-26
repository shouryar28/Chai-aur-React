import { useState } from "react"

function App() {
 
  const [length, setLength] = useState(8)
  const[numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword] = useState("")
  return (
    <div>
      <h1 className="text-3xl font-bold text-white text-center mt-4">Password Generator</h1>
    </div>
  )
}

export default App
