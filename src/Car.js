import { useParams } from "react-router-dom";

const Car = () => {

    let {id, brand, model, price} = useParams();

    return (
        <>

            <h1>Car Details</h1>

            <div className="card">

                <h2>ID : {id}</h2>

                <h2>Brand : {brand}</h2>

                <h2>Model : {model}</h2>

                <h2>Price : {price}</h2>

            </div>

        </>
    )
}

export default Car;