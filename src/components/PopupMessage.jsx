import React from "react";
import "../styles/PopupMessage.css"; 

const PopupMessage = ({ message, onClose }) => {
  return (
    <div className={`popup-container ${message ? "show" : ""}`}>
      <div className="popup-message">
        {message}
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default PopupMessage;
