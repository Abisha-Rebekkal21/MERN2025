import React, {useEffect, useState} from 'react'
import '../pages/Skills.css'
const Effect2 = () => {
    const [Count,setCount]=useState(0)
    useEffect(()=>{
         setTimeout(()=>{
             setCount(Count+1)
         },0.1)
     },[Count])

    
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

export default Effect2