import style from './Words.module.scss'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getWordsThunkCreator } from '../../../../redux/wordsPageReducer';
import WordItem from './WordItem/WordItem';

const Words = (props) => {
    const letterFromURL = useParams().letter;
    const dispatch = useDispatch();
    const words = useSelector((state) => state.wordsPage.words);
    const letter = useSelector((state) => state.wordsPage.letter);
    useEffect(() => {
        dispatch(getWordsThunkCreator(letterFromURL));
    },[letterFromURL]);

    return (
        <section>
            {letter}
            <WordItem words={words} />
        </section>
    )
}
export default Words;