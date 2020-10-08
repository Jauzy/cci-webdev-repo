import React from 'react';
import './App.css';

import Login from './Containers/Login'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div style={{overflowX:'hidden'}}>
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
