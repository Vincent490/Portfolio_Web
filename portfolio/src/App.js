import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Card from './Components/Card';
import Aboutme from './Components/Aboutme';
import Skills_Me from './Components/Skills_Me';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Aboutme></Aboutme>
      <Skills_Me></Skills_Me>
    </div>
  );
}

export default App;
