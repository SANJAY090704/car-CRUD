import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cars = () => {

    let [cars, setCars] = useState([]);

    let [search, setSearch] = useState("");

    useEffect(() => {

        let localCars =
            JSON.parse(localStorage.getItem("cars"));

        if(localCars)
        {
            setCars(localCars);
        }
        else
        {

            fetch("https://myfakeapi.com/api/cars/")

            .then((res) => res.json())

            .then((res) => {

                setCars(res.cars);

                localStorage.setItem(
                    "cars",
                    JSON.stringify(res.cars)
                );

            })

        }

    }, []);


    let filtered = cars.filter((c) =>

        c.car.toLowerCase().includes(search.toLowerCase())

    )

    return (
        <>

            <h1>Cars List</h1>

            <input
                type="text"
                placeholder="Search Car"
                onChange={(e)=>setSearch(e.target.value)}
            />

            {

                filtered.map((c) => (

                    <div className="card">

                        <h2>{c.car}</h2>

                        <h3>{c.car_model}</h3>

                        <h3>{c.price}</h3>

                        <button>

                            <Link
                                to={`/car/${c.id}/${c.car}/${c.car_model}/${c.price}`}
                            >
                                View
                            </Link>

                        </button>

                    </div>

                ))

            }

        </>
    )
}

export default Cars;