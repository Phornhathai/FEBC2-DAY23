import './App.css'
import { BrowserRouter, HashRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import MUITest from './pages/MUITest'
import Form from './pages/Form'

function App() {

  return (
    <div>
      <h1>Hello Vite + React</h1>
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/mui" element={<MUITest/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes> */}

      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mui" element={<MUITest/>}/>
      <Route path="/form" element={<Form/>}/>
      </Routes>
      
      
    </div>
  )
}

export default App
