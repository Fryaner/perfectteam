import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const isActive = ref(false)
    const isOpen = ref(false)
    const type = ref('')
    const service = ref('')

    function targetModal(__type, __service = '') {
      type.value = __type
      service.value = __service
      isOpen.value = !isOpen.value
      document.body.classList.add('active')

      if (isActive.value === true) {
        isActive.value = false
      }
    }

    function closeModal() {
      type.value = 0
      service.value = 0
      isOpen.value = false
      document.body.classList.remove('active')
    }

    function targetBurgerMenu() {
      isActive.value = !isActive.value
      document.body.classList.toggle('active')
    }

    function closeBurgerMenu() {
      isActive.value = false
      document.body.classList.remove('active')
    }
  
    return { 
      isActive,
      isOpen,
      type,
      service,
      targetModal,
      closeModal,
      targetBurgerMenu, 
      closeBurgerMenu}
  })