

function Card({type, index, name, age, breed, gender}) {
    return (
        <div className="card mt-3 mx-2" style={{width: "18rem"}}>
            <div className="card-header">
                {`${index + 1}. The ${type} named ${name}`}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{`Age: ${age}`}</li>
                <li className="list-group-item">{`Breed: ${breed}`}</li>
                <li className="list-group-item">{`Gender: ${gender}`}</li>
            </ul>
        </div>

    )
}
export default Card