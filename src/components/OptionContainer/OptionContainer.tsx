import { IOption, OptionContainerProps } from '../../vite-env'
import styles from './option-container.module.css'
import { Option } from '../index.components'

export const OptionContainer = ({
  options,
  theme,
  setItemSelected,
  itemSelected,
}: OptionContainerProps) => {
  const allOptions: IOption[] = []
  for (const item in options) {
    allOptions.push({
      option: item,
      response: options[item],
    })
  }

  return (
    <div className={styles.options}>
      {allOptions.map(({ response }, index) => (
        <Option
          key={crypto.randomUUID()}
          option={(index + 1).toString()}
          response={response}
          setItemSelected={setItemSelected}
          selected={parseInt(itemSelected) === index + 1}
          theme={theme}
        />
      ))}
    </div>
  )
}
