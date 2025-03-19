import React from "react";
import { useState } from "react";

export default function App6() {
    const [item,setItem]=useState();
    const [hobby,setHobby]=useState([]);
    const add = () => {
        setHobby([...hobby,item]);
    }
    return(
        <div>
            <input type="text" placeholder="Enter your hobby" onChange={(event)=>setItem(event.target.value)}></input>
            <button onClick={add}>ADD</button>
            <hr/>
            {hobby && hobby.map((value, index) => <li key={index}>{value}</li>)}
        </div>
    );
}