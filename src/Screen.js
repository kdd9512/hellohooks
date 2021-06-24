import React from "react";
import Header from "./Header";
import {useFn} from "./context";

const Screen = () => {
    const {logUserIn} = useFn();
    return (
        <div>
            <Header />
            <h1>First screen</h1>
            <button onClick={logUserIn}>SIGN IN</button>
        </div>
    );
};
export default Screen;