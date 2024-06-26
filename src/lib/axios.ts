import axios from 'axios'

export const client = axios.create({
  baseURL: 'http://localhost:5235/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
