import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div>
        <form>
            <h1>Login Form</h1>
            <label placeholder="Name">Enter Your Name:</label>
            <input type="text" id="name"></input><br></br>
            <br></br>
            <label placeholder="password">Enter Password : </label>
            <input type="password" id="password"></input><br></br>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Login