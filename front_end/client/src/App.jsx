import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Signup from './Signup';
import Login from './Login';
import Form from './Form';
import Schemes from './Schemes';
import Home from './Home';
import About from './About';
import Help from './Help';
import Contact from './Contact';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/form' element={<Form />}></Route>
        <Route path='/schemes' element={<Schemes />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/help' element={<Help />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
