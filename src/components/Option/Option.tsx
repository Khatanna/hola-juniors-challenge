import { OptionProps } from '../../vite-env'
import styles from './option.module.css'

export const Option = ({
  option,
  response,
  setItemSelected,
  selected,
  theme,
}: OptionProps) => {
  return (
    <div
      className={`${styles.question} ${styles[`question-${theme}`]}${
        selected ? `${styles.selected} ${styles[`selected-${theme}`]}` : ''
      }`}
      onClick={() => setItemSelected(selected ? '' : option)}
    >
      <div className={`${styles.option} ${styles[`option-${theme}`]}`}>
        {option}
      </div>
      <div className={styles.response}>{response}</div>
    </div>
  )
}
