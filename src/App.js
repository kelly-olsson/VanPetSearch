import React from 'react';
import './App.css';
import Navigation from "./Navigation"
import Main from "./Main"

function App() {
  return (
  <div className='app'>
    <h1>VanPetSearch</h1>
    <Navigation />
    <Main />
  </div>
  )
};

export default App;