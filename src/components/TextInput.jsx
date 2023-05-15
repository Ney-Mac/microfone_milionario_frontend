import './TextInputStyles.css'

export default function TextInput({ label, placeholder, name, ...props }) {
    return (
        <div className='textInput'>
            <label htmlFor={name} className="label">{label}</label>
            <input
                placeholder={placeholder}
                className="email-input"
                name={name}
                {...props}
            />
        </div>
    );
}