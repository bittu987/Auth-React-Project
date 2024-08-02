
import './App.css'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Home" element={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
