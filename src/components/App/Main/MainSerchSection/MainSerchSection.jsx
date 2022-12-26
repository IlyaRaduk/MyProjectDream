import style from './MainSerchSection.module.scss';
import DateField from './DateField/DateField';

const MainSerchSection = (props) => {
    return (
        <section className={style.serch}>
            <DateField />
        </section>
    )
}
export default MainSerchSection;