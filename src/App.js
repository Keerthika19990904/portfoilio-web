import React from 'react';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Skills from './Component/Skills/Skills';
import Services from './Component/Services/Services';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import { Routes,Route } from 'react-router-dom';

function App1() {
  return (
    <>
   <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/skills ' element={<Skills/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>

  </Routes>
  <Footer/>
  </>
  )
}

export default App1