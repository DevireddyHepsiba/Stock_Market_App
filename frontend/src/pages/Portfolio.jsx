import { useEffect, useState } from "react";
import axiosInstance from "../components/axiosInstance";
import Navbar from "../components/Navbar";

function Portfolio() {

    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetchPortfolio();
    }, []);

    const fetchPortfolio = async () => {

        try {

            const res = await axiosInstance.get("/stocks/portfolio");

            setStocks(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const sellStock = async (id) => {

        try {

            await axiosInstance.delete(`/stocks/sell/${id}`);

            alert("Stock Sold Successfully");

            fetchPortfolio();

        } catch (err) {

            alert(err.response?.data?.message);

        }

    };

    const totalValue = stocks.reduce(
        (sum, stock) => sum + stock.totalPrice,
        0
    );

    return (

        <>
            <Navbar />

            <div className="container">

                <h1>My Portfolio</h1>

                <h3>Total Portfolio Value : ${totalValue}</h3>

                <table>

                    <thead>

                        <tr>

                            <th>Symbol</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            stocks.map((stock) => (

                                <tr key={stock._id}>

                                    <td>{stock.stockSymbol}</td>

                                    <td>{stock.stockName}</td>

                                    <td>${stock.price}</td>

                                    <td>{stock.count}</td>

                                    <td>${stock.totalPrice}</td>

                                    <td>

                                        <button
                                            onClick={() => sellStock(stock._id)}
                                        >
                                            Sell
                                        </button>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </>

    );

}

export default Portfolio;