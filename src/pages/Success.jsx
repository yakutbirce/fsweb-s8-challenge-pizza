import React from 'react';
import "../styles/Success.css";

const Success = () => {
  return (
    <div className="success-container">
      <h1 className="success-title">Teknolojik Yemekler</h1>
      {/* Sipariş onayı mesajı */}
      <div className="success-message">
        <h2>Tebrikler!</h2>
        <h3>SİPARİŞİNİZ ALINDI!</h3>
      </div>
    </div>
  );
};

export default Success;
