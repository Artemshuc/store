import './Styles/BodyContainer.css';
import Cards from './Cards';
import './Styles/Card.css'

function BodyContainer({ cards, CountPrice }) {
  return (
    <Cards cards={cards} CountPrice={CountPrice} />
  );
}

export default BodyContainer;