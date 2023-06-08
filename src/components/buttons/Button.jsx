import './ButtonStyles.css'

export default function Button({ children, variant, link, ...props }) {
    return (
        <button
            className={`button ${variant}`}
            {...props}
        >
            {children}
        </button>
    )
}