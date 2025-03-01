import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const isActive = ref(false)

    function targetBurgerMenu() {
      isActive.value = !isActive.value
      document.body.classList.toggle('active')
    }

    function closeBurgerMenu() {
      isActive.value = false
      document.body.classList.remove('active')
    }
  
    return { isActive, targetBurgerMenu, closeBurgerMenu}
  })