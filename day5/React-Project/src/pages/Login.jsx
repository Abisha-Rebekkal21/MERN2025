import React, {useState} from 'react'
import './Login.css'

const Login = () => {
  const [formData,setFormData] = useState({
    email:'',
    password:''
  })
  const handlechange =(e) =>{
    setFormData((prev) =>({...prev,[e.target.name]:e.target.value}))
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
    setFormData({
       email:"",
       password:""
    })
  }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <h1>Login Form</h1>
            <label>Enter Your Email:</label>
            <input type="email" value={formData.email} onChange={handlechange} name="email"></input><br></br>
            <br></br>
            <label>Enter Password : </label>
            <input type="password" value={formData.password} onChange={handlechange} name="password"></input><br></br>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Login