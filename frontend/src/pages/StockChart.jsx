import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Line } from "react-chartjs-2";
import Navbar from "../components/Navbar";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function StockChart() {

    const data = {

        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],

        datasets: [

            {

                label: "Apple Stock",

                data: [180,185,183,190,195],

                borderColor: "green",

                backgroundColor: "lightgreen"

            }

        ]

    };

    return (

        <>
            <Navbar />

            <div className="container">

                <h1>Stock Chart</h1>

                <Line data={data} />

            </div>

        </>

    );

}

export default StockChart;