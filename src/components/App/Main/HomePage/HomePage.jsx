import style from './HomePage.module.scss';
import DateFieldContainer from './DateField/DateFieldContainer';
import SerchSection from './SerchSection/SerchSection';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

const HomePage = (props) => {
    const keyWordInSerch = useSelector((state) => state.homePage.keyWordInSerch);
    if(keyWordInSerch){
        return <Navigate to={"/word/"+keyWordInSerch} />
    }

    return (
        <>
            <section className={style.homePage}>
                <DateFieldContainer />
                <SerchSection /> 
            </section>
        </>
    )
}
export default HomePage;