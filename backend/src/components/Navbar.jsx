import { Link } from "react-router-dom";

function Navbar() {

    const logout = () => {

        localStorage.removeItem("token");

        window.location.href = "/login";

    };

    return (

        <nav>

            <Link to="/home">Home</Link>

            {" | "}

            <Link to="/portfolio">Portfolio</Link>

            {" | "}

            <Link to="/history">History</Link>

            {" | "}

            <Link to="/profile">Profile</Link>

            {" | "}

            <button onClick={logout}>

                Logout

            </button>

        </nav>

    );

}

export default Navbar;