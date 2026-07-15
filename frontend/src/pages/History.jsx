import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axiosInstance from "../components/axiosInstance";

function History() {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = async () => {

        try {

            const res = await axiosInstance.get("/transactions");

            setTransactions(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <>

            <Navbar />

            <div className="container">

                <h1>Transaction History</h1>

                <table>

                    <thead>

                        <tr>

                            <th>Type</th>

                            <th>Payment Mode</th>

                            <th>Amount</th>

                            <th>Date</th>

                        </tr>

                    </thead>

                    <tbody>

                        {transactions.map((transaction) => (

                            <tr key={transaction._id}>

                                <td>{transaction.transactionType || "Buy"}</td>

                                <td>{transaction.paymentMode || "Virtual Wallet"}</td>

                                <td>{typeof transaction.amount === "number" ? `$${transaction.amount}` : "N/A"}</td>

                                <td>
                                    {transaction.time || transaction.createdAt
                                        ? new Date(transaction.time || transaction.createdAt).toLocaleString()
                                        : "N/A"}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </>

    );

}

export default History;