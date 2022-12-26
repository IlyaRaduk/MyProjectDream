import style from './Main.module.scss'
import MainSerchSection from './MainSerchSection/MainSerchSection';

const Main = (props) => {
    return (
        <main className={style.main}>
            <div className='container'>
                <MainSerchSection />
            </div>
        </main>
    )
}
export default Main;