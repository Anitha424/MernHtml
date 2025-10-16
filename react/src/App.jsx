 import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import User from './components/User.jsx'
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"
import Services from "./Pages/Services.jsx"
import State from "./Hooks/State.jsx"
const App = () => {
  return (
      <>
    {/* <User name ="Sowndarya" department="ECE" skills={['HTML','CSS','JAVASCRIPT','JAVA']}/> */}
    <Routes>
      <Route path= "/" Component={Home}/>;
      <Route path ="/about" Component={About}/>;
      <Route path="/contact" Component={Contact}/>; 
      <Route path ="/services" Component={Services}/>;  
      <Route path ="/state" Component={State}/>;  
            
    </Routes>
      </>
  )
}

export default App