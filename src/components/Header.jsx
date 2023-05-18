import { Link } from 'react-router-dom'
import './HeaderStyles.css'
import Button from './Button'
import ButtonLink from './ButtonLink'

export default function Header() {

    return (
        <header className='header'>

            <div className='coluna-logo'>
                <h1>Microfone Milionario</h1>
            </div>

            <nav className='nav-menu'>

            </nav>

            <div className='coluna-botao'>
                
                <ButtonLink 
                    variant='outlined'
                    to='/login'
                >
                    Entrar
                </ButtonLink>

                <ButtonLink 
                    variant='contained'
                    to='/register'
                >
                    Criar Conta
                </ButtonLink>

            </div>

        </header>
    )
}