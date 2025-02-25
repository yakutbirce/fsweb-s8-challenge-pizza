import React, { useState, useEffect } from "react";
import "../styles/Order.css";
import { useNavigate } from "react-router-dom";

const Order = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/success");
  
  }


  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDough, setSelectedDough] = useState("Hamur Kalınlığı");
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [orderNote, setOrderNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false);

  const basePrice = 85.5;
  const extraPrice = 5;
  const totalPrice = basePrice + selectedExtras.length * extraPrice;

  const extras = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Domates",
    "Soğan",
    "Tavuk Izgara",
    "Mısır",
    "Sucuk",
    "Jalapeno",
    "Biber",
    "Ananas",
    "Sarımsak",
    "Kabak",
  ];

  const handleExtraChange = (event) => {
    const { value, checked } = event.target;
    setSelectedExtras((prevExtras) => {
      const newExtras = checked
        ? prevExtras.length < 10
          ? [...prevExtras, value]
          : prevExtras
        : prevExtras.filter((item) => item !== value);

      return newExtras;
    });
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => {
      const newQuantity = Math.max(1, prev + amount);
      return newQuantity;
    });
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

  const validateForm = () => {
    if (
      selectedSize &&
      selectedDough !== "Hamur Kalınlığı" &&
      selectedExtras.length >= 1 &&
      selectedExtras.length <= 10 &&
      orderNote.length >= 3
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  useEffect(() => {
    validateForm();
  }, [selectedSize, selectedDough, selectedExtras, orderNote]);

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
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir..
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
                />{" "}
                {size}
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
                />{" "}
                {extra}
              </label>
            ))}
          </div>
        </div>

        <div className="order-note">
          <h4>Sipariş Notu</h4>
          <input
            type="text"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={orderNote}
            onChange={handleOrderNoteChange}
          />
        </div>

        {/*Sipariş Kontrol Paneli */}
<div className="order-summary">
  {/*Adet Seçim Kutusu */}
  <div className="quantity-control">
    <button onClick={() => handleQuantityChange(-1)}>-</button>
    <span>{quantity}</span>
    <button onClick={() => handleQuantityChange(1)}>+</button>
  </div>

  {/*Sipariş Toplamı */}
  <div className="order-total">
    <h4 className="summary-title">Sipariş Toplamı</h4>
    <p className="summary-item">Seçimler <span>{selectedExtras.length * extraPrice}₺</span></p>
    <p className="summary-total">Toplam <span>{(totalPrice * quantity).toFixed(2)}₺</span></p>
    <button 
    className="order-button"
    onClick={handleSubmit}>
      SİPARİŞ VER
      </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default Order;
