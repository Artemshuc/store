import React, { useState } from "react";
import Button from "./Button";
import SignUpForm from "./SignUpForm";
import { MdDelete } from "react-icons/md";
import "./Styles/Header.css";

function Header({ totalPrice, items, handleDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <div className="brandies">
        <h1>Brandies</h1>
      </div>
      <div className="button-nav">
        <Button>
          <span className="material-symbols-outlined">home</span> Home
        </Button>
        <Button>
          <span className="material-symbols-outlined">shopping_cart</span>{" "}
          Categories
        </Button>
        <Button>
          <span className="material-symbols-outlined">arrow_downward_alt</span>
          Sales
        </Button>
        <Button>
          <span className="material-symbols-outlined">contact_support</span>{" "}
          Contacts
        </Button>
        <Button onClick={handleCardIsOpen}>
          <span className="material-symbols-outlined bag">shopping_bag</span>
          <div className="nav-price">Total price: {totalPrice} $</div>
        </Button>

        <div className={`slide-panel ${isOpen ? "active" : ""}`}>
          <div className="slide-header">
            <Button onClick={handleCardIsOpen} className="close-btn">
              Close
            </Button>
            <h2>Your bag</h2>
          </div>

          <div className="slide-content">
            {items.map((item, index) => (
              <div key={index}>
                <p>
                  {item.title} : {item.price} $
                </p>
                <p onClick={() => handleDelete(index)}>
                <MdDelete />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SignUpForm />
    </div>
  );
}

export default Header;
