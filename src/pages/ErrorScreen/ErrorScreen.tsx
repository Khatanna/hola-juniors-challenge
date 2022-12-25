import styles from "./errorScreen.module.css";

export const ErrorScreen = () => {
  const emojis = ["😥", "😲", "😳", "😱", "😭", "🤯"];

  return (
    <div className={styles.container}>
      <div className={styles.error}>
        Ocurrió algun un error
        {emojis[Math.floor(Math.random() * emojis.length)]}
      </div>
    </div>
  );
};
