import Card from "./Card";

function Cards ({cards}) {

    return (
        <div className="card-container">
            {cards.map ((card,index) => (
                <Card 
                key={index}
                name={card.name}
                category={card.category}
                price={card.price}
                />
            ))}
        </div>
    )
}


export default Cards