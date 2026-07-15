import Navbar from "../components/Navbar";

function AllTransactions(){

    return(

        <>

        <Navbar/>

        <div className="container">

            <h1>All Transactions</h1>

            <table>

                <thead>

                    <tr>

                        <th>User</th>

                        <th>Type</th>

                        <th>Amount</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td>Hepsi</td>

                        <td>BUY</td>

                        <td>$1200</td>

                    </tr>

                </tbody>

            </table>

        </div>

        </>

    )

}

export default AllTransactions;