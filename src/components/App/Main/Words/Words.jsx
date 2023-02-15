import style from './Words.module.scss'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getWordsThunkCreator, setIsFetchingActionCreator, resetInitActionCreator } from '../../../../redux/wordsPageReducer';
import WordItem from './WordItem/WordItem';

const Words = (props) => {
    const letterFromURL = useParams().letter;
    const dispatch = useDispatch();
    const words = useSelector((state) => state.wordsPage.words);
    const letter = useSelector((state) => state.wordsPage.letter);
    const currentPage = useSelector((state) => state.wordsPage.currentPage);
    const isFetching = useSelector((state) => state.wordsPage.isFetching);
    const totalCountWords = useSelector((state) => state.wordsPage.totalCountWords);

    useEffect(() => {
        dispatch(resetInitActionCreator());
    }, [letterFromURL]);

    useEffect(() => {
        if (isFetching) {
            dispatch(getWordsThunkCreator(currentPage, letterFromURL));
        }

    }, [isFetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHendler);
        return function () {
            document.removeEventListener('scroll', scrollHendler)
        }
    }, [isFetching]);

    const scrollHendler = async (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && words.length < totalCountWords) {
            dispatch(setIsFetchingActionCreator(true));
        }
    }

    return (
        <section>
            {letter}
            <WordItem words={words} />
        </section>
    )
}
export default Words;