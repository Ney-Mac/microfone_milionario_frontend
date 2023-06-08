import { Link } from 'react-router-dom'
import './HeaderStartStyles.css'
import ButtonLink from '../buttons/ButtonLink'
import logoImg from '../../assets/logo/mm_logo.jpeg'

export default function HeaderStart() {

    return (
        <header className='header'>

            <Link className='coluna-logo' to='/'>
                <img src={logoImg} alt="microfone milionario" className="start-menu-logo" />
            </Link>

            <nav className='nav-menu'>

            </nav>

            <div className='coluna-botao'>
                
                <ButtonLink
                    type='button' 
                    variant='outlined'
                    to='/login'
                >
                    Entrar
                </ButtonLink>

                <ButtonLink
                    type='button' 
                    variant='contained'
                    to='/register'
                >
                    Criar Conta
                </ButtonLink>

            </div>

        </header>
    )
}