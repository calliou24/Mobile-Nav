
import {useState} from 'react'
import styles from './nav.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


function Nav() {

  const [menuStatus, setMenuStatus] = useState(false)

  const handdleMenu =  () => {
    setMenuStatus(!menuStatus)
  }

  return (
    <nav className={styles.nav}>
        <div className={styles.imgCont}>

        </div>
        <div className={styles.optionsCont}>
          <ul className={styles.options} id={menuStatus ? styles.menuOpen : undefined}>
            <li className={styles.item}>PRODUCT</li>
            <li className={styles.item}>FEATURES</li>
            <li className={styles.item}>PRICING</li>
            <li className={styles.itemDot}>
            
              <FontAwesomeIcon icon={faCircle}/>
            
            </li>
            <li className={styles.item}>LOGIN</li>
          </ul>
          <div onClick={handdleMenu} className={styles.hamburger}>
            <div id={styles.bar} className={menuStatus ? styles.op1 : undefined} ></div>
            <div id={styles.bar} className={menuStatus ? styles.op2 : undefined} ></div>
            <div id={styles.bar} className={menuStatus ? styles.op3 : undefined} ></div>
          </div>
        </div>
    </nav>
  )
}

export default Nav