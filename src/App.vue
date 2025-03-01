<script setup>
import Header from '@/components/header.vue'
import Footer from './components/footer.vue';
import { useCounterStore } from './store';
const store = useCounterStore()
</script>

<template>
  <div class="wrapper">
    <Header/>
    <RouterView/>
    <Footer/>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  overflow-x: hidden;
}
</style>
