import { useSelector, useDispatch } from 'react-redux';
import style from './SerchSection.module.scss';
import { setKeyWordThunkCreator, toggleIsAlphabetActionCreator, toggleSubWordsActionCreator } from './../../../redux/searchReducer';
import Alphabet from './Alphabet/Alphabet';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';

const SerchSection = (props) => {

    const isAlphabet = useSelector((state) => state.search.isAlphabet);
    const keyWordInSerch = useSelector((state) => state.search.keyWordInSerch);
    const subWords = useSelector((state) => state.search.subWords);
    const isActiveSubWords = useSelector((state) => state.search.isActiveSubWords);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const myRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', clickOutSearch)
        return () => {
            document.removeEventListener('mousedown', clickOutSearch)
            dispatch(toggleSubWordsActionCreator(false))
        }
    }, [])

    const clickOutSearch = (e) => {
        if (myRef.current.contains(e.target)) {
            return
        }
        dispatch(toggleSubWordsActionCreator(false))
    }

    const clickInSearch = (e) => {
        dispatch(toggleSubWordsActionCreator(true))
    }

    const handlerChangeInput = (e) => {
        dispatch(setKeyWordThunkCreator(e.currentTarget.value))
    }

    const handlerSubmitSerch = (e) => {
        e.preventDefault();
        navigate('/words/' + keyWordInSerch);
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
            <section onClick={() => { clickInSearch() }} ref={myRef} className={style.serch} >
                <input type="text" onChange={(e) => { handlerChangeInput(e) }} value={keyWordInSerch} placeholder='Введите ключевое слово' />
                <div className={subWords ? style.subSearch : style.subSearchHidden}>
                    <ul className={isActiveSubWords ? style.isActiveSub : style.unActiveSub}>
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