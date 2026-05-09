import { useState } from "react";

const SignUp = () => {

    let [name, setName] = useState("");

    let [email, setEmail] = useState("");

    let [password, setPassword] = useState("");

    const signup = () => {

        let user = {

            name:name,

            email:email,

            password:password

        };

        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );

        alert("Signup Successful");

    }

    return (
        <>

            <h1>Sign Up</h1>

            <input
                type="text"
                placeholder="Enter Name"
                onChange={(e)=>setName(e.target.value)}
            />

            <br /><br />

            <input
                type="email"
                placeholder="Enter Email"
                onChange={(e)=>setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Enter Password"
                onChange={(e)=>setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={signup}>
                Signup
            </button>

        </>
    )
}

export default SignUp;