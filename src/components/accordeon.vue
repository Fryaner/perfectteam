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
    transition: .5s;
    cursor: pointer;

    &__question {
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 500;

        img {
            rotate: (0);
            transition: .5s;
        }

        &.active img {
            rotate: (-180deg);
        }
    }

    &__answer{
        transition: .5s;
        max-height: 0;
        overflow: hidden;
        padding-top: 0;
    }

    &.active {
        background-color: $color-bg-title;
    }

    &.active &__answer{
        max-height: 30px;
        padding-top: 10px;

        @media screen and (max-width: $limit-mobile) {
            max-height: 50px;
        }
    }
}
</style>

