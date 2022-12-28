import style from './HomePage.module.scss';
import DateFieldContainer from './DateField/DateFieldContainer';
import SerchSection from './SerchSection/SerchSection';

const HomePage = (props) => {
    return (
        <section className={style.homePage}>
            <DateFieldContainer />
            <SerchSection/>
        </section>
    )
}
export default HomePage;