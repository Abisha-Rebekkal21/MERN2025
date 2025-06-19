import React, { useState } from 'react'

const Counter = () => {
    const [Count,setCount]=useState(0)
  return (
    <div>
        <h2>Number: {Count}</h2>
        <button onClick={()=>setCount(Count+1)}>Increment</button>
        <button onClick={()=>setCount(Count-1)}>Decrement</button>
    </div>
  )
}

export default Counter