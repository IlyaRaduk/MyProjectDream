import style from './MainSerchSection.module.scss';
import DateFieldCont from './DateField/DateFieldCont';

const MainSerchSection = (props) => {
    return (
        <section className={style.serch}>
            <DateFieldCont />
        </section>
    )
}
export default MainSerchSection;