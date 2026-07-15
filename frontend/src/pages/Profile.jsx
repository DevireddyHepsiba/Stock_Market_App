import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { GeneralContext } from "../context/GeneralContext";
import axiosInstance from "../components/axiosInstance";

function Profile() {

    const { user, setUser, logout } = useContext(GeneralContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (!user) {
            setLoading(true);
            axiosInstance.get("/users/me")
                .then((res) => {
                    setUser(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => setLoading(false));
        }

    }, [user, setUser]);

    return (

        <>

            <Navbar />

            <div className="container">

                <h1>Profile</h1>

                <div className="card">

                    {loading ? (
                        <p>Loading profile...</p>
                    ) : (
                        <>

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

                        </>
                    )}

                </div>

            </div>

        </>

    );

}

export default Profile;