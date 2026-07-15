import { useEffect, useState } from "react";
import axiosInstance from "../components/axiosInstance";
import Navbar from "../components/Navbar";

function Home() {

    const [stocks, setStocks] = useState([]);
    const [search, setSearch] = useState("");

    const [buyData, setBuyData] = useState({
        stockSymbol: "",
        stockName: "",
        price: "",
        count: "",
        stockExchange: "NASDAQ"
    });

    useEffect(() => {
        loadPortfolio();
    }, []);

    const loadPortfolio = async () => {

        try {

            const res = await axiosInstance.get("/stocks/portfolio");

            setStocks(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const handleChange = (e) => {

        setBuyData({
            ...buyData,
            [e.target.name]: e.target.value
        });

    };

    const buyStock = async () => {

        try {

            await axiosInstance.post("/stocks/buy", buyData);

            alert("Stock Purchased Successfully");

            loadPortfolio();

            setBuyData({
                stockSymbol: "",
                stockName: "",
                price: "",
                count: "",
                stockExchange: "NASDAQ"
            });

        } catch (err) {

            alert(err.response?.data?.message || "Error");

        }

    };

    const filteredStocks = stocks.filter((stock) =>
        stock.stockName.toLowerCase().includes(search.toLowerCase())
    );

    const totalInvestment = stocks.reduce(
        (sum, stock) => sum + stock.totalPrice,
        0
    );

    return (

        <>

            <Navbar />

            <div className="container">

                <h1>Dashboard</h1>

                <div className="cards">

                    <div className="card">
                        <h3>Total Stocks</h3>
                        <h2>{stocks.length}</h2>
                    </div>

                    <div className="card">
                        <h3>Total Investment</h3>
                        <h2>${totalInvestment}</h2>
                    </div>

                </div>

                <hr />

                <h2>Buy Stock</h2>

                <input
                    type="text"
                    placeholder="Stock Symbol"
                    name="stockSymbol"
                    value={buyData.stockSymbol}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Stock Name"
                    name="stockName"
                    value={buyData.stockName}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={buyData.price}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    placeholder="Quantity"
                    name="count"
                    value={buyData.count}
                    onChange={handleChange}
                />

                <button onClick={buyStock}>
                    Buy
                </button>

                <hr />

                <h2>Portfolio</h2>

                <input
                    type="text"
                    placeholder="Search Stock"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <table>

                    <thead>

                        <tr>

                            <th>Symbol</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            filteredStocks.map((stock) => (

                                <tr key={stock._id}>

                                    <td>{stock.stockSymbol}</td>

                                    <td>{stock.stockName}</td>

                                    <td>${stock.price}</td>

                                    <td>{stock.count}</td>

                                    <td>${stock.totalPrice}</td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </>

    );

}

export default Home;