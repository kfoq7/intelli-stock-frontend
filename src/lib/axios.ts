import axios from 'axios'

export const client = axios.create({
  baseURL: 'http://3.16.196.98:5235/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
