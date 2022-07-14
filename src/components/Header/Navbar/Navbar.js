import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Item = (props) => {
    return (
        <li className={s.item}><NavLink to={props.path}>{props.item}</NavLink></li>
    )
}

const Navbar = (props) => {
    return (
        <nav className={s.navbar}>
            <ul className={s.items}>
                <Item item='Home' path='/home' />
                <Item item='About me' path='/about' />
                <Item item='Skills' path='/skills' />
                <Item item='Portfolio' path='/portfolio' />
                <Item item='Contacts' path='/contacts' />
            </ul>
        </nav>
    )
}
export default Navbar