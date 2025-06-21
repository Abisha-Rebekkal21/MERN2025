import React, { useReducer } from 'react'
import '../pages/Skills.css'
const initialvalue= {count:0}//Initial value -> object
const ReducerFunction = (state, action) =>{
    switch(action.type){
        case "Increment":
            return { count: state.count + 1 };
        case "Decrement":
            return { count: state.count - 1 };
        case "Reset":
            return { count: 0 };
        default:
            return state;
    }
}
const Reducer = () => {
    const  [state, dispatch] = useReducer(ReducerFunction,initialvalue);
  return (
    <div className='Count'>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({type:"Increment"})}>+</button>
        <button onClick={() => dispatch({type:"Reset"})}>Reset</button>
        <button onClick={() => dispatch({type:"Decrement"})}>-</button>
    </div>
  )
}

export default Reducer