import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 5;  // ye js mein karte the , react se ye possible nhi hai kyuki react humko UI updation ka access nhi deta, wo khud ke paas sara control rakhta hai isiliye hum hooks kaa use karte hai

  useState(); // iske andar kuch bhi values hum pass kar sakte hai for eg. string , integer, char anything

  // useState return karta hai ek array jismein variable ka naam hota hai aur hota hai ek function jo ki uss variable ke andar kya nya jaane wala hoga wo store karta hai

  let [counter, setCounter] = useState(10);

  function addValue() {
    counter++;

    if(counter > 20){
      counter = 20;
    }
    setCounter(counter); // ye UI update kardega aaram se , hume document.fala dhimkana likhne ka koin jarurat nhi hai
    // console.log(counter);
  }

  function decreaseValue() {
    counter--;

    if (counter < 0) {
      counter = 0;
    }

    setCounter(counter);
    // console.log(counter);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h3>Counter value is : {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  );
}

export default App;
