import React, {useState} from 'react'
import './Signup.css'

const Signup = () => {
  const [formData,setFormData] = useState({
    name:'',
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
        name:"",
       email:"",
       password:""
    })
  }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <h1>Login Form</h1>
            <label>Enter Your Name:</label>
            <input type="text" value={formData.name} onChange={handlechange} name="name"></input><br></br>
            <br></br>
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

export default Signup