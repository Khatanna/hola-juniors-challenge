import styles from './theme-handler.module.css'
import { ITheme, ThemeHandleProps } from '../../vite-env'
import { Theme } from '../index.components'

// eslint-disable-next-line no-unused-vars
enum ThemeOrder {
  // eslint-disable-next-line no-unused-vars
  PRIMARY = 'primary',
  // eslint-disable-next-line no-unused-vars
  SECONDARY = 'secondary',
}

export const ThemeHandler = ({
  visible,
  handleClick,
  handleTheme,
}: ThemeHandleProps) => {
  const themes: ITheme[] = [
    { name: ThemeOrder.PRIMARY, colors: ['white', 'green', 'black'] },
    { name: ThemeOrder.SECONDARY, colors: ['black', 'orange', 'white'] },
  ]

  return (
    <div className={styles['theme-icon']} onClick={() => handleClick(!visible)}>
      🎨
      {visible && (
        <div className={styles.themes}>
          {themes.map(({ name, colors }, index) => (
            <Theme
              key={index}
              colors={colors}
              name={name}
              handleTheme={handleTheme}
            />
          ))}
        </div>
      )}
    </div>
  )
}
