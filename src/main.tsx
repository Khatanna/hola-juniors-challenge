import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import axios from 'axios'

const VITE_API = import.meta.env.VITE_API
const urls = VITE_API.split('|')
const index = Math.floor(Math.random() * urls.length)

// ;(async () => {
//   const { data } = await axios.get(
//     'http://www.questionapi.somee.com/api/Question',
//     {
//       withCredentials: true,
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//       },
//     }
//   )
//   console.log(data)
// })()

axios.defaults.baseURL = urls[index]

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App index={index} />
    </QueryClientProvider>
  </React.StrictMode>
)
