import { useState } from "react";
import "./Styles/Card.css";

function Card(props) {
  const { title, description, price, image, category, CountPrice } = props;

  const [isExpanded, setExpanded] = useState(false);

  const handleExpandedClick = () => {
    setExpanded(!isExpanded);
  };

  const handleOverlayClick = () => {
    setExpanded(false);
  };

  return (
    <div className={`card-container ${isExpanded ? "expanded" : ""}`}>
      {isExpanded && (
        <div className="overlay" onClick={handleOverlayClick}></div>
      )}
      <div className={`card ${isExpanded ? "expanded" : ""}`}>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p className="description" onClick={handleExpandedClick}>
          {isExpanded
            ? description
            : description.length > 100
            ? description.slice(0, 80) + "..."
            : description}
          <span className="readMore">
            {isExpanded ? "Turn off" : "Read more"}
          </span>
        </p>
        <small style={{ fontStyle: "italic" }}>{category.name}</small>
        <h2>{price} $</h2>
        <button className="button" onClick={() => CountPrice({ price, title })}>
          Buy
        </button>
      </div>
    </div>
  );
}

export default Card;
