import './HeaderClienteStyles.css'
import ButtonLink from '../ButtonLink'
import user4 from '../../assets/users/user4.png'
import { AiOutlineCaretDown } from 'react-icons/ai'

export default function HeaderCliente({ active }) {

    return (
        <header className="dashboard-header">

            <div className='menu-logo'>
                <h1>Microfone Milionario</h1>
            </div>

            <nav className='menu-nav'>
                <ButtonLink
                    type={`link ${active === 1 ? 'active-page' : ''}`}
                    variant='sublined'
                    to='/#'
                >
                    Concursos
                </ButtonLink>

                <ButtonLink
                    type={`link ${active === 2 ? 'active-page' : ''}`}
                    variant='sublined'
                    to='/#'
                >
                    Minha Carteira
                </ButtonLink>
            </nav>

            <div className='coluna-my-profile'>
                <div className='my-profile'>
                    <img className='profile-img' src={user4} alt="user image" />
                </div>
                <AiOutlineCaretDown />
            </div>
        </header>
    )
}