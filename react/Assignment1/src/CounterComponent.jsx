import React, { useState } from "react";
import "./CounterComponent.css"

function Counter(){
    const [count, setCount] = useState(0);
    return(
        <>
        <div className="bhanu">
            <h2>Counter App</h2>
            <input className="input" id="init" type="number" placeholder="Enter initial count" /><br />
            <button onClick={() =>{
                let initialCount = parseInt(document.getElementById("init").value);
                console.log(typeof initialCount);
                setCount(initialCount);
                document.getElementById("init").value="";
            }}>SUBMIT</button>
            <p>Count: {count}</p>
            <div>
            <button className="btn" onClick={() => (setCount(count + 1))}>+</button>
            <button className="btn" onClick={() => (count>0?setCount(count - 1):count)}>-</button>
            </div>
        </div>
        
        </>
    )
}

export default Counter;