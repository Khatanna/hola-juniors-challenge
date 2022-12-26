import { ICounter } from '../../vite-env'
import styles from './counter.module.css'

export const Counter = ({ current, total, theme }: ICounter) => {
  return (
    <div className={`${styles.counter} ${styles[`counter-${theme}`]}`}>
      {current} / {total}
    </div>
  )
}
