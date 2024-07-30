import { useState } from "react";
import "./Styles/Card.css";

function Card(props) {
  const { title, description, price, images, category, CountPrice } = props;

  const [isExpanded, setExpanded] = useState(false);

  const handleExpandedClick = () => {
    setExpanded(!isExpanded);
  };

  const exchangeDescription =
    description.length > 100 ? description.slice(0, 80) + "..." : description;

  return (
    <div className="cards">
      <img src={images} alt="card" />
      <h1>{title}</h1>
      <p>{isExpanded ? <p>{description}</p> : exchangeDescription}</p>
      <button className="turnOff" onClick={handleExpandedClick}>
        {isExpanded ? "Turn off" : "Read more"}
      </button>
      <small style={{ fontStyle: "italic" }}>{category.name}</small>
      <h2>{price} $</h2>
      <button className="button" onClick={() => CountPrice(price)}>
        Buy
      </button>
    </div>
  );
}

export default Card;
