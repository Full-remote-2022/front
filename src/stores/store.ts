import { defineStore } from 'pinia'
import { Answer } from '@/ts/types'

// useStore could be anything like useUser, useCart 
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
    state: () => {
        return {
            responses: [] as Answer[],
        }
      },
      actions: {
        addResponse(answer: Answer) {
          this.responses.push(answer)
        },
        resetResponses() {
          this.responses = []
        }

      },
})