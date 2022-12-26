import { useEffect, useState } from "react";
import { Button } from "./components/Button/Button";
import styles from "./app.module.css";
import { Counter } from "./components/Counter/Counter";
import { QuestionContainer } from "./components/QuestionContainer/QuestionContainer";
import { Question } from "./components/Question/Question";
import { IOption, IOptions } from "./vite-env";
import { useQuery } from "react-query";
import axios from "axios";
import { LoadingScreen } from "./pages/LoadingScreen/LoadingScreen";
import { ErrorScreen } from "./pages/ErrorScreen/ErrorScreen";
import { FinishScreen } from "./pages/FinishScreen/FinishScreen";

function App() {
  const [itemSelected, setItemSelected] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [results, setResults] = useState<number>(0);
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const [options, setOptions] = useState<IOptions>({
    a: "",
    b: "",
    c: "",
  });
  const questions: IOption[] = [];
  const { isLoading, error, data } = useQuery("questions", async () => {
    const {
      data: { data },
    } = await axios.get("/questions");
    return data;
  });

  useEffect(() => {
    if (data) {
      setTotal(data.length);
      setQuestion(data[current].question);
      setOptions(data[current].options);
      setAnswer(data[current].correctAnswer);
    }
  }, [data, current]);

  const handleQuestion = () => {
    const key = Object.keys(options)[parseInt(itemSelected) - 1];

    if (key === answer) {
      setResults(results + 1);
    }
    if (current < total - 1) {
      setCurrent(current + 1);
      setItemSelected("");
    } else {
      setIsFinish(true);
    }
  };

  const handleTryToPlay = () => {
    setResults(0);
    setCurrent(0);
    setItemSelected("");
    setIsFinish(false);
  };

  for (let item in options) {
    questions.push({
      option: item,
      response: options[item],
    });
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <LoadingScreen />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <ErrorScreen />
      </div>
    );
  }

  if (isFinish) {
    return (
      <div className={styles.container}>
        <FinishScreen
          results={results}
          total={total}
          onClick={handleTryToPlay}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Counter current={current + 1} total={total} />
        <div className={styles.title}>{question}</div>
      </div>
      <div className={styles["question-container"]}>
        <QuestionContainer>
          {questions.map((item, index) => (
            <Question
              key={index}
              option={(index + 1).toString()}
              response={item.response}
              setItemSelected={setItemSelected}
              selected={parseInt(itemSelected) === index + 1}
            />
          ))}
        </QuestionContainer>
      </div>
      <Button
        content="Siguiente"
        active={itemSelected != ""}
        handleClick={handleQuestion}
      />
    </div>
  );
}

export default App;
