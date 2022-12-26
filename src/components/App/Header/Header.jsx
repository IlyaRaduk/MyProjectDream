import style from './../Header/Header.module.scss'
import Logo from './Logo/Logo';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.title}>
                <Logo />
            </div>
            <div className={style.menu}>
                <BurgerMenu />
            </div>
        </header>
    )
}
export default Header;