import { Link } from 'react-router-dom'
import './ButtonStyles.css'

export default function ButtonLink({ children, type, variant, to, ...props }) {
    return (
        <Link
            className={`${type? type: 'button'} ${variant}`}
            to={to}
            {...props}
        >
            {children}
        </Link>
    )
}