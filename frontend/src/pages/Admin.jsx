import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Admin(){

    return(

        <>

        <Navbar/>

        <div className="container">

            <h1>Admin Dashboard</h1>

            <div className="cards">

                <div className="card">

                    <Link to="/users">

                        Users

                    </Link>

                </div>

                <div className="card">

                    <Link to="/orders">

                        Orders

                    </Link>

                </div>

                <div className="card">

                    <Link to="/transactions">

                        Transactions

                    </Link>

                </div>

                <div className="card">

                    <Link to="/adminchart">

                        Charts

                    </Link>

                </div>

            </div>

        </div>

        </>

    )

}

export default Admin;