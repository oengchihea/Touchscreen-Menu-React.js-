import React from 'react';
import { Link, Element } from 'react-scroll';
import './Menu.css';
function Menu({ onAddFood }) {
  const renderFoodItems = (items) =>
    items.map((food) => (
      <div key={food.id} className="food-item">
        <img src={food.image} alt={food.name} className="food-image" />
        <div className="food-details">
          <h3>{food.name}</h3>
          <p>{food.price}</p>
        </div>
        <button className="add-button" onClick={() => onAddFood(food)}>
          Add
        </button>
      </div>
    ));

  return (
    <div className="menu-wrapper">
      <div className="menu-container">
        <div className="menu-items">
          <Link className="menu-item" to="best-seller-section" spy={true} smooth={true} duration={500}>
            Best Seller
          </Link>
          <Link className="menu-item" to="khmer-food-section" spy={true} smooth={true} duration={500}>
            Khmer Food
          </Link>
          <Link className="menu-item" to="indian-food-section" spy={true} smooth={true} duration={500}>
            Indian Food
          </Link>
          <Link className="menu-item" to="western-food-section" spy={true} smooth={true} duration={500}>
            Western Food
          </Link>
          <Link className="menu-item" to="drinks-section" spy={true} smooth={true} duration={500}>
            Drinks
          </Link>
          <Link className="menu-item" to="dessert-section" spy={true} smooth={true} duration={500}>
            Dessert
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Menu;