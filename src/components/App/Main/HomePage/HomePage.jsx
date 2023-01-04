import style from './HomePage.module.scss';
import DateFieldContainer from './DateField/DateFieldContainer';
import SerchSection from './SerchSection/SerchSection';
import YourDreamSection from './YourDreamSection/YourDreamSection';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

const HomePage = (props) => {
    const letter = useSelector((state) => state.homePage.keyWordInSerch);
    if (letter) {
        return <Navigate to={"/words/" + letter} />
    }

    return (
        <>
            <section className={style.intro}>
                <DateFieldContainer />
                <SerchSection />
            </section>
            <section className={style.dream}>
                <YourDreamSection />
            </section>
        </>
    )
}
export default HomePage;