import s from './Hamburger.module.css'
const Item = (props) => {
    return (
        <li className={s.item}><a href="#navbar">{props.item}</a></li>
    )
}
const Humburger = (props) => {
    return (
        <div class={s.hamburger}>
            <input id={s.toogle} type="checkbox" />
            <label className={s.btn} for={s.toogle}>
                <span></span>
            </label>
            <ul className={s.box}>
                <Item item='Home' />
                <Item item='About me' />
                <Item item='Skills' />
                <Item item='Portfolio' />
                <Item item='Contacts' />
            </ul>
        </div>
    )
}
export default Humburger