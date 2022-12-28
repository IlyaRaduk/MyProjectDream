import style from './Alphabet.module.scss';
import { NavLink } from 'react-router-dom'

const Alphabet = (props) => {
    return (
        <div>
            <NavLink to={"/keyWord/" + 'А'}> А</NavLink >
            <NavLink to={"/keyWord/" + 'Б'}> Б</NavLink >
            <NavLink to={"/keyWord/" + 'В'}> В</NavLink >
            <NavLink to={"/keyWord/" + 'Г'}> Г</NavLink >
            <NavLink to={"/keyWord/" + 'Д'}> Д</NavLink >
            <NavLink to={"/keyWord/" + 'Е'}> Е</NavLink >
            <NavLink to={"/keyWord/" + 'Ё'}> Ё</NavLink >
            <NavLink to={"/keyWord/" + 'Ж'}> Ж</NavLink >
            <NavLink to={"/keyWord/" + 'З'}> З</NavLink >
            <NavLink to={"/keyWord/" + 'И'}> И</NavLink >
            <NavLink to={"/keyWord/" + 'Й'}> Й</NavLink >
            <NavLink to={"/keyWord/" + 'К'}> К</NavLink >
            <NavLink to={"/keyWord/" + 'Л'}> Л</NavLink >
            <NavLink to={"/keyWord/" + 'М'}> М</NavLink >
            <NavLink to={"/keyWord/" + 'Н'}> Н</NavLink >
            <NavLink to={"/keyWord/" + 'О'}> О</NavLink >
            <NavLink to={"/keyWord/" + 'П'}> П</NavLink >
            <NavLink to={"/keyWord/" + 'Р'}> Р</NavLink >
            <NavLink to={"/keyWord/" + 'С'}> С</NavLink >
            <NavLink to={"/keyWord/" + 'Т'}> Т</NavLink >
            <NavLink to={"/keyWord/" + 'У'}> У</NavLink >
            <NavLink to={"/keyWord/" + 'Ф'}> Ф</NavLink >
            <NavLink to={"/keyWord/" + 'Х'}> Х</NavLink >
            <NavLink to={"/keyWord/" + 'Ц'}> Ц</NavLink >
            <NavLink to={"/keyWord/" + 'Ч'}> Ч</NavLink >
            <NavLink to={"/keyWord/" + 'Ш'}> Ш</NavLink >
            <NavLink to={"/keyWord/" + 'Щ'}> Щ</NavLink >
            <NavLink to={"/keyWord/" + 'Э'}> Э</NavLink >
            <NavLink to={"/keyWord/" + 'Ю'}> Ю</NavLink >
            <NavLink to={"/keyWord/" + 'Я'}> Я</NavLink >
        </div>
    )
}
export default Alphabet;