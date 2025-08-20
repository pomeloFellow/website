import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About";
import Devlogs from './components/Devlogs';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/devlogs' element={<Devlogs/>}></Route>
      </Routes>
    </>
  )
}

export default App
