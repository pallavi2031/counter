import React, { useState } from "react";
const CounterFunction=()=>{
    const [inc,setInc]=useState(0);
        const increment=()=>{
        setInc(inc+1);
     }
     
    const decrement=()=>{
       // if(inc){
        setInc(inc-1);
       // }

    }
    return(
        <>
        <div>
        <h1>My first counter from scrach</h1>
        <h2>Counter: {inc}</h2>
         </div>
        <button  type="button"  onClick={increment}>click increment</button>
        <button type="button" onClick={decrement}>click increment</button>
        </>
         );
}
export default CounterFunction;