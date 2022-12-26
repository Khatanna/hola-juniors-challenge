/* eslint-disable no-unused-vars */
import { IButton } from '../../vite-env'
import styles from './button.module.css'
import swal from 'sweetalert'

enum BtnState {
  active = 'btn-active',
  disable = 'btn-disable',
}

export const Button = ({ content, active, handleClick, theme }: IButton) => {
  const activeState: string = active ? BtnState.active : BtnState.disable

  const onClick = () => {
    if (activeState === BtnState.active) {
      handleClick()
    } else {
      swal('Advertencia', 'Elije una opción', 'warning')
    }
  }
  return (
    <button
      className={`${styles.btn} ${styles[activeState]} ${
        styles[`${activeState}-${theme}`]
      }`}
      onClick={onClick}
    >
      {content.toUpperCase()}
    </button>
  )
}
