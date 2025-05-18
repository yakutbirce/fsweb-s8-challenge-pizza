import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Order from "./pages/Order";
import Success from "./pages/Success";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<Order />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
