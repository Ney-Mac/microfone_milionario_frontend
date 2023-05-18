import { useState } from 'react'
import './RegisterPageStyles.css'
import { Button, TextInput } from '../components'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPw, setConfirmPw] = useState();

    const formSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="register-container">

            <div className="register">

                <form className="register-form">
                    <h1 className="title">Criar Conta</h1>

                    <TextInput
                        label='Nome'
                        placeholder='Digite seu nome'
                        name='user-name'
                        type='text'
                    />

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

                    <TextInput
                        label='Confirmar Senha'
                        placeholder='Repita a senha'
                        name='user-confirm-password'
                        type='password'
                    />

                    <Button
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