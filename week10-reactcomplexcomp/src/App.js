import React from 'react';
import './App.css';

import Login from './Containers/Login'
import Navbar from './Components/Navbar'
import Register from './Containers/Register'

function App() {

  return (
    <div style={{overflowX:'hidden'}}>
      <Navbar />
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
