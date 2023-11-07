import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/NotFound'

function App() {

  return (
    <div>
      <h1>Hello Vite + React</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
