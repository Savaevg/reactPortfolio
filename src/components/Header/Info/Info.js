import img from './../../../Img/wp9641838-front-end-developer-wallpapers.jpg'
import s from './Info.module.css'

const Info = (props) => {
    return (
        <div className={s.info}>
                <div className={s.text}>
                    <div className={s.name}>Evgeny <span>Savaniaka</span></div>
                    <div className={s.dev}>Frontend Developer<span>25 years old, Grodno</span></div>
                    <div class={s.lang}><span>RU | ENG</span></div>
                </div>
                <div className={s.img}>
                    <img src={img} alt="#" />
                </div>
            </div>
    )
}
export default Info