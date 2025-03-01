<script setup>
import Header from '@/components/header.vue'
import Footer from './components/footer.vue';
import Main from './pages/main.vue';
import { onMounted } from 'vue';

if (window.location.hash) {
    history.replaceState({}, document.title, window.location.pathname + window.location.search);
  }

function scrollTop() {
  window.scrollTo(0, 0)
}
</script>

<template>
  <div class="wrapper">
    <button @click="scrollTop" class="scroll"><ArrowTop/></button>
    <Header/>
    <main class="main">
      <Main/>
    </main>
    <Footer/>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  overflow-x: hidden;
}
.scroll {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 10;
  cursor: pointer;

  @media screen and (max-width: $limit-mobile){
    bottom: 15px;
    right: 15px;   
  }

  svg {
      transition: .5s;
      fill: $color-black;
      stroke: $color-white;
    }

  @media (hover:hover) {
    &:hover {
    svg {
      fill: $color-white;
      stroke: $color-black;
    }
  }
  }
}
</style>
