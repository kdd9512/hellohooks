import React, {useState} from "react";
import {useHyperT, useSetLang} from "./context";

export default () => {
    const setLang = useSetLang();
    const trans = useHyperT();
    return (
        <>
            <h1>{trans("Hello!")}</h1>
            <button onClick={() => setLang("kr")}>{trans("translate")}</button>
        </>
    )
};