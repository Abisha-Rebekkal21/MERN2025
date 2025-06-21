import React, {useState} from 'react'
import '../pages/Skills.css'
const State = () => {
    const [Count,setCount]=useState(0)
    //Functions Using UseState
    const Increment = () =>{
        setCount(Count+1)
    }
    const Decrement = () =>{
        setCount(Count-1)
    }
    const Reset = () =>{
        setCount(0)
    }
  return (
    <div className='Count'>
        <h2>Number: {Count}</h2>
        <button onClick={Reset}>Reset</button>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default State