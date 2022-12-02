import { defineStore } from 'pinia'
import { Answer } from '@/ts/types'

// useStore could be anything like useUser, useCart 
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
    state: () => {
        return {
          //load from local storage
          token: localStorage.getItem('token') ||'',
          //get from .env
          apiURL:"",
        }
      },
      actions: {
        setToken(token: string) {
          this.token = token
          //update local storage
          localStorage.setItem('token', token)

        },

        isConnected() {
          return this.token !== ''
        },
        Disconect() {
          this.token = ''
          localStorage.removeItem('token')
        }

      },
})