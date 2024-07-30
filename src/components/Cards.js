import { useEffect, useState } from "react";
import Card from "./Card";

function Cards({ CountPrice }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => {
        setCards(json);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      {cards.map((card) => (
        <Card key={card.id} {...card} CountPrice={CountPrice} />
      ))}
    </>
  );
}

export default Cards;
