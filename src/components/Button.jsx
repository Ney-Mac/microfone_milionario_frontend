import { Button as MuiButton } from '@material-ui/core'
import './ButtonStyles.css'

export default function Button({ children, variant, ...props }) {
    return (
        <button
            className={`button ${variant}`}
            {...props}
        >
            {children}
        </button>
    )
}