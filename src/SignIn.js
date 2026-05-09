import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

    let [username, setUsername] = useState("");

    let [password, setPassword] = useState("");

    let navigate = useNavigate();

    const login = () => {

        if(username == "admin" && password == "123")
        {
            localStorage.setItem("login", "true");

            navigate("/cars");
        }
        else
        {
            alert("Invalid User");
        }

    }

    return (
        <>

            <h1>Sign In</h1>

            <input
                type="text"
                placeholder="Enter Username"
                onChange={(e)=>setUsername(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Enter Password"
                onChange={(e)=>setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={login}>
                Login
            </button>

        </>
    )
}

export default SignIn;