import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js";

import {Bar} from "react-chartjs-2";
import Navbar from "../components/Navbar";

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

function AdminStockChart(){

const data={

labels:["Apple","Tesla","Google","Microsoft"],

datasets:[

{

label:"Total Orders",

data:[25,18,30,22],

backgroundColor:["red","blue","green","orange"]

}

]

};

return(

<>

<Navbar/>

<div className="container">

<h1>Admin Analytics</h1>

<Bar data={data}/>

</div>

</>

)

}

export default AdminStockChart;