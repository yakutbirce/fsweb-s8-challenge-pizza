import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Order from "./pages/Order";
import Success from "./pages/Success";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import "./styles/Transitions.css"; 

const AnimatedRoutes = () => {
  const location = useLocation(); 
  
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
        <Routes location={location}>
          {/* Anasayfa */}
          <Route path="/" element={<HomePage />} />

          {/* Sipariş Sayfası */}
          <Route
            path="/order"
            element={
              <>
                <Header />
                <Order />
              </>
            }
          />

          {/* Success Sayfası */}
          <Route path="/success" element={<Success />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
