import React, {useState, useContext} from "react";

const UserContext = React.createContext();

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "KDD",
        loggedIn:false
    });
    const logUserIn = () => setUser({...user, loggedIn: true});
    return (
        <UserContext.Provider value={{user, fn:{logUserIn} }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => {
    const {user} = useContext(UserContext);
    return user;
};

export const useFn = () => {
    const {fn} = useContext(UserContext);
    return fn;
};

export default UserContextProvider;