import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css"; 

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Teknolojik Yemekler</h1>

      <div className="home-banner">
        <p className="home-subtitle">KOD ACIKTIRIR <br /> PIZZA, DOYURUR</p>
      </div>

     
      <Link to="/order" className="order-button">ACIKTIM</Link>
      
    </div>
  );
};

export default HomePage;
