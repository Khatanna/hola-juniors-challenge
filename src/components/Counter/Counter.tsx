import { ICounter } from "../../vite-env";
import styles from "./counter.module.css";

export const Counter = ({ current, total }: ICounter) => {
  return (
    <div className={styles.counter}>
      {current} / {total}
    </div>
  );
};
