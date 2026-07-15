import Navbar from "../components/Navbar";

function AllOrders(){

    return(

        <>

        <Navbar/>

        <div className="container">

            <h1>All Orders</h1>

            <table>

                <thead>

                    <tr>

                        <th>Symbol</th>

                        <th>Quantity</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td>AAPL</td>

                        <td>5</td>

                        <td>Completed</td>

                    </tr>

                </tbody>

            </table>

        </div>

        </>

    )

}

export default AllOrders;