import { useEffect, useState } from "react";
import Card from "./Card";

const API_URL = "https://api.escuelajs.co/api/v1/products";
function Cards({ CountPrice }) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const cards = await res.json();
        setCards(cards);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      {isLoading ? (
        <h1>is Loading...</h1>
      ) : (
        cards.map((card) => (
          <Card key={card.id} {...card} CountPrice={CountPrice} />
        ))
      )}
    </>
  );
}

export default Cards;
