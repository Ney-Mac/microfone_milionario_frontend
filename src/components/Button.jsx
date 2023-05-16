import './ButtonStyles.css'

export default function Button({ children, variant, link, ...props }) {
    return (
        <>
            {(link !== true) ?
                <button
                    className={`button ${variant}`}
                    {...props}
                >
                    {children}
                </button>
                :
                <a
                    className={`button ${variant}`}
                    {...props}
                >
                    {children}
                </a>
            }
        </>
    )
}