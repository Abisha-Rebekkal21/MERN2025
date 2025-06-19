import React from "react"
import Child from "./components/Child"
import Home from "./pages/Home"
import About from "./pages/About"
import Skill from "./pages/Skill"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Counter from "./components/Counter"
function App() {
  var fruits = ["Apple", "Orange", "Mango", "Pineapple"];
  var details = {name:"Abisha", dept:"IT", rollno:"23ITR001", age:18}
  return (
    <div>
      {/*
      <Child name="Abisha" phonenumber="8270929977" dept="IT"/>
      <Child name="Alish" phonenumber="9715882565" dept="MBBS"/>
      <Home items={fruits}/>
      <About details={details}/>
      <Skill/>
      <Contact/>
      */}
      <Login/>
      <Counter/>
    </div>
  )
}

export default App
