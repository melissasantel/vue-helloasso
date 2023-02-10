import axios from 'axios'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 1000,
  header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
})

http.interceptors.response.use(
  (response) => {
    if (response.status < 200 || response.status > 299) {
      return Promise.reject(new Error('error'))
    }
    return response.data
  },
  (error) => {
    if (error.response) {
      console.error(error.response)
    }
    return Promise.reject(error)
  }
)

export default http
