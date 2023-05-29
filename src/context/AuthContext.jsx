import { useState, useEffect, createContext } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);


    const register = () => {

    }

    const login = async (login, password, stayLog) => {
        setIsLoading(true);

        try {
            if (stayLog) { //Manter login do usuario
                
            } else { //Nao manter login do usuario

            }
        } catch (e) {

        }
    }

    const isLogged = () => {
        console.log('is logged?')
    }

    useEffect(() => {
        isLogged();
    }, []);

    return (
        <AuthContext.Provider value={{
            isLoading,
            register,
            login,
        }}>
            {children}
        </AuthContext.Provider>
    );
}