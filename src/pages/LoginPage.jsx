import { useState, useContext } from "react";
import { Button, TextInput, Checkbox } from "../components";
import { passwordValidator } from '../helpers/passwordValidator';
import { emailValidator } from "../helpers/emailValidator";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import './LoginPageStyles.css';

const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [stayLog, setStayLog] = useState(true);

    const formSubmit = (event) => {
        event.preventDefault();

        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if(emailError || passwordError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }

        login(email.value, password.value, stayLog);
    }

    function onEmailChange(event) {
        setEmail({ value: event.target.value, error: '' });
    }

    function onPasswordChage(event){
        setPassword({ value: event.target.value, error: '' });
    }

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
                        onChange={onEmailChange}
                        errorText={email.error}
                        error={!!email.error}
                    />

                    <TextInput
                        label='Senha'
                        placeholder='Digite sua senha'
                        name='user-password'
                        type='password'
                        onChange={onPasswordChage}
                        errorText={password.error}
                        error={!!password.error}
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
                            <Link to='/forgot-password' className="link-text">Esqueci minha senha</Link>
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
                            <Link to='/register' className="link-text">
                                Criar conta
                            </Link>
                        </p>
                    </div>

                </form>

            </div>

            <div className="img-container"></div>
        </div>
    )
}

export default LoginPage;