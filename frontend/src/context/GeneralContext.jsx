import { createContext, useEffect, useState } from "react";
import axiosInstance from "../components/axiosInstance";

export const GeneralContext = createContext();

function GeneralContextProvider({ children }) {

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (token) {
            axiosInstance.get("/users/me")
                .then((res) => {
                    setUser(res.data);
                    setIsLoggedIn(true);
                })
                .catch(() => {
                    localStorage.removeItem("token");
                    setUser(null);
                    setIsLoggedIn(false);
                })
                .finally(() => {
                    setLoading(false);
                });
            return;
        }

        setLoading(false);

    }, []);

    const login = (userData, token) => {

        localStorage.setItem("token", token);

        setUser(userData);
        setIsLoggedIn(true);

    };

    const logout = () => {

        localStorage.removeItem("token");

        setUser(null);
        setIsLoggedIn(false);

    };

    return (

        <GeneralContext.Provider
            value={{
                user,
                setUser,
                isLoggedIn,
                login,
                logout,
                loading
            }}
        >
            {children}
        </GeneralContext.Provider>

    );

}

export default GeneralContextProvider;