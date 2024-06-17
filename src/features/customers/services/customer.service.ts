import { client } from '@/lib/axios'
import type { Customer } from '../types'

// const request = new Request('http://localhost:5235/api/Cliente', {
//   method: 'GET',
//   mode: 'no-cors',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })

// export const getCustomers = async () => {
//   const response = await fetch('http://localhost:5235/api/Cliente', {
//     method: 'GET',
//     mode: 'no-cors',
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json; charset=utf-8'
//     }
//   })

//   // if (!response.ok) {
//   //   // This will activate the closest `error.js` Error Boundary
//   //   throw new Error('Failed to fetch data')
//   // }

//   const sadf = response.json()
//   console.log(sadf)
// }

export const getCustomers = async (): Promise<Customer[]> => {
  return client.get('/Cliente').then(result => result.data)
}
