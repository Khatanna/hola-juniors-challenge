import { IButton } from "../../vite-env";
import styles from "./button.module.css";

enum BtnState {
  active = "btn-active",
  disable = "btn-disable",
}

export const Button = ({ content, active, handleClick }: IButton) => {
  const activeState: string = active ? BtnState.active : BtnState.disable;

  const onClick = () => {
    if (activeState === BtnState.active) {
      handleClick();
    } else {
      alert("elije una opción");
    }
  };
  // TODO("alertas")
  return (
    <button
      className={`${styles.btn} ${styles[activeState]}`}
      onClick={onClick}
    >
      {content.toUpperCase()}
    </button>
  );
};
