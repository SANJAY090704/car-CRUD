import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Routing from "./Routing";

const App = () => {

    return (
        <>

            <BrowserRouter>

                <ol>

                    <Link to="/"> <li>Home</li></Link>

                    <Link to="/signin"> <li>Sign In</li></Link>

                    <Link to="/signup"> <li>Sign Up</li></Link>

                    <Link to="/cars"> <li>Search Cars</li></Link>

                    <Link to="/addcar"> <li>Add New Car</li></Link>

                    <Link to="/removecar"> <li>Remove Car</li></Link>

                    <Link to="/updatecar"> <li>Update Car</li></Link>

                </ol>

                <Routing />

            </BrowserRouter>

        </>
    )
}

export default App;