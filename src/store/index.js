import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const isActive = ref(false)

    function targetBurgerMenu() {
      isActive.value = !isActive.value
      document.body.classList.toggle('active')
    }
  
    return { isActive, targetBurgerMenu }
  })