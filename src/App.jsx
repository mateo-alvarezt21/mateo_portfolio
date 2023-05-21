import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Proyects from './components/Proyects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { useState } from 'react'

function App() {

  const [lightMode, setLightMode] = useState(false)

  function toggleLightMode() {
    setLightMode(!lightMode)
    console.log(lightMode)
  }


  return (
    <div className={`App ${lightMode ? 'light' : ''}`}>
      <Navbar lightMode={lightMode}/>
      <Home lightMode={lightMode} toggleLightMode={toggleLightMode}/>
      <Proyects lightMode={lightMode}/>
      <Skills lightMode={lightMode}/>
      <Contact lightMode={lightMode}/>
    </div>
  )
}

export default App
