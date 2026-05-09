import { useState } from "react";

const AddCar = () => {

    let [car, setCar] = useState("");

    let [model, setModel] = useState("");

    let [price, setPrice] = useState("");

    const addCar = () => {

        let oldCars =
            JSON.parse(localStorage.getItem("cars")) || [];

        let data = {

            id: Date.now(),

            car: car,

            car_model: model,

            price: price

        };

        localStorage.setItem(
            "cars",
            JSON.stringify([data, ...oldCars])
        );

        alert("Car Added");

    }

    return (
        <>

            <h1>Add Car</h1>

            <input
                type="text"
                placeholder="Enter Car"
                onChange={(e)=>setCar(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Enter Model"
                onChange={(e)=>setModel(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Enter Price"
                onChange={(e)=>setPrice(e.target.value)}
            />

            <br /><br />

            <button onClick={addCar}>
                Add Car
            </button>

        </>
    )
}

export default AddCar;