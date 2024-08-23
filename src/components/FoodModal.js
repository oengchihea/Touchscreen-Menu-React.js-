import React, { useState } from 'react';
import './FoodModal.css';
import chickenImg from '../assets/chicken.jpg';

const FoodModal = ({ isOpen, food, onClose, onSubmit }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-image">
          <img src={chickenImg} alt={food.name} className="main-image" />
        </div>
        <div className="modal-details">
          <h2>{food.name}</h2>
          <p className="modal-price">Price: {food.price}</p>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus justo a nisi cursus, eget fermentum nisi tempor.</p>
          <div className="modal-actions">
            <div className="quantity-control">
              <button className="quantity-button" onClick={handleIncrement}>+</button>
              <span>{quantity}</span>
              <button className="quantity-button" onClick={handleDecrement}>-</button>
            </div>
            <button className="add-button" onClick={onSubmit}>Confirm Order</button>
            <button className="close-button" onClick={onClose}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodModal;
