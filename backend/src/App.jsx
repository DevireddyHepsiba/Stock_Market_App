import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./components/Login";
import Register from "./components/Register";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import History from "./pages/History";
import Profile from "./pages/Profile";

import StockChart from "./pages/StockChart";

import Admin from "./pages/Admin";
import Users from "./pages/Users";
import AllOrders from "./pages/AllOrders";
import AllTransactions from "./pages/AllTransactions";
import AdminStockChart from "./pages/AdminStockChart";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Landing />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/portfolio"
                    element={
                        <ProtectedRoute>
                            <Portfolio />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/history"
                    element={
                        <ProtectedRoute>
                            <History />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/chart"
                    element={
                        <ProtectedRoute>
                            <StockChart />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <Admin />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/users"
                    element={
                        <ProtectedRoute>
                            <Users />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/orders"
                    element={
                        <ProtectedRoute>
                            <AllOrders />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/transactions"
                    element={
                        <ProtectedRoute>
                            <AllTransactions />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/adminchart"
                    element={
                        <ProtectedRoute>
                            <AdminStockChart />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;