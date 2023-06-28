import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import './TextInputStyles.css'

export default function TextInput({ label, placeholder, name, error, value, errorText, isPassword, type, ...props }) {
    const [showPassword, setShowPassword] = useState(false);
    const [isSlected, setIsSelected] = useState(false);

    return (
        <div className='textInput'>
            <label htmlFor={name} className="label">{label}</label>
            <div className={`input-box ${(isSlected)? 'on-focus' : ''}`}>
                <input
                    placeholder={placeholder}
                    className="input"
                    name={name}
                    value={value}
                    onFocus={() => { setIsSelected(true) }}
                    onBlur={() => { setIsSelected(false) }}
                    type={(!isPassword)? type : (showPassword)? 'text' : 'password' }
                    {...props}
                />
                {isPassword && ((showPassword) ?
                    <AiOutlineEye
                        size={32}
                        className='icon-button'
                        onClick={() => { setShowPassword(!showPassword) }}
                    />
                    :
                    <AiOutlineEyeInvisible
                        size={32}
                        className='icon-button'
                        onClick={() => { setShowPassword(!showPassword) }}
                    />
                )}
            </div>
            {error && <div className='error-text-container'>
                <p className='error-text'>
                    {errorText}
                </p>
            </div>}
        </div>
    );
}