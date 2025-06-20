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
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/hooks' element={<Hooks/>}/>
        <Route path='/state' element={<State/>}/>
        <Route path='/effect' element={<Effect/>}/>
        <Route path='/effect2' element={<Effect2/>}/>
      </Routes>
    </>
  )
}

export default App
