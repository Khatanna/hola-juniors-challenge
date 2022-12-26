import styles from './errorScreen.module.css'

export const ErrorScreen = ({ theme }: { theme: string }) => {
  const emojis = ['😥', '😲', '😳', '😱', '😭', '🤯']

  return (
    <div className={styles.container}>
      <div className={`${styles.error} ${styles[`error-${theme}`]}`}>
        Ocurrió algun un error
        {emojis[Math.floor(Math.random() * emojis.length)]}
      </div>
    </div>
  )
}
