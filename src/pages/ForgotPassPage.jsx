import { useState } from "react";
import { Button, TextInput, Checkbox } from "../components";
import { Link } from "react-router-dom";
import './ForgotPassStyles.css';

const ForgotPassScreen = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPass, setConfirmPass] = useState();

    const formSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="forgot-container">

            <div className="forgot">

                <form className="forgot-form">
                    <h1 className="title">Recuperar senha</h1>

                    <TextInput
                        label='Email'
                        placeholder='Digite seu email'
                        name='user-email'
                        type='email'
                    />

                    <TextInput
                        label='Nova Senha'
                        placeholder='Digite sua senha'
                        name='user-new-password'
                        type='password'
                    />

                    <TextInput
                        label='Repetir Senha'
                        placeholder='Digite novamente sua senha'
                        name='user-forgot-password'
                        type='password'
                    />

                    <Button
                        variant='contained'
                        type='submit'
                        onClick={(event) => { formSubmit(event) }}
                    >
                        Enviar
                    </Button>

                </form>

            </div>

        </div>
    )
}

export default ForgotPassScreen;