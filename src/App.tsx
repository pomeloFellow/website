import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home"
import About from "./components/pages/About";
import Devlogs from './components/pages/Devlogs';
import AutoSlateDevlog from './components/pages/devlogs/AutoSlateDevLog';
import Projects from "./components/pages/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        
        <Route path='/about' element={<About/>}></Route>

        <Route path='/devlogs' element={<Devlogs/>}></Route>
        <Route path='/devlogs/autoslate' element={<AutoSlateDevlog/>}></Route>

        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
    </>
  )
}

export default App
