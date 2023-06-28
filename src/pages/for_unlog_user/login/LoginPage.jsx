import { useState, useContext, useEffect } from "react";
import { Button, TextInput, Checkbox } from "../../../components";
import { passwordValidator } from '../../../helpers/passwordValidator';
import { emailValidator } from "../../../helpers/emailValidator";
import { AuthContext } from "../../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import './LoginPageStyles.css';

const LoginPage = () => {
    const { login, message, userInfo } = useContext(AuthContext);
    const [email, setEmail] = useState({ value: 'NeyTeste@gmail.com', error: '' });
    const [password, setPassword] = useState({ value: '0000000', error: '' });
    const [stayLog, setStayLog] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (message.type === 'login error') {
            setShowMessage(true);
        }
    }, [message]);

    const formSubmit = (event) => {
        event.preventDefault();

        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }

        login((email.value).toLowerCase(), password.value, stayLog, redirectTo);
    }

    function redirectTo(link) {
        navigate(link);
    }

    function handleStateValue(setState, event) {
        setState({ value: event.target.value, error: '' });
    }

    return (
        <div className="login-container">

            <div className="login">

                <form className="login-form">
                    <h1 className="title">Login</h1>

                    {showMessage && message.value}

                    <TextInput
                        label='Email'
                        placeholder='Digite seu email'
                        value={email.value}
                        name='user-email'
                        type='email'
                        onChange={(event) => { handleStateValue(setEmail, event) }}
                        errorText={email.error}
                        error={!!email.error}
                    />

                    <TextInput
                        label='Senha'
                        placeholder='Digite sua senha'
                        value={password.value}
                        name='user-password'
                        isPassword={true}
                        onChange={(event) => { handleStateValue(setPassword, event) }}
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