<template>
    <div class="container">
        <h2 class="title" ref="titleElement"><slot></slot></h2>
    </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);

    const titleElement = ref(null);

    onMounted(() => {
      gsap.from(titleElement.value,
        {
          opacity: 0,
          x: '-100%',
          duration: 1,
          scrollTrigger: {
            trigger: titleElement.value,
            start: 'top 90%',
            end: 'bottom 20%',
            toggleActions: "play none none reverse",
            markers: false
          }
        }
      );
    });

</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
}
.title {
    text-align: center;
    background-color: $color-bg-title;
    font-size: 32px;
    font-weight: 700;
    padding: 20px 60px;
    border-radius: 20px;

    @media screen and (max-width: $limit-mobile) {
        font-size: 24px;  
        padding: 20px 20px;
    }
}
</style>