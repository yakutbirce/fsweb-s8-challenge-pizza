import React from 'react';
import Order from './pages/Order';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Success from './pages/Success';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      {/* Header'ı sadece HomePage harici sayfalarda göster */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route 
          path='/order' 
          element={
            <>
              <Header />
              <Order />
            </>
          } 
        />
        <Route 
          path='/success' 
          element={
            <>
              <Header />
              <Success />
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
