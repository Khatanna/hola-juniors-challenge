import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Dispatch, SetStateAction } from 'react'
import { IQuestion } from '../vite-env'

export const useFecthQuestions = (
  index: number,
  setAllQuestions: Dispatch<SetStateAction<IQuestion[]>>,
  setTotal: Dispatch<SetStateAction<number>>
) => {
  const { isLoading, error } = useQuery(['questions'], async () => {
    let allData
    if (index === 0 || index === 2) {
      const {
        data: { data },
      } = await axios.get('/questions')
      allData = data
    } else if (index === 1) {
      const { data } = await axios.get('/list')
      allData = data
    }
    setAllQuestions(allData.sort(() => Math.random() - 0.6))
    setTotal(allData.length)
    return allData
  })

  return [isLoading, error]
}
