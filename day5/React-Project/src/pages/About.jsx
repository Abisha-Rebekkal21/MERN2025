import React from 'react'
import react from '../assets/react.svg'
const About = ({items}) => {
  return (
    <div>
      
      <h3>List of fruit: </h3>
        <ul>
            {items.map((fruits) => (<li>{fruits}</li>))}
        </ul>
        <center>
        <img src={react} alt="react" height={'100px'} width={'100px'}></img>
        </center>
    </div>
  )
}

export default About