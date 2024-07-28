import "./Styles/Header.css"

function Header({totalPrice}) {
  return (
    <div className="button-nav">
      <button>
        <span class="material-symbols-outlined">home</span> Главная
      </button>
      <button>
        <span class="material-symbols-outlined">shopping_cart</span>Товары
      </button>
      <button>
        <span class="material-symbols-outlined">arrow_downward_alt</span>Акции
      </button>
      <button>
        <span class="material-symbols-outlined">contact_support</span> Контакты
      </button>
      <button>
        <span class="material-symbols-outlined bag">shopping_bag</span> Корзина
        <div className="nav-price">Общая стоимость: {totalPrice}</div>
      </button>
    </div>
  );
}

export default Header;
