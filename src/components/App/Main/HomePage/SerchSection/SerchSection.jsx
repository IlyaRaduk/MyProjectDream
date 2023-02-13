import { useSelector, useDispatch } from 'react-redux';
import style from './SerchSection.module.scss';
import { setKeyWordThunkCreator, toggleIsAlphabetActionCreator } from '../../../../../redux/mainPageReducer';
import Alphabet from './Alphabet/Alphabet';
import { NavLink, useNavigate } from 'react-router-dom';

const SerchSection = (props) => {

    const isAlphabet = useSelector((state) => state.homePage.isAlphabet);
    const keyWordInSerch = useSelector((state) => state.homePage.keyWordInSerch);
    const subWords = useSelector((state) => state.homePage.subWords);

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const handlerChangeInput = (e) => {
        dispatch(setKeyWordThunkCreator(e.currentTarget.value))
    }

    const handlerSubmitSerch = (e) => {
        e.preventDefault();
        navigate('/words/' + keyWordInSerch );
    }

    const handlerSubmitAlphabet = (e) => {
        e.preventDefault();
        dispatch(toggleIsAlphabetActionCreator());
    }

    const createWordsItem = (subWords) => {
        return subWords.map((el, index) => {
            return <li key={index} ><NavLink to={"/wordProfile/" + el.name}>{el.name}</NavLink ></li>
        })
    }

    return (
        <div>
            <section className={style.serch}>
                <input type="text" onChange={(e) => { handlerChangeInput(e) }} value={keyWordInSerch} placeholder='Введите ключевое слово' />
                <div className={subWords ? style.subSearch : style.subSearchHidden}>
                    <ul>
                        {subWords ? createWordsItem(subWords) : null}
                    </ul>
                </div>
                <button onClick={(e) => { handlerSubmitAlphabet(e) }}>А</button>
                <button onClick={(e) => { handlerSubmitSerch(e) }}>Поиск</button>
            </section>
            <div>
                {isAlphabet ? <Alphabet /> : null}
            </div>
        </div>
    )
}
export default SerchSection;