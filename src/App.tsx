import { useEffect, useState } from 'react'
import styles from './app.module.css'
import { IOptions, IQuestion } from './vite-env'
import { LoadingScreen, ErrorScreen, FinishScreen } from './pages/index.pages'
import {
  Button,
  Counter,
  OptionContainer,
  ThemeHandler,
} from './components/index.components'
import { useFecthQuestions } from './hooks/useFetchQuestions'

function App({ index }: { index: number }) {
  const [theme, setTheme] = useState<string>('')

  const [itemSelected, setItemSelected] = useState<string>('')
  const [total, setTotal] = useState<number>(0)
  const [current, setCurrent] = useState<number>(0)
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [results, setResults] = useState<number>(0)
  const [isFinish, setIsFinish] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [options, setOptions] = useState<IOptions>({})
  const [allQuestions, setAllQuestions] = useState<IQuestion[]>([])
  const [isLoading, error] = useFecthQuestions(index, setAllQuestions, setTotal)

  useEffect(() => {
    setTheme(
      window.localStorage.getItem('theme')?.replaceAll(`"`, '') || 'primary'
    )
    if (allQuestions.length > 0) {
      const { question, options, correctAnswer } = allQuestions[current]
      setQuestion(question)
      setOptions(options)
      setAnswer(correctAnswer)
    }
  }, [allQuestions, current])

  const handleResponse = () => {
    const key = Object.keys(options)[parseInt(itemSelected) - 1]

    if (key === answer) {
      setResults(results + 1)
    }
    if (current < total - 1) {
      setCurrent(current + 1)
      setItemSelected('')
    } else {
      setIsFinish(true)
    }
  }

  const handleTryToPlay = () => {
    window.location.reload()
  }

  if (isLoading) {
    return (
      <div className={`${styles.container} ${styles[`container-${theme}`]}`}>
        <LoadingScreen theme={theme} />
      </div>
    )
  }

  if (error) {
    return (
      <div className={`${styles.container} ${styles[`container-${theme}`]}`}>
        <ErrorScreen theme={theme} />
      </div>
    )
  }

  if (isFinish) {
    return (
      <div className={`${styles.container} ${styles[`container-${theme}`]}`}>
        <FinishScreen
          results={results}
          total={total}
          onClick={handleTryToPlay}
          theme={theme}
        />
      </div>
    )
  }

  return (
    <div className={`${styles.container} ${styles[`container-${theme}`]}`}>
      <div>
        <div className={`${styles.head} ${styles[`head-${theme}`]}`}>
          <Counter current={current + 1} total={total} theme={theme} />
          <ThemeHandler
            visible={visible}
            handleClick={setVisible}
            handleTheme={setTheme}
          />
        </div>
        <div className={`${styles.title} ${styles[`title-${theme}`]}`}>
          {question}
        </div>
      </div>
      <div
        className={`${styles['question-container']} ${
          styles[`question-container-${theme}`]
        }`}
      >
        <OptionContainer
          options={options}
          theme={theme}
          setItemSelected={setItemSelected}
          itemSelected={itemSelected}
        />
      </div>
      <Button
        content="Siguiente"
        active={itemSelected !== ''}
        handleClick={handleResponse}
        theme={theme}
      />
    </div>
  )
}

export default App
