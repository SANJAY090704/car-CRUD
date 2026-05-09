import { useEffect, useState } from "react";

const RemoveCar = () => {

    let [cars, setCars] = useState([]);

    useEffect(() => {

        let data =
            JSON.parse(localStorage.getItem("cars")) || [];

        setCars(data);

    }, []);


    const remove = (id) => {

        let filtered = cars.filter((c) =>

            c.id != id

        );

        setCars(filtered);

        localStorage.setItem(
            "cars",
            JSON.stringify(filtered)
        );

    }

    return (
        <>

            <h1>Remove Cars</h1>

            {

                cars.map((c) => (

                    <div className="card">

                        <h2>{c.car}</h2>

                        <h3>{c.car_model}</h3>

                        <h3>{c.price}</h3>

                        <button
                            onClick={() => remove(c.id)}
                        >
                            Delete
                        </button>

                    </div>

                ))

            }

        </>
    )
}

export default RemoveCar;