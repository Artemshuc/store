import "./Styles/Header.css";
import Login from "./Login";
function Header({ totalPrice }) {
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
        <button>
          <span class="material-symbols-outlined bag">shopping_bag</span>
          <div className="nav-price">Total price: {totalPrice}</div>
        </button>
      </div>
      <Login />
    </div>
  );
}

export default Header;
