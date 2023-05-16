import { Link } from 'react-router-dom'
import './HeaderStyles.css'
import './ButtonStyles.css'
import Button from './Button'

export default function Header() {

    return (
        <header className='header'>

            <div className='coluna-logo'>
                <h1>Microfone Milionario</h1>
            </div>

            <nav className='nav-menu'>

            </nav>

            <div className='coluna-botao'>
                <Link
                    className='button outlined'
                    to='/login'
                >
                    Entrar
                </Link>
                <Link
                    className='button contained'
                    to='/register'
                >
                    Criar Conta
                </Link>

            </div>

        </header>
    )
}