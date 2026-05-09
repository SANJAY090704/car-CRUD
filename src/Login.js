import { useState } from "react";

const Login = () => {

  let [username, setUsername] = useState("");

  let [password, setPassword] = useState("");

  let [message, setMessage] = useState("");

  const handleLogin = () => {

    if(username == "admin" && password == "123")
    {
      setMessage("Login Success");
    }
    else
    {
      setMessage("Invalid User");
    }

  };

  return (

    <div style={{padding:"20px"}}>

      <h1>Login</h1>

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

      <button onClick={handleLogin}>
        Login
      </button>

      <h2>{message}</h2>

    </div>

  );
};

export default Login;