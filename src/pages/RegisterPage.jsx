import { useState, useContext } from 'react'
import { Button, TextInput } from '../components'
import { telefoneValidator } from '../helpers/telefoneValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { confirmPassword } from '../helpers/confirmPassword'
import { emailValidator } from '../helpers/emailValidator'
import { nomeValidator } from '../helpers/nomeValidator'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import './RegisterPageStyles.css'

const RegisterPage = () => {
    const { register } = useContext(AuthContext);
    const [name, setName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [telefone, setTelefone] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [confirmPw, setConfirmPw] = useState({ value: '', error: '' });

    const formSubmit = (event) => {
        event.preventDefault();

        const nameError = nomeValidator(name.value);
        const emailError = emailValidator(email.value);
        const telefoneError = telefoneValidator(telefone.value);
        const passwordError = passwordValidator(password.value);
        const confirmPasswordError = confirmPassword(confirmPw.value);

        if (nameError || emailError || passwordError || confirmPasswordError) {
            setName({ ...name, error: nameError });
            setEmail({ ...email, error: emailError });
            setTelefone({ ...telefone, error: telefoneError });
            setPassword({ ...password, error: passwordError });
            setConfirmPw({ ...confirmPw, error: confirmPasswordError });

            return;
        }

        register(name.value, email.value, password.value, confirmPw.value);
    }

    function onValueChange(setState, event) {
        setState({ value: event.target.value, error: '' });
    }

    return (
        <div className="register-container">

            <div className="register">

                <form className="register-form">
                    <h1 className="title">Criar Conta</h1>

                    <TextInput
                        label='Nome'
                        placeholder='Digite seu nome completo'
                        value={name.value}
                        name='user-name'
                        type='text'
                        onChange={event => { onValueChange(setName, event) }}
                        error={!!name.error}
                        errorText={name.error}
                    />

                    <TextInput
                        label='Email'
                        placeholder='Digite seu email'
                        value={email.value}
                        name='user-email'
                        type='email'
                        onChange={event => { onValueChange(setEmail, event) }}
                        error={!!email.error}
                        errorText={email.error}
                    />

                    <TextInput
                        label='Telefone'
                        placeholder='Digite seu número de telefone Unitel'
                        value={telefone.value}
                        name='user-phone'
                        type='text'
                        onChange={event => { onValueChange(setTelefone, event) }}
                        error={!!telefone.error}
                        errorText={telefone.error}
                    />

                    <TextInput
                        label='Senha'
                        placeholder='Digite sua senha'
                        value={password.value}
                        name='user-password'
                        isPassword={true}
                        onChange={event => { onValueChange(setPassword, event) }}
                        error={!!password.error}
                        errorText={password.error}
                    />

                    <TextInput
                        label='Confirmar Senha'
                        placeholder='Repita a senha'
                        value={confirmPw.value}
                        name='user-confirm-password'
                        isPassword={true}
                        onChange={event => { onValueChange(setConfirmPw, event) }}
                        error={!!confirmPw.error}
                        errorText={confirmPw.error}
                    />

                    <Button
                        style={{ marginTop: '24px' }}
                        variant='contained'
                        type='submit'
                        onClick={(event) => { formSubmit(event) }}
                    >
                        Entrar
                    </Button>

                    <div className="row">
                        <p className="text" style={{ cursor: 'default' }}>
                            Já tem uma conta?
                            <Link to='/login' className="link-text">
                                Entrar
                            </Link>
                        </p>
                    </div>

                </form>

            </div>

            <div className="img-register"></div>

        </div>
    )
}

export default RegisterPage;