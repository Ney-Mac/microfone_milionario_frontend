import { useState, useEffect, createContext } from "react";
import { BASE_URL } from '../config';
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const register = (name, email, password, confirmPassword) => {

    }

    const login = async (email, password, stayLog) => {
        setIsLoading(true);

        try {
            const res = await axios({
                method: 'post',
                url: `${BASE_URL}auth/signin`,
                data: {
                    email,
                    password
                }
            });
            console.log(res.data);
            
            if (stayLog) { //Manter login do usuario -> localStorage
                console.log('manter')
            } else { //Nao manter login do usuario
                console.log('descartar')
            }
            
            setIsLoading(false);
        } catch (e) {
            console.log(`login error: ${e}`);
            setIsLoading(false);
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