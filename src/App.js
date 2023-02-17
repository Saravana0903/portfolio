import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"
import './App.css'

function App() {
  return (
    <Router>
       <Header />
      <Routes>
        <Route exact path = "/" element={<Home/>} />
        <Route exact path = "/about" element={<About/>} />
        <Route exact path = "/Projects" element={<Project/>} /> 
        <Route exact path = "/Contact" element={<Contact/>} />
      </Routes>
    </Router>
  )
}

export default App


