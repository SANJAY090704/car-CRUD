import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Cars from "./Cars";
import Car from "./Car";
import AddCar from "./AddCar";
import RemoveCar from "./RemoveCar";
import UpdateCar from "./UpdateCar";

import ProtectedRoute from "./ProtectedRoute";

const Routing = () => {

    return (
        <>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/signin" element={<SignIn />} />

                <Route path="/signup" element={<SignUp />} />

                <Route
                    path="/cars"
                    element={
                        <ProtectedRoute>
                            <Cars />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/addcar"
                    element={
                        <ProtectedRoute>
                            <AddCar />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/removecar"
                    element={
                        <ProtectedRoute>
                            <RemoveCar />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/updatecar"
                    element={
                        <ProtectedRoute>
                            <UpdateCar />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/car/:id/:brand/:model/:price"
                    element={
                        <ProtectedRoute>
                            <Car />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </>
    )
}

export default Routing;