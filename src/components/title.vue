<template>
    <div class="container">
        <h2 class="title"><slot></slot></h2>
    </div>
</template>

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