import React from "react";

function Card({ userName, rollNo, dept = "Null" , btn = "Add friend"}) {
  
  // here we have received the value that had been entereds in App.jsx

  // console.log(props)
  return (
    <div className=" bg-lime-300  h-56 w-full mt-4 rounded-2xl text-black text-lg font-bold flex items-center justify-center">
      Name : {userName}  
      <br />
      Roll : {rollNo}
      <br />
      Dept : {dept}
  
      <button className="mt-32 w-auto text-white rounded-full ">{btn}</button>
    </div>
  );
}

export default Card;
