//import Button from "./Button";
import Option from "./Option"
import Text from "./Text";
import React, { useState, useEffect } from "react";

export default function Test() {
    const [message, setMessage] = useState([]);
    const [resNames, setResNames] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            await fetch("http://localhost:3002/getAllRes")
            .then((response) => response.json())
            .then((data) => setResNames(data.message));
        }
        
        fetchData();
        
        
    },[]);

    
    const handleClick = async (param1) => {
        await fetch("http://localhost:3002/getName?name="+param1)
        .then((response) => response.json())
        .then((data) => setMessage(data.message));
      }
    
return(
    <div className="Test">
        <select onChange={()=>handleClick(document.getElementById('select1').value)} id="select1">
        {resNames.map((name) =>
            <Option value={name}></Option>
            //<Button value={name} setName={setMessage} > </Button>
        )}
        </select>

        <Text message={message}></Text>
    </div>

);
}