import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
	token: "",
	isLoggedIn: false,
	login: token => {},
	logout: () => {},
});
export const AuthContextProvider = props => {
    const initialToken=localStorage.getItem("token")
	const [token, setToken] = useState(initialToken);
    var isLoggedIn = !!token;
    const loginHandler = (token) => {
        setToken(token);
        // isLoggedIn = true;
        localStorage.setItem('token', token);
    }
    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
        // isLoggedIn = false;
    }
    const authValue = {
        token:token,
        isLoggedIn:isLoggedIn,
        login: loginHandler,
        logout:logoutHandler
    }
    return (
        <AuthContext.Provider value={authValue}>{props.children}</AuthContext.Provider>
    )
};
export default AuthContext;
