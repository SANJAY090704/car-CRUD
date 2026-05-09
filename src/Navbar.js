import { Link } from "react-router-dom";

const Navbar = () => {

  return (

    <div
      style={{
        backgroundColor:"black",
        padding:"20px"
      }}
    >

      <Link
        to="/"
        style={{color:"white", margin:"10px"}}
      >
        Home
      </Link>

      <Link
        to="/login"
        style={{color:"white", margin:"10px"}}
      >
        Login
      </Link>

      <Link
        to="/signup"
        style={{color:"white", margin:"10px"}}
      >
        Signup
      </Link>

    </div>

  );
};

export default Navbar;