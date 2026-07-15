import { useState } from "react";
import axiosInstance from "./axiosInstance";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        username: "",
        email: "",
        password: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axiosInstance.post("/users/register", formData);

            alert("Registration Successful");

            navigate("/login");

        }

        catch (err) {

            alert(err.response.data.message);

        }

    };

    return (

        <div>

            <h2>Register</h2>

            <form onSubmit={handleSubmit}>

                <input
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                />

                <br />

                <input
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <br />

                <button>

                    Register

                </button>

            </form>

        </div>

    );

}

export default Register;