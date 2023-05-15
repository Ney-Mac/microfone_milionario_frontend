import { useEffect, useState } from 'react'
import './CheckboxStyles.css'

export default function Checkbox({ value, ...props }) {
    const [isChecked, setIsChecked] = useState(value);

    useEffect(() => {
        setIsChecked(value);
    }, [value]);

    return (
        <label className="check-container">
            <input type="checkbox" checked={(value)? 'checked' : '' } {...props} />
            <span className="check-marker" ></span>
        </label>
    )
}