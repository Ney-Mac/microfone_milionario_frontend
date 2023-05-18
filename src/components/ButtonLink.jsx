import { Link } from 'react-router-dom'
import './ButtonStyles.css'

export default function ButtonLink({ children, variant, to }) {
    return (
        <Link
            className={`button ${variant}`}
            to={to}
        >
            {children}
        </Link>
    )
}