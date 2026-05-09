import { useEffect, useState } from "react";

const UpdateCar = () => {

    let [cars, setCars] = useState([]);

    let [car, setCar] = useState("");

    let [model, setModel] = useState("");

    let [price, setPrice] = useState("");

    let [editId, setEditId] = useState(null);


    useEffect(() => {

        let data =
            JSON.parse(localStorage.getItem("cars")) || [];

        setCars(data);

    }, []);


    const edit = (c) => {

        setCar(c.car);

        setModel(c.car_model);

        setPrice(c.price);

        setEditId(c.id);

    }


    const update = () => {

        let updated = cars.map((c) => {

            if(c.id == editId)
            {
                c.car = car;

                c.car_model = model;

                c.price = price;
            }

            return c;

        });

        setCars(updated);

        localStorage.setItem(
            "cars",
            JSON.stringify(updated)
        );

        alert("Updated Successfully");

    }

    return (
        <>

            <h1>Update Car</h1>

            <input
                type="text"
                placeholder="Enter Car"
                value={car}
                onChange={(e)=>setCar(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Enter Model"
                value={model}
                onChange={(e)=>setModel(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Enter Price"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
            />

            <br /><br />

            <button onClick={update}>
                Update Car
            </button>

            <hr />

            {

                cars.map((c) => (

                    <div className="card">

                        <h2>{c.car}</h2>

                        <h3>{c.car_model}</h3>

                        <h3>{c.price}</h3>

                        <button
                            onClick={() => edit(c)}
                        >
                            Edit
                        </button>

                    </div>

                ))

            }

        </>
    )
}

export default UpdateCar;