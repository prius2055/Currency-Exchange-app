import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CurrencyList from './components/CurrencyList';
import CurrencyDetail from './components/CurrencyDetail';
import './App.css';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<CurrencyList />} />
      <Route path="/currency-detail" element={<CurrencyDetail />} />
    </Routes>
  </div>
);

export default App;
