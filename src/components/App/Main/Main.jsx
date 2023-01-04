import style from './Main.module.scss'
import HomePage from './HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Words from './Words/Words';
import WordProfile from './WordProfile/WordProfile';

const Main = (props) => {
    return (
        <main className={style.main}>
            <div className='container'>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/words/:letter" element={<Words/>} />
                    <Route path="/words" element={<Words/>} />
                    <Route path="/wordProfile/:word" element={<WordProfile/>} />
                </Routes>
            </div>
        </main>
    )
}
export default Main;