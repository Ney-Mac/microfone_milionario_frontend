import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonLink from "../buttons/ButtonLink";
import logoImg from '../../assets/logo/mm_logo.jpeg'
import './HeaderStyles.css';

export default function Header({ onlyCompact = true, navbar, buttons, activeIndex = 0 }) {
    const [isCompact, setIsCompact] = useState(onlyCompact);

    useEffect(() => {
        const sliderHeight = document.querySelector('.slider').offsetHeight;

        function handleScroll() {
            if (!onlyCompact) {
                if (window.pageYOffset > sliderHeight) {
                    setIsCompact(true);
                } else {
                    setIsCompact(false);
                }
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isCompact ? 'compact-header' : ''}`}>
            <Link to='/' className={`header-logo ${isCompact ? 'header-logo-fixed' : 'header-logo-no-fixed'}`}>
                <img src={logoImg} alt="Logo MM" />
            </Link>

            <nav className={`header-nav ${isCompact ? 'header-nav-fixed' : ''}`}>
                <ul className="header-navbar">

                    {navbar?.map((navItem, index) => (
                        <li key={index} className={`nav-item ${(index === activeIndex)? 'active-nav-item' : ''}`}>
                            <Link to={navItem.to} className="nav-item-link">
                                {navItem.label}
                            </Link>
                        </li>
                    ))}

                    {/*<li className="nav-item active-nav-item">
                        <Link className="nav-item-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-item-link">
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-item-link">
                            About us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-item-link">
                            Reading
                        </Link>
                    </li>*/}
                </ul>
            </nav>

            <div className="header-button-container">
                <ButtonLink
                    type="button"
                    to='/login'
                    variant='outlined'
                >
                    Entrar
                </ButtonLink>
                <ButtonLink
                    type="button"
                    to='/register'
                    variant='contained'
                >
                    Criar Conta
                </ButtonLink>
            </div>
        </header>
    );
}
