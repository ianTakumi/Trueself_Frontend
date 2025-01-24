import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Login from './auth/Login';
import Register from './auth/Register';
import Home from './page/Home';

const App = () => {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
