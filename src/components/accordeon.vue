<template>
    <div @click="changeAccordeon" class="accordeon" :class="{active: isActive}">
        <p class="accordeon__question" :class="{active: isActive}"><slot name="question"></slot><img src="@/assets/icons/chevron.svg" alt=""/></p>
        <p class="accordeon__answer"><slot name="answer"></slot></p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(false)

function changeAccordeon() {
    isActive.value = !isActive.value
}
</script>

<style lang="scss" scoped>
.accordeon {
    padding: 12px 16px;
    border: 1px solid $color-btn;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    &__question {
        font-size: 20px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__answer{
        transition: .5s;
        max-height: 0;
        overflow: hidden;
    }

    &.active &__answer{
        max-height: 500px;
    }
}
</style>

