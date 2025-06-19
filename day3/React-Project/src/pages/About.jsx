import React from 'react'

const About = ({details}) => {
  return (
    <div>
        <h1>
            Name: {details.name}<br></br>
            Dept: {details.dept}<br></br>
            Roll No : {details.rollno}<br></br>
            Age: {details.age}<br></br>
        </h1>
    </div>
  )
}

export default About