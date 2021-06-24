import React, {useContext} from "react";
import {UserContext, useUser} from "./context";

const Header = () => {
    const {name, loggedIn} = useUser();
    return (
        <header>
            <a href="#">Home</a>
            <p>Hello, {name}, you are {" "}
            {loggedIn ? "Logged in" : "anonymous"}</p>
        </header>
    );
};
export default Header;