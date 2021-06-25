import React, {useState, useContext, createContext} from "react";


const LangContext = createContext();

const Lang = ({defaultLang, children, translation}) => {
    const [lang, setLang] = useState(defaultLang);
    const hyperT = text => {
        if (lang === defaultLang) {
            return text;
        }else {
            return translation[lang][text];
        }
    }
    return (
        <LangContext.Provider value={{setLang, trans:hyperT}}>
            {children}
        </LangContext.Provider>
    );
};

export const useSetLang = () => {
    const {setLang} = useContext(LangContext);
    return setLang;
};

export const useHyperT = () => {
    const {trans} = useContext(LangContext);
    return trans;
}

export default Lang;