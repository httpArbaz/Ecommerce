import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './Pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Pages/Contact';
import About from './Pages/about';

function App() {
  return (
    <BrowserRouter>
     <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/about" element={<About/>}/>
      </Routes>
     </Layout>
     </BrowserRouter>
  );
}

export default App;
