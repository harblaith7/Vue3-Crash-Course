
import {defineStore} from "pinia"

export const useAgesStore = defineStore('ages', {
    state: () => ({ 
        ages: [14, 15, 16, 21, 22, 13, 19, 27, 25]
     }),
    getters: {
      filterAges: (state) => {
        return (minAge) => state.ages.filter(age => age >= minAge)
      }
    },
    actions: {
        addAge(state) {
            console.log(state)
            this.ages = [...this.ages, 20]
        }
    }
  })