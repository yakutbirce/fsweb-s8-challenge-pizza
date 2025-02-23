import React from 'react' 
import Order from './pages/Order'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
   <Router>
    <Header />
    <Routes>
      <Route path='/order' element={<Order />}></Route>
    </Routes>
   </Router>
  )
}

export default App
