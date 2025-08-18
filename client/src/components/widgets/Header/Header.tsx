import { type JSX } from 'react'
import styles from './Header.module.css'
import logoImage from '../../../components/widgets/Header/Vector (1).svg'
import logoIm from '../../../components/widgets/Header/Vector (2).svg'
import Research from '../../features/Reserch/Research'

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImage} alt="Logo" className={styles.logoImg} />
        <img src={logoIm} alt="Logo" className={styles.logoIm} />
        
      </div>

      <nav className={styles.nav}>
        <a href="#">Главная</a>
        <a href="#"><Research/></a>
      </nav>
    </header>
  )
}