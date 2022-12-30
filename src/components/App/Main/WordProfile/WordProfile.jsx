import style from './WordProfile.module.scss'
import { useParams } from 'react-router-dom';
import { getWordProfileThunkCreator } from '../../../../redux/wordProfilePageReducer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const WordProfile = (props) => {
    const wordWithURL = useParams().word;
    const dispatch = useDispatch();
    const wordProfile = useSelector((state) => state.wordProfilePage.wordProfile);
    useEffect(() => {
        dispatch(getWordProfileThunkCreator(wordWithURL))
    },[dispatch]);
    return (
        <section>
            <div>{wordProfile?.name}</div>
            <div>{wordProfile?.description}</div>
        </section>
    )
}
export default WordProfile;