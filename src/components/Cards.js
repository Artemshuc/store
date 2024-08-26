import React from "react";
import Card from "./Card";

function Cards({ cards, CountPrice }) {
  if (!cards.length) {
    return <h1>No products available</h1>;
  }

  return (
    <>
      {cards.map((card) => (
        <Card key={card.id} {...card} CountPrice={CountPrice} />
      ))}
    </>
  );
}

export default Cards;
