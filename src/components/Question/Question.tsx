import { QuestionProps } from "../../vite-env";
import styles from "./question.module.css";

export const Question = ({
  option,
  response,
  setItemSelected,
  selected,
}: QuestionProps) => {
  return (
    <div
      className={`${styles.question} ${selected ? styles.selected : ""}`}
      onClick={() => setItemSelected(selected ? "" : option)}
    >
      <div className={styles.option}>{option}</div>
      <div className={styles.response}>{response}</div>
    </div>
  );
};
