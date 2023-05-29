import './TextInputStyles.css'

export default function TextInput({ label, placeholder, name, error, errorText, ...props }) {
    return (
        <div className='textInput'>
            <label htmlFor={name} className="label">{label}</label>
            <input
                placeholder={placeholder}
                className="email-input"
                name={name}
                {...props}
            />
            {error && <div className='error-text-container'>
                <p className='error-text'>
                    {errorText}
                </p>
            </div>}
        </div>
    );
}