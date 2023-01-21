import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [message, setMessage] = useState([]);

  useEffect(() => {
    //  fetch("http://localhost:3002/getName?name=Riviera Caterer")
    // .then((response) => response.json())
    // .then((data) => setMessage(data.message));
  }, []);

  const handleClick = async (param1) => {
    await fetch("http://localhost:3002/getName?name="+param1)
    .then((response) => response.json())
    .then((data) => setMessage(data.message));
  }

  return (
    <div className="App">
      <button onClick={()=>handleClick("Riviera Caterer")}> Riviera Caterer</button>
      <button onClick={()=>handleClick("Wilken'S Fine Food")}> Wilken'S Fine Food </button>
      <button onClick={()=>handleClick("Kosher Island")}> Kosher Island </button>
      <h1> {message.name} </h1>
      <h1> {message.cuisine} </h1>
      <h1> {message.borough} </h1>
    </div>
  );
}

export default App;
