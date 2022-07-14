import s from './Skillls.module.css'
import htmlImg from '../../Img/vector/1.png'
import cssImg from '../../Img/vector/2.png'
import jsImg from '../../Img/vector/3.png'
import reactImg from '../../Img/vector/4.png'

const Skill = (props) => {
    return (
        <div className={s.name}>
                        <div className={s.img}>
                            <img src={props.img} alt={props.name} />
                        </div>
                        <div className={s.text}>
                            <span>{props.name}</span>
                        </div>
                    </div>
    )
}
const Skills = (props) => {
    return (
        <section className = {s.skills} id={s.skills}>
                <div className={s.header}>
                    <div className={s.title}>Skills</div>
                </div>
                <div className={s.items}>
                  <Skill img = {htmlImg} name="HTML"/>
                  <Skill img = {cssImg} name="CSS"/>
                  <Skill img = {jsImg} name="JavaScript"/>
                  <Skill img = {reactImg} name="REACT"/>


                </div>

        </section>
    )
}

export default Skills