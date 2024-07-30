import './Styles/BodyContainer.css';
import Cards from './Cards';
import './Styles/Card.css'

function BodyContainer({ cards, CountPrice }) {
  return (
    <div className='body'>
    <Cards cards={cards} CountPrice={CountPrice}/>
    </div>
  );
}

export default BodyContainer;