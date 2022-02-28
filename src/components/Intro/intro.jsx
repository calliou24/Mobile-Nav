import styles from './intro.module.css'
import illustration from './../../assets/images/illustration-devices.svg'

const ButtonPreview = () => {
    return (
        <span className={styles.buttonCont}>
            <button className={styles.button}>SCHEDULE A DEMO</button>
            <p className={styles.previewTest}>TO SEE A PREVIEW</p>
        </span>
        
    )
}

function Intro() {
  return (
    <article className={styles.intro}>
        <div className={styles.infoCont}>
            <div className={styles.leyend}>
                 <span className={styles.leyendNew}>NEW</span>
                 MONOGRAPH DASHBOARD
            </div>
            <h1 className={styles.title}>POWERFUL INSIGHTS INTO YOUR TEAM</h1>
            <p className={styles.contentInfo}>
                Project planning and 
                time tracking<br></br>for agile teams. 
            </p>
            <ButtonPreview/>
        </div>
        <div className={styles.illustrationCont}>
            <img className={styles.illustration} src={illustration} alt='illustration'></img>
        </div>
    </article>
  )
}

export default Intro