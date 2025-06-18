import React, { useState } from "react";
import Button from "./Button";
import { MdDelete } from "react-icons/md";
import "./Styles/Header.css";
import { NavLink } from "react-router-dom";
import SignUp from "./SignUp";
import Categories from "./Categories";

function Header({ totalPrice, items, handleDelete, handleCategorySelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [contact, setIsContact] = useState(false);

  const handleCardIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoriesToggle = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const handleContact = () => {
    setIsContact(!contact);
  };

  return (
    <div className="nav">
      <div className="brandies">
        <h1>Brandies</h1>
      </div>
      <div className="button-nav">
        <NavLink to="/">
          <Button>
            <span className="material-symbols-outlined">home</span> Home
          </Button>
        </NavLink>

        <Button onClick={handleCategoriesToggle}>
          <span className="material-symbols-outlined">shopping_cart</span>
          Categories
        </Button>
        {isCategoriesOpen && (
          <Categories onSelectCategory={handleCategorySelect} />
        )}

        <NavLink to="/Contacts">
          <Button onClick={handleContact}>
            <span className="material-symbols-outlined">contact_support</span>
            Contacts
          </Button>
        </NavLink>

        <Button onClick={handleCardIsOpen}>
          <span className="material-symbols-outlined bag">shopping_bag</span>
          <div className="nav-price">Total price: {totalPrice} $</div>
        </Button>

        <div className={`slide-panel ${isOpen ? "active" : ""}`}>
          <div className="slide-header">
            <h2>Your bag</h2>
          </div>
          <Button onClick={handleCardIsOpen} className="close-btn">
            Close
          </Button>

          <div className="slide-content">
            {items.map((item, index) => (
              <div key={index} className="itemInBag">
                <p>
                  {item.title} : {item.price} $
                </p>
                <p onClick={() => handleDelete(index)}>
                  <MdDelete className="bin" />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Sign_form">
        <NavLink to="Sign_in">
          <Button>Sign in</Button>
        </NavLink>
        <SignUp />
      </div>
    </div>
  );
}

export default Header;
