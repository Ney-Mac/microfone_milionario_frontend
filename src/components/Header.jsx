import './HeaderStyles.css'
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
                <Button
                    variant="outlined"
                    type='button'
                >
                    Entrar
                </Button>
                <Button
                    variant="contained"
                    type='button'
                >
                    Criar Conta
                </Button>
            </div>

        </header>
    )
}