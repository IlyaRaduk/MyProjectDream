import style from './DateField.module.scss';

const DateField = (props) => {
    return (
        <div className={style.date}>
            {props.date}
        </div>
    )
}
export default DateField;