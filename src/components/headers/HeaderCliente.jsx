import './HeaderClienteStyles.css'
import ButtonLink from '../buttons/ButtonLink'
import user4 from '../../assets/users/user4.png'
import { GoChevronDown } from 'react-icons/go'
import logoImg from '../../assets/logo/mm_logo.jpeg'
import { Link } from 'react-router-dom'

export default function HeaderCliente({ navbar, enableMyProfileCol = true }) {

    return (
        <header className="dashboard-header">

            <Link className='menu-logo' to='/cliente' >
                <img src={logoImg} alt="microfone milionario" className="cli-header-logo" />
            </Link>

            <nav className='menu-nav'>
                {navbar?.map(item => (
                    <ButtonLink
                        type={`${item.type} ${item.isActive ? 'active-page' : ''}`}
                        variant={item.variant}
                        to={item.to}
                        key={item.key}
                    >
                        {item.label}
                    </ButtonLink>
                ))}
            </nav>

            {enableMyProfileCol &&

                <div className='coluna-my-profile'>
                    <div className='my-profile'>
                        <img className='profile-img' src={user4} alt="user image" />
                    </div>
                    <GoChevronDown className='chev-down-icon' />
                </div>
            }

        </header>
    )
}