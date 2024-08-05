import { useState } from "react";
import Login from "./Login";
import "./Styles/Header.css";
import SignUpForm from "./SignUpForm";

function Header({ totalPrice, items, CountPrice }) {
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
        <button>
          <span class="material-symbols-outlined">home</span> Home
        </button>
        <button>
          <span class="material-symbols-outlined">shopping_cart</span>{" "}
          Categories
        </button>
        <button>
          <span class="material-symbols-outlined">arrow_downward_alt</span>Sales
        </button>
        <button>
          <span class="material-symbols-outlined">contact_support</span>{" "}
          Contacts
        </button>
        <button onClick={handleCardIsOpen}>
          <span class="material-symbols-outlined bag">shopping_bag</span>
          <div className="nav-price">Total price: {totalPrice} $</div>
        </button>
      </div>
      {isOpen && (
        <div className="card_isOpen">
          {items.map((item, index) => (
            <div key={index}>
              <p>
                {item.title} : {item.price} $
              </p>
            </div>
          ))}
        </div>
      )}
      <Login />
    </div>
  );
}

export default Header;
