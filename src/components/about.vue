<template>
    <p>{{ store.count }}</p>
</template>

<script setup>
import { useCounterStore } from '@/store/index'
const store = useCounterStore()


</script>