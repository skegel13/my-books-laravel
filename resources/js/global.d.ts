import { AxiosStatic } from 'axios'

declare global {
  interface Window {
    _: any
    axios: AxiosStatic
  }

  function route(name: string, params?: any): any
}

declare module 'lodash'
