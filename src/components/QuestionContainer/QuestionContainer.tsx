import styles from './question-container.module.css'

export const QuestionContainer = ({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}) => {
  return <div className={styles.options}>{children}</div>
}
