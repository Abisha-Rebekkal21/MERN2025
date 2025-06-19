import React from 'react'

const Child = ({name, phonenumber, dept}) => {
  return (
    <div>
        <h1>Name : {name}</h1>
        <h1>PhoneNumber : {phonenumber}</h1>
        <h1>Department : {dept}</h1>
        </div>
  )
}

export default Child