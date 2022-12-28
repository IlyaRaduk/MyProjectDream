import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './SerchSection.module.scss';
import { setKeyWordActionCreator, toggleIsAlphabetActionCreator } from '../../../../../redux/mainPageReducer';
import Alphabet from './Alphabet/Alphabet';


const SerchSection = (props) => {
    const [inputText, setInputText] = useState('');

    const isAlphabet = useSelector((state) => state.homePage.isAlphabet);
    const dispatch = useDispatch();


    const handlerChangeInput = (e) => {
        setInputText(e.currentTarget.value)
    }

    const handlerSubmitSerch = (e) => {
        e.preventDefault();
        dispatch(setKeyWordActionCreator(inputText));
    }

    const handlerSubmitAlphabet = (e) => {
        e.preventDefault();
        dispatch(toggleIsAlphabetActionCreator());
    }

    return (
        <div>
            <section className={style.serch}>
                <input type="text" onChange={(e) => { handlerChangeInput(e) }} value={inputText} placeholder='Введите ключевое слово' />
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