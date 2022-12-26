import { IThemeProps } from '../../vite-env'
import styles from './theme.module.css'

export const Theme = ({ name, colors, handleTheme }: IThemeProps) => {
  const setTheme = () => {
    handleTheme(name)
    window.localStorage.setItem('theme', JSON.stringify(name))
  }

  return (
    <div className={styles['theme-item']} onClick={setTheme}>
      {colors.map((color, index) => (
        <span
          key={index}
          className={`${styles.square} ${styles[color]}`}
        ></span>
      ))}
    </div>
  )
}
