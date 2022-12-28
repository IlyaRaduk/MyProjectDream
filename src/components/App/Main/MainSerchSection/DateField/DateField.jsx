import style from './DateField.module.scss';
import img1 from './../../../../../img/Молодая луна.jpg'
import img2 from './../../../../../img/Новолуние.jpg'
import img3 from './../../../../../img/Первая четверть.jpg'
import img4 from './../../../../../img/Полнолуние.jpg'
import img5 from './../../../../../img/Последняя четверть.jpg'
import img6 from './../../../../../img/Прибывающая луна.jpg'
import img7 from './../../../../../img/Старая луна.jpg'
import img8 from './../../../../../img/Убывающая луна.jpg'


const DateField = (props) => {
    let imgMoon = null;
    switch (props.moonPhase) {
        case 'Полнолуние':
            imgMoon = img4;
            break;
        case 'Молодая луна':
            imgMoon = img1;
            break;
        case 'Новолуние':
            imgMoon = img2;
            break;

        case 'Первая четверть':
            imgMoon = img3;
            break;

        case 'Последняя четверть':
            imgMoon = img5;
            break;

        case 'Прибывающая луна':
            imgMoon = img6;
            break;

        case 'Старая луна':
            imgMoon = img7;
            break;
        case 'Убывающая луна':
            imgMoon = img8;
            break;

        default:
            break;
    }
    return (
        <div className={style.date}>
            {props.date}
            <div>
                <img src={imgMoon} alt="Moon" />
            </div>
        </div>
    )
}
export default DateField;