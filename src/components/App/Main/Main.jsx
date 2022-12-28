import style from './Main.module.scss'
import HomePage from './HomePage/HomePage';

const Main = (props) => {
    return (
        <main className={style.main}>
            <div className='container'>
                <HomePage />
            </div>
        </main>
    )
}
export default Main;