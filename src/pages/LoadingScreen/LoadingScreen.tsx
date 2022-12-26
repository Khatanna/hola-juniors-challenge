import search from '../../assets/search-min.svg'
import styles from './loadingScreen.module.css'

export const LoadingScreen = ({ theme }: { theme: string }) => {
  const emojis = ['😋', '🙃', '🧐', '🤓', '🔍', '🔎']

  return (
    <div className={styles.container}>
      <img src={search} alt="search" />
      <div className={`${styles.search} ${styles[`search-${theme}`]}`}>
        Buscando preguntas...{' '}
        {emojis[Math.floor(Math.random() * emojis.length)]}
      </div>
    </div>
  )
}
