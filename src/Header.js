import React, {useContext} from "react";
import {UserContext} from "./context";

const Header = () => {
    const {user: {name, loggedIn}} = useContext(UserContext);
    return (
        <header>
            <a href="#">Home</a>
            <p>Hello, {name}, you are {" "}
            {loggedIn ? "Logged in" : "anonymous"}</p>
        </header>
    );
};
export default Header;