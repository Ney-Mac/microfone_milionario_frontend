import { useState } from 'react'
import './SelectStyles.css'
import './TextInputStyles.css'

export default function Select({ currentValue, label, placeholder, values, onChange, name, error, errorText }) {
    const [isSlected, setIsSelected] = useState(false);

    return (
        <div className="select-container">
            <label htmlFor={name} className="select-label">{label}</label>
            <label htmlFor={name} className={`select ${(isSlected)? 'on-focus' : ''}`}>
                {(currentValue) ? currentValue : placeholder}
                <select name={name} onFocus={() => { setIsSelected(true) }} onBlur={() => { setIsSelected(false) }} >
                    {Object.values(values)?.map((value, index) => (
                        <option
                            className='select-option'
                            key={index}
                            value={value}
                            onClick={onChange}
                        >
                            {value}
                        </option>
                    ))}
                </select>
            </label>
            {error && <div className='error-text-container'>
                <p className='error-text'>
                    {errorText}
                </p>
            </div>}
        </div>
    )
}