import { IFinishProps } from '../../vite-env'
import finish from '../../assets/finish-min.svg'
import styles from './finishScreen.module.css'
import { Button } from '../../components/Button/Button'

export const FinishScreen = ({
  results,
  total,
  onClick,
  theme,
}: IFinishProps) => {
  const result = (results * 100) / total

  return (
    <div className={styles.container}>
      <img src={finish} alt="finish" />
      <div className={`${styles.score} ${styles[`score-${theme}`]}`}>
        {result.toString().includes('.') ? result.toFixed(2) : result}%
      </div>
      <div className={`${styles.finish} ${styles[`finish-${theme}`]}`}>
        Respuestas correctas
      </div>
      <Button
        content="volver a jugar"
        active={true}
        handleClick={onClick}
        theme={theme}
      />
    </div>
  )
}
