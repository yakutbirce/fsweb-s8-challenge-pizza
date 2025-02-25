import React from 'react';
import Order from './pages/Order';
import Success from './pages/Success';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Anasayfa */}
        <Route path='/' element={<HomePage />} />

        {/* Sipariş Sayfası */}
        <Route 
          path='/order' 
          element={
            <>
              <Header />
              <Order />
            </>
          } 
        />

        {/* Success Sayfası */}
        <Route path='/success' element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
