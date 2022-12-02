import { defineStore } from 'pinia'
import { Answer } from '@/ts/types'

// useStore could be anything like useUser, useCart 
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
    state: () => {
        return {
            token: '',
        }
      },
      actions: {
        setToken(token: string) {
          this.token = token
        },

        isConnected() {
          return this.token !== ''
        },
        Disconect() {
          this.token = ''
        }

      },
})