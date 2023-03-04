import axios from 'axios'
import Cookies from 'js-cookie'

const cookies = Cookies.get('userAuth.token')

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization: `Bearer ${cookies}`,
  },
})
