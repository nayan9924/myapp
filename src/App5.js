import React from "react";
import { useState } from "react";
import "./App5.css"

export default function App5() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    
    return (
        <div className="container">
            <div>
                <h1>{count}</h1>
                <button onClick={increment}>Click</button>
            </div>
        </div>
    );
}