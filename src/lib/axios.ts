import axios, { AxiosError } from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

interface AxiosErrorResponse {
  code?: string
}

const cookies = Cookies.get()

let isRefreshing = false
let failedRequests: any[] = []

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization: `Bearer ${cookies['userAuth.token']}`,
  },
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError<AxiosErrorResponse>) => {
    if (error.response?.status === 401) {
      if (error.response.data?.code === 'token.expired') {
        const refreshToken = Cookies.get('useAuth.refreshtoken')
        const originalConfig = error.config

        if (!isRefreshing) {
          isRefreshing = true

          api
            .post('/refresh', { refreshToken })
            .then((response) => {
              const { token } = response.data
              Cookies.set('userAuth.token', token, {
                expires: 1,
                path: '/',
              })
              Cookies.set('useAuth.refreshtoken', response.data.refreshToken, {
                expires: 1,
                path: '/',
              })
              api.defaults.headers.Authorization = `Bearer ${token}`

              failedRequests.forEach((request) => {
                request.onSuccess(token)
              })
              failedRequests = []
            })
            .catch((err) => {
              failedRequests.forEach((request) => {
                request.onFailure(err)
              })
              failedRequests = []
            })
            .finally(() => {
              isRefreshing = false
            })
        }
        return new Promise((resolve, reject) => {
          failedRequests.push({
            onSuccess: (token: string) => {
              if (!originalConfig?.headers) {
                return
              }

              originalConfig.headers.Authorization = `Bearer ${token}`

              resolve(api(originalConfig))
            },
            onFailure: (error: AxiosError) => {
              reject(error)
            },
          })
        })
      } else {
        Cookies.remove('useAuth.refreshtoken')
        Cookies.remove('userAuth.token')
      }
    }
    return Promise.reject(error)
  },
)
