import { useState, useEffect, createContext } from "react";
import { Alert } from "@mui/material";
import { BASE_URL } from '../config';
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', value: '' })
    const [userInfo, setUserInfo] = useState(null);

    const sendSms = async (destinatario, tipoNotificacaoEnum) => {
        try {
            const res = await axios({
                method: 'post',
                url: `${BASE_URL}notificacao/send-sms`,
                data: {
                    destinatario,
                    tipoNotificacaoEnum,
                }
            });

            console.log(res.data);
            
            
        } catch (e) {
            console.log(`sendSms error ${e} -> ${e.response?.data.message}`);

            setMessage({
                type: 'register error',
                value: <Alert severity="error">{e.response?.data.message}</Alert>
            });

            setIsLoading(false);
        }
    }

    const register = async ({ nomeCompleto, email, telefone, password, roleName, indicativoTelefone, dataNascimento, morada }) => {
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

            await sendSms();

            setIsLoading(false);
        } catch (e) {
            console.log(`register error ${e} -> ${e.response?.data.message}`);

            setMessage({
                type: 'register error',
                value: <Alert severity="error">{e.response?.data.message}</Alert>
            });

            setIsLoading(false);
        }
    }

    const login = async (email, password, stayLog, redirectTo) => {
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
            setUserInfo(res.data.result);

            if (stayLog) { //Manter login do usuario -> localStorage

                localStorage.setItem('userInfo', JSON.stringify(res.data.result));
                redirectTo('/cliente')

            } else { //Nao manter login do usuario

                sessionStorage.setItem('userInfo', JSON.stringify(res.data.result));
                redirectTo('/cliente')

            }

            setIsLoading(false);
        } catch (e) {
            console.log(`login error: ${e}`);

            let errorText = (e.response?.data.status === 401) ? 'Credenciais Erradas' : e.response.data.message;

            setMessage({
                type: 'login error',
                value: <Alert severity="error">{errorText}</Alert>
            });
            setIsLoading(false);
        }
    }

    const logout = () => {
        try {
            localStorage.removeItem('userInfo');
            sessionStorage.removeItem('userInfo');
            setUserInfo(null);
        } catch (e) {
            console.log(`isLogged error: ${e} -> ${e.response?.data}`);

            setMessage({
                type: 'login error',
                value: <Alert severity="error">{e.response.data.message}</Alert>
            });
            setIsLoading(false);
        }
    }

    const isLogged = () => {
        try {
            let local = localStorage.getItem('userInfo');
            if (local) {
                local = JSON.parse(local);
                setUserInfo(local);
            }

            let session = sessionStorage.getItem('userInfo');
            if (session) {
                session = JSON.parse(session);
                setUserInfo(session);
            }
        } catch (e) {
            console.log(`isLogged error: ${e} -> ${e.response?.data}`);

            setMessage({
                type: 'login error',
                value: <Alert severity="error">{e.response.data.message}</Alert>
            });
            setIsLoading(false);
        }
    }

    useEffect(() => {
        logout();
        isLogged();
    }, []);

    return (
        <AuthContext.Provider value={{
            userInfo,
            logout,
            isLoading,
            register,
            login,
            message,
        }}>
            {children}
        </AuthContext.Provider>
    );
}