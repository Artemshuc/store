import Cards from "./Cards";

function BodyContainer ({cards}) {
    return (
        <div className="BodyContainer">
            <Cards cards={cards}/>
        </div>
    )
}

export default BodyContainer