import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './Pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Pages/Contact';
import About from './Pages/about';
import Store from './Pages/store';
import Category from './Pages/category';
import Item from './Pages/item';

function App() {
  return (
    <BrowserRouter>
     <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/store" element={<Store/>}/>
        <Route path ="/category" element={<Category/>}/>
        <Route path ="/item" element={<Item/>}/>
      </Routes>
     </Layout>
     </BrowserRouter>
  );
}

export default App;
