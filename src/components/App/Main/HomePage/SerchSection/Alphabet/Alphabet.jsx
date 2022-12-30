import style from './Alphabet.module.scss';
import { NavLink } from 'react-router-dom'

const Alphabet = (props) => {
    return (
        <div>
            <NavLink to={"/words/" + 'А'}> А</NavLink >
            <NavLink to={"/words/" + 'Б'}> Б</NavLink >
            <NavLink to={"/words/" + 'В'}> В</NavLink >
            <NavLink to={"/words/" + 'Г'}> Г</NavLink >
            <NavLink to={"/words/" + 'Д'}> Д</NavLink >
            <NavLink to={"/words/" + 'Е'}> Е</NavLink >
            <NavLink to={"/words/" + 'Ё'}> Ё</NavLink >
            <NavLink to={"/words/" + 'Ж'}> Ж</NavLink >
            <NavLink to={"/words/" + 'З'}> З</NavLink >
            <NavLink to={"/words/" + 'И'}> И</NavLink >
            <NavLink to={"/words/" + 'Й'}> Й</NavLink >
            <NavLink to={"/words/" + 'К'}> К</NavLink >
            <NavLink to={"/words/" + 'Л'}> Л</NavLink >
            <NavLink to={"/words/" + 'М'}> М</NavLink >
            <NavLink to={"/words/" + 'Н'}> Н</NavLink >
            <NavLink to={"/words/" + 'О'}> О</NavLink >
            <NavLink to={"/words/" + 'П'}> П</NavLink >
            <NavLink to={"/words/" + 'Р'}> Р</NavLink >
            <NavLink to={"/words/" + 'С'}> С</NavLink >
            <NavLink to={"/words/" + 'Т'}> Т</NavLink >
            <NavLink to={"/words/" + 'У'}> У</NavLink >
            <NavLink to={"/words/" + 'Ф'}> Ф</NavLink >
            <NavLink to={"/words/" + 'Х'}> Х</NavLink >
            <NavLink to={"/words/" + 'Ц'}> Ц</NavLink >
            <NavLink to={"/words/" + 'Ч'}> Ч</NavLink >
            <NavLink to={"/words/" + 'Ш'}> Ш</NavLink >
            <NavLink to={"/words/" + 'Щ'}> Щ</NavLink >
            <NavLink to={"/words/" + 'Э'}> Э</NavLink >
            <NavLink to={"/words/" + 'Ю'}> Ю</NavLink >
            <NavLink to={"/words/" + 'Я'}> Я</NavLink >
        </div>
    )
}
export default Alphabet;