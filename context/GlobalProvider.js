import { createContext, useContext, useState } from 'react';

const GlobalContext = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    return (
        <GlobalContext.Provider
          value= {{}}
        >


        </GlobalContext.Provider>
    )
};