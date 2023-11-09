import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MUITest from './pages/MUITest'
import Form from './pages/Form'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import NotFound from './pages/NotFound'

function App() {

  return (
    <div>
      <ResponsiveAppBar />
      <h1>Hello Vite + React</h1>
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/mui" element={<MUITest/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mui" element={<MUITest />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
