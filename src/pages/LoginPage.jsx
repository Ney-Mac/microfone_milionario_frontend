import { useState } from "react";
import { Button, TextInput, Checkbox } from "../components";
import './LoginPageStyles.css';

const LoginPage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [stayLog, setStayLog] = useState(true);

    const formSubmit = (event) => {
        event.preventDefault();
    }

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className="login-container">

            <div className="login">

                <form className="login-form">
                    <h1 className="title">Login</h1>

                    <TextInput
                        label='Email'
                        placeholder='Digite seu email'
                        name='user-email'
                        type='email'
                    />

                    <TextInput
                        label='Senha'
                        placeholder='Digite sua senha'
                        name='user-password'
                        type='password'
                    />

                    <div className="row">

                        <div className="coluna">
                            <Checkbox
                                value={stayLog}
                                onChange={() => { setStayLog(!stayLog) }}
                            />
                            <p
                                className="text"
                                onClick={() => { setStayLog(!stayLog) }}
                            >
                                Lembre-me
                            </p>
                        </div>

                        <div className="coluna col-forgot">
                            <p className="link-text">Esqueci minha senha</p>
                        </div>

                    </div>

                    <Button
                        variant='contained'
                        type='submit'
                        onClick={(event) => { formSubmit(event) }}
                    >
                        Entrar
                    </Button>

                    <div className="row">
                        <p className="text" style={{ cursor: 'default' }}>
                            Não tem uma conta? 
                            <span className="link-text">
                                Criar conta
                            </span>
                        </p>
                    </div>

                </form>

            </div>

            <div className="img-container"></div>
        </div>
    )
}

export default LoginPage;