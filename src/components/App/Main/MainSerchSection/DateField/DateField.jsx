import { useEffect } from 'react';
import { useState } from 'react';
import style from './DateField.module.scss';

const DateField = (props) => {
    const optionsForDate = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timezone: 'UTC'
    }

    let [date, setDate] = useState('');
    useEffect(() => {
        date = new Date().toLocaleString("ru", optionsForDate);
        setDate(date);
    }, [])
    return (
        <div className={style.date}>
            {date}
        </div>
    )
}
export default DateField;