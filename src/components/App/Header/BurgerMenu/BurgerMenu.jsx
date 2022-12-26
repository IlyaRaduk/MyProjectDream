import style from './../BurgerMenu/BurgerMenu.module.scss'

const BurgerMenu = (props) => {
    return (
        <div className={style.menu}>
            <div className={style.menu__el}></div>
            <div className={style.menu__el}></div>
            <div className={style.menu__el}></div>
        </div>
    )
}
export default BurgerMenu;