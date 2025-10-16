import React, { useState } from 'react';
import Home from '../Pages/Home'
const State = () => {
    const [count,setCount]=useState(0);
  return (
    <div>
        <h1>usestate example</h1>
        <h2>count:{count}</h2>
        <button onClick={()=>setCount(prev=>prev+1) }>Increase</button>
        <hr />
        

    </div>
  )
}

export default State