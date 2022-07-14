import s from './Portfolio.module.css'
import img1 from '../../Img/Portfolio/port1.png'
import img2 from '../../Img/Portfolio/port2.png'
import img3 from '../../Img/Portfolio/port3.png'

const Info = (props) => {
    return (
        <div class={s.info}>
            <div class={s.img}>
                <img src={props.img} alt="" />
            </div>
            <div class={s.git}>
                <a href={props.git} target="_blank" rel="noreferrer">{props.nameGit}</a>
            </div>
        </div>
    )
}

const Portfolio = (props) => {
    return (<section className={s.portfolios} id={s.portfolios}>
        <div class={s.portfolio}>
            <div class={s.header}>Portfolio</div>
            <Info img={img1} git="https://github.com/Savaevg/BANK.git" nameGit="BANK.git"/>
            <Info img={img2} git="https://github.com/Savaevg/BMI.git" nameGit="BMI.git" />
            <Info img={img3} git="https://github.com/Savaevg/FIGMA.git" nameGit="FIGMA.git" />
            <div className={s.all}><h3><a href="https://github.com/Savaevg">GITHUB</a></h3></div>

        </div>

    </section>)
}
export default Portfolio

