import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Hero from "./components/hero/hero"
import Special from './components/speciality';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Special/>
    </div>
  );
}

export default App;
