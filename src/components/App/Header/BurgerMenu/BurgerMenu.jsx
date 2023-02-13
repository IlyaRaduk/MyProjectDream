import style from './../BurgerMenu/BurgerMenu.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleIsBurgerMenu } from '../../../../redux/headerReducer';

const BurgerMenu = (props) => {
    const isActiveBurgerMenu = useSelector((state) => state.header.isActiveBurgerMenu);
    const dispatch = useDispatch();

    const handlerBurgerMenu = (e) => {
        dispatch(toggleIsBurgerMenu());
    }

    return (
        <>
            <div onClick={(e) => handlerBurgerMenu(e)} className={isActiveBurgerMenu ? style.menuBurger_btn_Active : style.menuBurger_btn}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div onClick={(e)=>handlerBurgerMenu(e)} className={isActiveBurgerMenu ? style.menuBurgerField_Active : style.menuBurgerField}>
                <div onClick={(e)=> e.stopPropagation()} className={style.menuBurger}>
                    <nav>
                        <ul >
                            <li><NavLink to={"/"}> На главную</NavLink ></li>
                            <li><NavLink to={"/words/"}> Все слова</NavLink ></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </>
    )
}
export default BurgerMenu;