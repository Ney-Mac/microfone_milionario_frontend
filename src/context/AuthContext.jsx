import { useState, useEffect, createContext } from "react";
import { Alert } from "@mui/material";
import { BASE_URL } from '../config';
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', value: '' })

    const register = async ({ nomeCompleto, email, telefone, password, roleName, indicativoTelefone }) => {
        setIsLoading(true);

        try {
            const res = await axios({
                url: `${BASE_URL}usuarios`,
                method: 'post',
                data: {
                    nomeCompleto,
                    email,
                    telefone,
                    password,
                    dataNascimento,
                    morada,
                    roleName,
                    indicativoTelefone
                },
            });

            console.log(res.data);

            setIsLoading(false);
        }catch(e) {
            console.log(`register error ${e} -> ${e.response?.data}`);

            setMessage({ 
                type: 'register error', 
                value: <Alert severity="error">{e.response?.data.message}</Alert> 
            });

            setIsLoading(false);
        }
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
            email.value
            if (stayLog) { //Manter login do usuario -> localStorage
                console.log('manter')
            } else { //Nao manter login do usuario
                console.log('descartar')
            }

            setIsLoading(false);
        } catch (e) {
            console.log(`login error: ${e}`);

            let errorText = (e.response?.data.status === 401)? 'Credenciais Erradas' : e.response.data.message;

            setMessage({ 
                type: 'login error', 
                value: <Alert severity="error">{errorText}</Alert> 
            });
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
            message,
        }}>
            {children}
        </AuthContext.Provider>
    );
}