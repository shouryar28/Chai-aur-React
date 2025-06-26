import { useState } from "react";

function App(){
  
   let[count, setCount] = useState(0)

   function addValue(){
    count++;
    
    if(count > 20){
      count = 20;
    }
      setCount(count); // setcount ek function hai note that don't assign it like variable
   }

   function decreaseValue() {
    count--;

    if(count < 0){
      count = 0;
    }
    setCount(count);
   }

   return <>
     <h1>The value of count is : {count}</h1>
     <button onClick={addValue}> Increase Count +1 </button>
     <br />
     <br />
     <button onClick={decreaseValue}> Decrease Count -1</button>
   </>
}
export default App;