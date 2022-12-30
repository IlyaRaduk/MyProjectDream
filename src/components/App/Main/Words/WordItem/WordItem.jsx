import style from './WordItem.module.scss';
import { NavLink } from 'react-router-dom'

const WordItem = (props) => {
    const createWordItem = (words) => {
        return words.map((el,index) => {
            return <li key={index} ><NavLink to={"/word/"+el.name}>{el.name}</NavLink ></li>
        })
    }
    return (
        <ul className={style.words}>
            {createWordItem(props.words)}
        </ul>
    )
}
export default WordItem;