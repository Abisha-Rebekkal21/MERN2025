import React, {useState} from 'react'
import './Skills.css'
const Skills = () => {
  const [Count,setCount]=useState(0)
  return (
    <div className='Count'>
        <h2>Number: {Count}</h2>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(Count+1)}>Increment</button>
        <button onClick={()=>setCount(Count-1)}>Decrement</button>
    </div>
  )
}

export default Skills