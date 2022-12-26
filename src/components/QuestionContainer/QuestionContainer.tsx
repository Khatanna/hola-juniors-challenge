import styles from "./question-container.module.css";

export const QuestionContainer = ({ children }: { children: any }) => {
  return <div className={styles.options}>{children}</div>;
};
