// src/App.js
import React from 'react';
import Counter from '../src/Counter';

import './App.css'; // Ensure to import the CSS file

const App = () => {
  return (
    <div className="container">
      <h1>Counter Application</h1>
      <Counter />
    </div>
  );
};

export default App;