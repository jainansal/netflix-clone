import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Watch from "./pages/watch/Watch"
import Register from "./pages/register/Register"
import './app.scss'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Register />}/>
      <Route path='/watch' element={<Watch />}/>
    </Routes>
  )
}

export default App