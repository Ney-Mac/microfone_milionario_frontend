import { useEffect } from 'react'
import './SelectStyles.css'
import './TextInputStyles.css'

export default function Select({ currentValue, label, placeholder, values, onChange, name, error, errorText }) {
    return (
        <div className="select-container">
            <label htmlFor={name} className="label-prefix-number">{label}</label>
            <label htmlFor={name} className="select-prefix-number">
                {(currentValue)? currentValue : placeholder}
                <select name={name}>
                    {Object.values(values)?.map((value, index) => (
                        <option key={index} value={value} onClick={onChange}>{value}</option>
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