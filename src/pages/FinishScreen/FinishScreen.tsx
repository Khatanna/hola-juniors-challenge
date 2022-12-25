import { IFinishProps } from "../../vite-env";
import finish from "../../assets/finish.svg";
import styles from "./finishScreen.module.css";
import { Button } from "../../components/Button/Button";

export const FinishScreen = ({ results, total, onClick }: IFinishProps) => {
  return (
    <div className={styles.container}>
      <img src={finish} alt="finish" />
      <div className={styles.score}>{(results * 100) / total}%</div>
      <div className={styles.finish}>Respuestas correctas</div>
      <Button content="volver a jugar" active={true} handleClick={onClick} />
    </div>
  );
};
