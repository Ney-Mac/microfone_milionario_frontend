import { Link } from 'react-router-dom'
import './ButtonStyles.css'

export default function ButtonLink({ children, type = 'button', variant, to, ...props }) {
    return (
        <Link
            className={`${type} ${variant}`}
            to={to}
            {...props}
        >
            {children}
        </Link>
    )
}