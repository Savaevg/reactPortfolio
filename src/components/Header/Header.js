import Navbar from "./Navbar/Navbar"
import s from './Header.module.css'
import Humburger from "./Hamburger/Hamburger"
import Info from "./Info/Info"


const Header = (props) => {
    return (
        <header className={s.header}>
            <Navbar/>
            <Humburger/>
            <Info/>
        </header>
    )
}
export default Header