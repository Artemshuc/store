
function Cards({ cards, CountPrice }) {
  return (
    <div className="body-container">
      {cards.map((card, index) => (
        <div key={card.id} className="cardBody">
          <h2>{card.name}</h2>
          <p>{card.category}</p>
          <p>{card.price}</p>
          <button onClick={() => CountPrice(card.price)}>Добавить в корзину</button>
        </div>
      ))}
    </div>
  );
}

export default Cards


