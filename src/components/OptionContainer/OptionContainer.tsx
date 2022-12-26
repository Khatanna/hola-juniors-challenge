import styles from './option-container.module.css'

export const OptionContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <div className={styles.options}>{children}</div>
}
