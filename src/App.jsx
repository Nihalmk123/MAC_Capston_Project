import { useState } from 'react'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Component/Registration/Signup';
import Signin from './Component/Registration/Signin';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin/>} />
      </Routes>

    </>
  )
}

export default App
