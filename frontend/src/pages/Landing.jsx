import { Link } from "react-router-dom";

function Landing() {

    return (

        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100vh",
                background: "#f4f4f4"
            }}
        >

            <h1>SB Stocks</h1>

            <h3>Practice Stock Trading Without Risk</h3>

            <p>

                Learn investing with virtual money and real market data.

            </p>

            <div>

                <Link to="/login">

                    <button>

                        Login

                    </button>

                </Link>

                {"  "}

                <Link to="/register">

                    <button>

                        Register

                    </button>

                </Link>

            </div>

        </div>

    );

}

export default Landing;