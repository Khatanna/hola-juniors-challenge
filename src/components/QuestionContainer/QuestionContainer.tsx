import styles from "./question-container.module.css";

export const QuestionContainer = ({
  question,
  children,
}: {
  question: string;
  children: any;
}) => {
  return (
    <div>
      {/* <div className={styles.title}>{question}</div> */}
      <div className={styles.options}>{children}</div>
    </div>
  );
};
