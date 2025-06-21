import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Hooks from './pages/Hooks'
import State from './Hooks/State'
import Effect from './Hooks/Effect'
import Effect2 from './Hooks/Effect2'
import Signup from './pages/Signup'
import Ref from './Hooks/Ref'
import Reducer from './Hooks/Reducer'
function App() {
  var fruits = ["Apple", "Orange", "Mango", "Pineapple"];
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home items={fruits}/>}/>
        <Route path='/about' element={<About items={fruits}/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/hooks' element={<Hooks/>}/>
        <Route path='/state' element={<State/>}/>
        <Route path='/effect' element={<Effect/>}/>
        <Route path='/effect2' element={<Effect2/>}/>
        <Route path='/ref' element={<Ref/>}/>
        <Route path='/reducer' element={<Reducer/>}/>
      </Routes>
    </>
  )
}

export default App
