import React, { useState } from "react";
import "../styles/Order.css";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState(""); 
  const [selectedDough, setSelectedDough] = useState("Hamur Kalınlığı"); 
  const [selectedExtras, setSelectedExtras] = useState([]); 
  const [orderNote, setOrderNote] = useState(""); 
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const basePrice = 85.5;
  const extraPrice = 5;
  const totalPrice = basePrice + selectedExtras.length * extraPrice;

  const extras = [
    "Pepperoni", "Sosis", "Kanada Jambonu", "Domates", "Soğan",
    "Tavuk Izgara", "Mısır", "Sucuk", "Jalapeno", "Biber",
    "Ananas", "Sarımsak", "Kabak"
  ];

  const handleExtraChange = (event) => {
    const { value, checked } = event.target;
    setSelectedExtras((prevExtras) => {
      if (checked) return prevExtras.length < 10 ? [...prevExtras, value] : prevExtras;
      return prevExtras.filter((item) => item !== value);
    });
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleDoughChange = (event) => {
    setSelectedDough(event.target.value);
  };

  const handleOrderNoteChange = (event) => {
    setOrderNote(event.target.value);
  };


  const isFormValid = () => {
    return (
      selectedSize !== "" &&
      selectedDough !== "Hamur Kalınlığı" &&
      selectedExtras.length >= 4 &&
      selectedExtras.length <= 10
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      setErrorMessage("Lütfen tüm alanları eksiksiz doldurun.");
      return;
    }

    navigate("/success");
  };

  return (
    <div className="order-wrapper">
      <div className="order-container">
        <h2 className="pizza-title">Position Absolute Acı Pizza</h2>
        <div className="pizza-info">
          <span className="pizza-price">85.50₺</span>
          <span className="pizza-rating">4.9</span>
          <span className="pizza-people">(200)</span>
        </div>

        <p className="pizza-description">
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre.
        </p>

        <div className="pizza-options">
          <div className="size-selection">
            <h4>Boyut Seç</h4>
            {["Küçük", "Orta", "Büyük"].map((size) => (
              <label key={size}>
                <input
                  type="radio"
                  name="size"
                  value={size}
                  onChange={handleSizeChange}
                /> {size}
              </label>
            ))}
          </div>
          <div className="dough-selection">
            <h4>Hamur Seç </h4>
            <select value={selectedDough} onChange={handleDoughChange}>
              <option disabled>Hamur Kalınlığı</option>
              <option>İnce</option>
              <option>Normal</option>
              <option>Kalın</option>
            </select>
          </div>
        </div>

        <div className="extra-ingredients">
          <h4>Ek Malzemeler</h4>
          <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div className="ingredients-list">
            {extras.map((extra, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={extra}
                  checked={selectedExtras.includes(extra)}
                  onChange={handleExtraChange}
                /> {extra}
              </label>
            ))}
          </div>
        </div>

        <div className="order-note">
          <h4>Sipariş Notu</h4>
          <textarea
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={orderNote}
            onChange={handleOrderNoteChange}
          />
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="order-summary">
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>

          <div className="order-total">
            <h4 className="summary-title">Sipariş Toplamı</h4>
            <p className="summary-item">
              Seçimler <span>{selectedExtras.length * extraPrice}₺</span>
            </p>
            <p className="summary-total">
              Toplam <span>{(totalPrice * quantity).toFixed(2)}₺</span>
            </p>
            <button 
              className="order-button" 
              onClick={handleSubmit} 
              disabled={!isFormValid()} 
            >
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
