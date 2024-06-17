export interface Customer {
  clientId: string
  dni: string
  ruc: string
  nombres: string
  telefono: string
  email: string
  direccion: string
  fecharegistro: string
  ventalista: null | any // Replace `any` with the appropriate type if you know what type `ventalista` should be.
}
