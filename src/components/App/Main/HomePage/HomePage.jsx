import style from './HomePage.module.scss';
import DateFieldContainer from './DateField/DateFieldContainer';
import SerchSection from './SerchSection/SerchSection';
import YourDreamSection from './YourDreamSection/YourDreamSection';
import Prediction from './Prediction/Prediction';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setInitActionCreator } from '../../../../redux/mainPageReducer';


const HomePage = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        return ()=>{
            dispatch(setInitActionCreator())
        } 
    },[]);

    return (
        <>
            <section className={style.intro}>
                <DateFieldContainer />
                <SerchSection />
                <Prediction />
            </section>
            <section className={style.dream}>
                <YourDreamSection />
            </section>
        </>
    )
}
export default HomePage;