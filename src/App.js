import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Menu from './components/Menu'; // Adjust the path as necessary
import { scroller,Element } from 'react-scroll';
import FoodModal from './components/FoodModal'; // Import the modal component
import logo from './assets/logo.png'; // Update with the actual path to your logo image
import cartIcon from './assets/cart-icon.png'; // Update with the actual path to your cart icon image
import chickenImg from './assets/chicken.jpg';
import StackImg from './assets/stack.jpg';
import BurgerImg from './assets/burger.jpg';
import SandwichImg from './assets/sandwich.jpg';
import SpaghettiImg from './assets/spaghetti.jpg';
import FishImg from './assets/fish.jpg';
import SaladImg from './assets/salad.jpg';
import RiceImg from './assets/rice.jpg';
import LasagnaImg from './assets/lasagna.jpg';
import KuyteavImg from './assets/kuyteav.jpg';
import NumImg from './assets/num.jpg';
import PorkImg from './assets/pork.jpg';
import SomlorImg from './assets/somlor.jpg';
import LoklakImg from './assets/Loklak.jpg';
import ChaImg from './assets/cha.jpg';
import PrahokImg from './assets/prahok.jpg';
import LortchaImg from './assets/lortcha.jpg';
import MeukImg from './assets/meuk.jpg';
import BirImg from './assets/bir.jpg';
import TandooriImg from './assets/tandoori.jpg';
import PaneerImg from './assets/paneer.jpg';
import MasalaImg from './assets/masala.jpg';
import MalaiImg from './assets/malai.jpg';
import LambImg from './assets/lamb.jpg';
import PaniImg from './assets/pani.jpg';
import DaalImg from './assets/daal.jpg';
import AlooImg from './assets/aloo.jpg';
import SamosaImg from './assets/samosa.jpg';
import ShrimpImg from './assets/shrimp.jpg';
import beefImg from './assets/beef.jpg';
import CheeseImg from './assets/cheese.jpg';
import TacosImg from './assets/tacos.jpg';
import FanjitasImg from './assets/fanjitas.jpg';
import WingImg from './assets/wing.jpg';
import MeatImg from './assets/meat.jpg';
import ChillImg from './assets/chill.jpg';
import LobsterImg from './assets/lobster.jpg';
import SmoothieImg from './assets/smoothie.jpg';
import SodaImg from './assets/soda.jpg';
import TeaImg from './assets/tea.jpg';
import MelonImg from './assets/melon.jpg';
import CocktailImg from './assets/cocktail.jpg';
import BeerImg from './assets/beer.jpg';
import WineImg from './assets/wine.jpg';
import WhiskeyImg from './assets/whiskey.jpg';
import RumImg from './assets/rum.jpg';
import PanImg from './assets/pan.jpg';
import ChocolateImg from './assets/chocolate.jpg';
import PavImg from './assets/pav.jpg';
import pannaImg from './assets/panna.jpg';
import tirImg from './assets/tir.jpg';
import cakeImg from './assets/cake.jpg';
import lemonImg from './assets/lemon.jpg';
import freshImg from './assets/fresh.jpg';
import banImg from './assets/ban.jpg';
import proImg from './assets/pro.jpg';
import { GiChicken } from 'react-icons/gi';
const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (food) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFood(null);
  };

  const handleSubmitOrder = () => {
    console.log('Order submitted:', selectedFood);
    setIsModalOpen(false);
  };

  const handleShowMenu = () => {
    setShowMenu(true);
    scroller.scrollTo('menu-section', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  const bestSellers = [
    { id: 1, name: 'Chicken Nugget', image: chickenImg, price: '$10' },
  ];

    const renderFoodItems = (items) =>
    items.map((food) => (
      <div key={food.id} className="food-item">
        <img src={food.image} alt={food.name} className="food-image" />
        <div className="food-details">
          <div className="food-header">
            <h2>{food.name}</h2>
            <p className="food-price" style={{ fontSize: '1.5rem', color: '#FF7F27' }}>{food.price}</p>
          </div>
          <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <button className="add-button" onClick={() => handleOpenModal(food)}>Add</button>
        </div>
      </div>
    ))
  return (
    <div className="app-container">
      <header className="app-header">
        <img src={logo} alt="Logo" className="logo" />
        <img src={cartIcon} alt="Cart" className="cart-icon" />
      </header>

      <div className={`welcome-screen ${showMenu ? 'slide-out' : ''}`}>
        <div className="welcome-image">
          <img src={`${process.env.PUBLIC_URL}/images/PVK.jpg`} alt="Pine View Kitchen" />
        </div>
        <div className="welcome-text">
          <h1>Pine View Kitchen</h1>
          <h2>Digital Menu</h2>
        </div>
        <div className="scroll-prompt" onClick={handleShowMenu}>
          Click to start view menu
        </div>
      </div>

      {showMenu && (
        <div className="menu-section slide-up">
          <Element name="menu-section">
            <Menu onAddFood={handleOpenModal} />
          </Element>
        </div>
      )}

      {isModalOpen && (
        <FoodModal
          isOpen={isModalOpen}
          food={selectedFood}
          onClose={handleCloseModal}
          onSubmit={handleSubmitOrder}
        />
      )}

      <Element name="best-seller-section">
        <div className="food-section">
          <h1>Best Seller</h1>
          <div className="food-items">
          <div className="food-item">
        <img src={chickenImg} alt="Best Seller Food" className="food-image" />
        <div className="food-details">
          <div className="food-header">
            <h2>Chicken Nugget</h2>
            <p className="food-price">$10</p>
          </div>
          <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
            Add
          </button>
        </div>
      </div>


            <div className="food-item">
        <img src={StackImg} alt="Best Seller Food" className="food-image" />
        <div className="food-details">
          <div className="food-header">
            <h2>Beef Stack</h2>
            <p className="food-price">$10</p>
          </div>
          <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
            Add
          </button>
        </div>
      </div>

              <div className="food-item">
              <img src={BurgerImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Burger</h2>
                    <p className="food-price">$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                  Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={SandwichImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Sandwich</h2>
                    <p className="food-price">$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                  Add
                  </button>
                </div>
                </div>


              <div className="food-item">
              <img src={SpaghettiImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Spaghetti</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                  Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={FishImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Fish and Chips</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                  Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={LasagnaImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Caesar Salad</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                  Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={RiceImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Fried Rice </h2>
                    <p className="food-price">$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                  Add
                  </button>
                </div>
              </div>



              <div className="food-item">
              <img src={LasagnaImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Lasagna</h2>
                    <p className="food-price">$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                      <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>
              </div>
              </div>
      </Element>


      <Element name="khmer-food-section">
    <div className="food-section">
      <h1>Khmer Food</h1>
      <div className="food-items">
              <div className="food-item">
              <img src={KuyteavImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>KuyTeav</h2>
                    <p className="food-price">$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={NumImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Numbanhchok</h2>
                    <p className="food-price">$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                  Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={PorkImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Pork and Rice</h2>
                    <p className="food-price">$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                  Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={SomlorImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Somlar Kari</h2>
                    <p className="food-price">$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                  Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={LoklakImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Lok Lak</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                  Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={ChaImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Cha Kroeung</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                  Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={PrahokImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Prahok Ktis</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                  Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={LortchaImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Lort Cha</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                  Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={MeukImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Ang Dtray-Meuk</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                  Add
                  </button>
                </div>
              </div>
              </div>
              </div>
              </Element>

  <Element name="indian-food-section">
    <div className="food-section">
      <h1>Indian Food</h1>
      <div className='food-items'>
              <div className="food-item">
              <img src={BirImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Biryani</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={TandooriImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Tandoori Chicken</h2>
                    <p className="food-price">$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={PaneerImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Paneer Tikka</h2>
                    <p className="food-price">$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={MasalaImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Masala Dosa</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={LambImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Lamb Vindaloo</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={PaniImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Pani Puri</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={DaalImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Daal Tadka</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={AlooImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Aloo Gobi</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={SamosaImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Samosa</h2>
                    <p className="food-price">$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>
              </div>
              </div>
  </Element>


  <Element name="western-food-section">
    <div className="food-section">
      <h1>Western Food</h1>
      <div className='food-items'>
              <div className="food-item">
              <img src={ShrimpImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Shrimp Scampi</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={beefImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Beef Stroganoff</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={CheeseImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Grilled Cheese Sandwich</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={TacosImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Tacos</h2>
                    <p className="food-price">$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={FanjitasImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Fajitas</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={WingImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Buffalo Wings</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={MeatImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Meatloaf</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>


              <div className="food-item">
              <img src={ChillImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Chili Con Carne</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={LobsterImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Lobster Roll</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>
              </div>
              </div>
  </Element>


  <Element name="drinks-section">
    <div className="food-section">
      <h1>Drinks</h1>
      <div className='food-items'>
              <div className="food-item">
              <img src={SmoothieImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>strawberry smoothie</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={SodaImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Passion Soda</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={TeaImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Greentea Frappe</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={MelonImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>watermelon smoothie</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={CocktailImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Blue Lagon Cocktail</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={BeerImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Draft Beer</h2>
                    <p className="food-price">$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={WineImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Red Wine</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={WhiskeyImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Whiskey (Jack Daniels)</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={RumImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Rum</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>
              </div>
              </div>
  </Element>


  <Element name="dessert-section">
    <div className="food-section">
      <h1>Dessert</h1>
      <div className='food-items'>
              <div className="food-item">
              <img src={PanImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Pancake</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={ChocolateImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Chocolate Cake</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>


              <div className="food-item">
              <img src={PavImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Pavlova</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={pannaImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Panna Cotta</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={tirImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Tiramisu</h2>
                    <p className="food-price">$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={cakeImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Cheesecake</h2>
                    <p className="food-price">$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>


              <div className="food-item">
              <img src={lemonImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Lemon Meringue Pie</h2>
                    <p className="food-price">$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={freshImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Fresh Fruit Tart</h2>
                    <p className="food-price">$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={banImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Banoffee Pie</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>

              <div className="food-item">
              <img src={proImg} alt="Best Seller Food" className="food-image" />
                <div className="food-details">
                  <div className="food-header">
                    <h2>Chocolate Profiteroles</h2>
                    <p className="food-price" >$10</p>
                  </div>
                  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <button className="add-button" onClick={() => handleOpenModal({ name: 'Beef Stack', price: '$10' })}>
                      Add
                  </button>
                </div>
              </div>
              </div>
              </div>
              </Element>

              {isModalOpen && (
        <FoodModal
          isOpen={isModalOpen}
          food={selectedFood}
          onClose={handleCloseModal}
          onSubmit={handleSubmitOrder}
          />
      )}
    </div>
  );
};


export default App;