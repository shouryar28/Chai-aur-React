import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";


function App() {

  return (
    <>
      <h1 className="flex bg-green-500 p-4 rounded-xl text-black ">
        Tailwind props
      </h1>
      <Card userName = "Shourya Raj" rollNo = {46} dept = "CSE-AIML" btn = "Show Details"/>
      <Card userName = "Rahul Kumar" rollNo = {47} dept = "CSE-CS" />
      <Card userName = "Aman Kumar" rollNo = {6}/>
    </>
  );
}

export default App;
