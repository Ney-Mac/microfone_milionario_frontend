import { useState, useContext, useEffect } from 'react'
import { Button, TextInput, Select } from '../../../components'
import { telefoneValidator } from '../../../helpers/telefoneValidator'
import { passwordValidator } from '../../../helpers/passwordValidator'
import { confirmPassword } from '../../../helpers/confirmPassword'
import { emailValidator } from '../../../helpers/emailValidator'
import { nomeValidator } from '../../../helpers/nomeValidator'
import { AuthContext } from '../../../context/AuthContext'
import { Link } from 'react-router-dom'
import './RegisterPageStyles.css'

const RegisterPage = () => {
    const { register, message } = useContext(AuthContext);
    const [name, setName] = useState({ value: 'Manuel', error: '' });
    const [sobrenome, setSobrenome] = useState({ value: 'Cariongo', error: '' });
    const [email, setEmail] = useState({ value: 'MacTeste@gmail.com', error: '' });
    const [telefone, setTelefone] = useState({ value: '937524533', error: '' });
    const [password, setPassword] = useState({ value: '0000000', error: '' });
    const [confirmPw, setConfirmPw] = useState({ value: '0000000', error: '' });
    const [showMessage, setShowMessage] = useState(false);
    const [prefixNumber, setPrefixNumber] = useState('+244');
    const [userBirth, setUserBirth] = useState({ value: '2000-08-15', error: '' });
    const [morada, setMorada] = useState({ value: 'Talatona', error: '' });

    const handlePrefixNumberValue = (event) => {
        setPrefixNumber(event.target.value);
    }

    useEffect(() => {
        if (message.type === 'register error') {
            setShowMessage(true);
        }
    }, [message]);

    const formSubmit = (event) => {
        event.preventDefault();

        const nameError = nomeValidator(name.value);
        const sobrenomeError = nomeValidator(sobrenome.value);
        const emailError = emailValidator(email.value);
        const telefoneError = telefoneValidator(telefone.value);
        const passwordError = passwordValidator(password.value);
        const confirmPasswordError = confirmPassword(password.value, confirmPw.value);
        const moradaError = (!!morada.value) ? '' : 'Insira sua morada'

        if (nameError || sobrenomeError || emailError || passwordError || confirmPasswordError || moradaError) {
            setName({ ...name, error: nameError });
            setSobrenome({ ...sobrenome, error: sobrenomeError });
            setEmail({ ...email, error: emailError });
            setTelefone({ ...telefone, error: telefoneError });
            setPassword({ ...password, error: passwordError });
            setConfirmPw({ ...confirmPw, error: confirmPasswordError });
            setMorada({ ...morada, error: moradaError });

            return;
        }

        register({
            nomeCompleto: name.value + sobrenome.value, 
            email: (email.value).toLowerCase(), 
            telefone: telefone.value, 
            password: password.value,
            dataNascimento: userBirth.value,
            morada: morada.value,
            roleName: 'USER'
        });
    }

    function onValueChange(setState, event) {
        setState({ value: event.target.value, error: '' });
    }

    return (
        <div className="register-container">

            <div className="register">

                <form className="register-form">
                    <h1 className="title">Criar Conta</h1>

                    {showMessage && message.value}

                    <div className="row-name">

                        <div className="row-name-item">
                            <TextInput
                                label='Nome'
                                placeholder='Digite seu nome'
                                value={name.value}
                                name='user-name'
                                type='text'
                                onChange={event => { onValueChange(setName, event) }}
                                error={!!name.error}
                                errorText={name.error}
                            />
                        </div>

                        <div className="row-name-item">
                            <TextInput
                                label='Sobrenome'
                                placeholder='Digite seu nome sobrenome'
                                value={sobrenome.value}
                                name='user-last-name'
                                type='text'
                                onChange={event => { onValueChange(setSobrenome, event) }}
                                error={!!sobrenome.error}
                                errorText={sobrenome.error}
                            />
                        </div>

                    </div>

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

                    <div className="row-phone">
                        <div className="row-phone-left-item">
                            <Select
                                label='Prefixo'
                                placeholder='Ex: +244'
                                currentValue={prefixNumber}
                                name='user-phone'
                                values={{
                                    value1: '+244',
                                }}
                                onChange={handlePrefixNumberValue}
                            />
                        </div>
                        <div className="row-phone-right-item">
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
                        </div>
                    </div>

                    <div className='row-birth-date'>
                        <label htmlFor='date' className='birth-label'>Data de nascimento</label>
                        <input
                            type="date"
                            name="user-birthdate"
                            onChange={(event) => {
                                onValueChange(setUserBirth, event);
                            }}
                        />
                    </div>

                    <TextInput
                        label='Morada'
                        placeholder='Digite sua morada'
                        value={morada.value}
                        name='user-location'
                        onChange={event => { onValueChange(setMorada, event) }}
                        error={!!morada.error}
                        errorText={morada.error}
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