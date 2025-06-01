import React, { useState } from "react";
import './Counter.css';
const Counter = () => {

   let [count , setCount] = useState(23)
//    const[reset , setReset] = useState(0)

    return (
        <>
        <div className="counter-main">
        <div className="counter-container">
        <h1>COUNTER </h1>
        <h2>number of times clicked <p className="count">{count}</p></h2>
        </div>
        <div className="btn-container">
            {/*  in random +10 will inc the lower by 10 means 5+10=15 but upper will also 50+10=60 so reduce upper by 41 so 40+10=50 max   */}
        <button className="btn" onClick={()=> {setCount(count=Math.floor( Math.random()*41)+10 )}}>Random (from :10 - 50)</button>  
        <button className="btn" onClick={() => {setCount(0)}}>Reset</button>
        <button className="btn" onClick={ () => {setCount(count+1)}}>Increase</button>
        <button className="btn" onClick = { () => {setCount(count-1)}}>Decrease</button>
        </div>
        </div>
        </>
    ) 
}
export default Counter



