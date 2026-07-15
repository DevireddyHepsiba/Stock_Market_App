import { useContext } from "react";
import Navbar from "../components/Navbar";
import { GeneralContext } from "../context/GeneralContext";

function Profile() {

    const { user, logout } = useContext(GeneralContext);

    return (

        <>

            <Navbar />

            <div className="container">

                <h1>Profile</h1>

                <div className="card">

                    <h3>Username</h3>

                    <p>

                        {user?.username || "Not Available"}

                    </p>

                    <h3>Email</h3>

                    <p>

                        {user?.email || "Not Available"}

                    </p>

                    <button
                        onClick={logout}
                    >

                        Logout

                    </button>

                </div>

            </div>

        </>

    );

}

export default Profile;