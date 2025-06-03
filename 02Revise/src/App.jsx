import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  let increaseValue = () => {  // arrow function ke pehle datatype likhna jaruri hota hai 
    
    counter++;
    
    if (counter >= 20){
      counter = 20;
      
    }
    setCounter(counter);
  };

  let decreaseValue = () => {
    counter--;

    if(counter < 0){
      counter = 0
    }
    setCounter(counter);
  };

  return (
    <>
      <h1>Chai 🍵 aur React ⚛️ </h1>
      <h2>Count = {counter}</h2>
      <button onClick={increaseValue}>+ 1</button>
      <br />
      <br />
      <button onClick={decreaseValue}>- 1</button>
    </>
  );
}

export default App;
