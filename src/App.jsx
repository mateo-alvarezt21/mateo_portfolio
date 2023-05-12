import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Proyects from './components/Proyects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Proyects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
