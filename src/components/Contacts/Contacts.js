import s from './Contacts.module.css'
import img1 from '../../Img/Contacts/1.png'
import img2 from '../../Img/Contacts/2.png'
import img3 from '../../Img/Contacts/3.png'
import img4 from '../../Img/Contacts/4.png'
const Contact = (props) => {
    return (
        <a href={props.href} target="_blank" rel="noreferrer"><img src={props.img} alt={props.alt} /></a>
    )
}
const Contacts = (props) => {
    return (
        <section className={s.contacts}>

            <div class={s.cont}>
                <div class={s.title}>Contacts</div>
                <div class={s.text}>+375(33) 621-49-26</div>
                <div class={s.img}>
                    <Contact href='http://linkedin.com/in/evgeny-savaniaka-102221205' img={img1} alt='linkedin' />
                    <Contact href='http://t.me/sava0923' img={img2} alt='telegram' />
                    <Contact href='https://github.com/Savaevg' img={img3} alt='GitHub' />
                    <Contact href='mailto:savaevg0923@gmail.com' img={img4} alt='Gmail' />
                </div>
            </div>
        </section>)
}

export default Contacts