import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Success.css";

const Success = () => {

  const[visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 300);
  }, []);

  return (
    <div className={`success-container ${visible ? "fade-in" : "fade-out"}`}>
      <Link to="/" className='success-title'> 
      Teknolojik Yemekler
      </Link>
      {/* Sipariş onayı mesajı */}
      <div className="success-message">
        <h2>Tebrikler!</h2>
        <h3>SİPARİŞİNİZ ALINDI!</h3>
      </div>
    </div>
  );
};

export default Success;
