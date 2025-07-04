// Data kaise send hota hai yha wo dekh lenge
import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext); 
  // setUser itself is not an object, but a function that updates the user object held in context (via useState in UserContextProvider).
  
  const handleSubmit = (e) => {
    e.preventDefault();  // ye help karta hai value ko khi bhi random jagah jaane se
    setUser({username, password})
  };
  return (
    <div className="text-center text-white p-6 my-3"> 
      <h2 className="text-3xl" >Login</h2>
      <input 
        className="mt-4 p-2 text-black"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <br />
      <br />
      
      <input
       className=" p-2 text-black"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <br />
      <br />
      <button onClick={handleSubmit} className="text-white border p-4 bg-slate-500 "
      >Submit</button>
    </div>
  );
};

export default Login;
