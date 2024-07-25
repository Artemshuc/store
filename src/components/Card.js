

function Card ({name,caterogy,price}) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{caterogy}</p>
            <p>{price}</p>
        </div>
    )
}

export default Card