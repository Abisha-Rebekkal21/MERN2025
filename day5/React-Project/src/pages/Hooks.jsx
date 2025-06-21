import React from 'react'
import {Link} from 'react-router-dom'
import './Hooks.css'
const Hooks = () => {
  return (
    <div className='Hook'>
        <Link to='/state' className='link'>useState</Link>
        <Link to='/effect' className='link'>useEffect</Link>
        <Link to='/effect2' className='link'>useEffect2</Link>
        <Link to='/ref' className='link'>ref</Link>
        <Link to='/reducer' className='link'>Reducer</Link>
    </div>
  )
}

export default Hooks