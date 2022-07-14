import s from './About.module.css'
const About = (props) => {
    return (
        <section className={s.about}>
            <div class={s.info}>
                <div class={s.title}>About me</div>
                <div class={s.text}>
                    <p>Hi, I'm Evgeny – frontend developer from Grodno.
                        <br /> I'm interested in frontend development and everything connected with it.
                    </p>
                    <p>
                        I'm studying at courses "The way FRONT-END"
                        <br /> in IT-OVERONE.</p>
                    <p> Ready to implement excellent projects
                        <br />with wonderful people.</p>
                </div>
            </div>
        </section>
    )
}

export default About