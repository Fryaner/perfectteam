<template>
    <section class="services" id="services">
        <Title>КОМПЛЕКСНЫЕ РЕШЕНИЯ ДЛЯ ВАШЕГО БИЗНЕСА</Title>
        <div class="services__items">
            <div class="services__item">
                <div class="services__main">
                    <div class="services__icon">
                        <img src="@/assets/icons/search.svg" alt=""/>
                    </div>
                    <h3 class="services__title" >Подбор квалифицированного и рабочего персонала по России и СНГ</h3>
                    <ul class="services__list">
                        <li class="services__description"><img src="@/assets/icons/check.svg" alt=""/>Обзоры заработных плат.</li>
                        <li class="services__description"><img src="@/assets/icons/check.svg" alt=""/>Executive search.</li>
                        <li class="services__description"><img src="@/assets/icons/check.svg" alt=""/>Качественный подбор в Москве и регионах и СНГ.</li>
                        <li class="services__description"><img src="@/assets/icons/check.svg" alt=""/>Адаптация, обучение, аттестация.</li>
                        <li class="services__description"><img src="@/assets/icons/check.svg" alt=""/>Гарантия замены в течение 3-х месяцев.</li>
                    </ul>
                </div>
                <div class="services__btn">
                    <button @click="store.targetModal('Заказать услугу', 'Подбор квалифицированного и рабочего персонала по России и СНГ')">Заказать услугу</button>
                </div>
            </div>
            <div class="services__item">
                <div class="services__main">
                    <div class="services__icon">
                        <img src="@/assets/icons/handshake.svg" alt=""/>
                    </div>
                    <h3 class="services__title" >Полное кадровое сопровождение компании</h3>
                    <ul class="services__list">
                        <li class="services__description"><img src="@/assets/icons/check.svg" alt=""/>Отдел HR в аренду.</li>
                        <li class="services__description"><img src="@/assets/icons/check.svg" alt=""/>Проведение консультаций по кадровым вопросам и трудовому.</li>
                        <li class="services__description"><img src="@/assets/icons/check.svg" alt=""/>Кадровый аудит.</li>
                        <li class="services__description"><img src="@/assets/icons/check.svg" alt=""/>Разработка должностных инструкций и локальных нормативных актов.</li>
                        <li class="services__description"><img src="@/assets/icons/check.svg" alt=""/>Восстановление кадрового учёта.</li>
                        <li class="services__description"><img src="@/assets/icons/check.svg" alt=""/>Ведение кадрового учёта иностранных граждан.</li>
                        <li class="services__description"><img src="@/assets/icons/check.svg" alt=""/>Ведение воинского учёта.</li>
                    </ul>
                </div>
                <div class="services__btn">
                    <button @click="store.targetModal('Заказать услугу', 'Полное кадровое сопровождение компании')">Заказать услугу</button>
                </div>
            </div>
            <div class="services__item">
                <div class="services__main">
                    <div class="services__icon">
                        <img src="@/assets/icons/user-check.svg" alt=""/>
                    </div>
                    <h3 class="services__title" >Комплексное консультирование</h3>
                    <ul class="services__list">
                        <li class="services__description"><img src="@/assets/icons/check.svg" alt=""/>Консультация психолога.</li>
                        <li class="services__description"><img src="@/assets/icons/check.svg" alt=""/>Консультация клинического психолога.</li>
                        <li class="services__description"><img src="@/assets/icons/check.svg" alt=""/>Психологическое тестирование личности.</li>
                        <li class="services__description"><img src="@/assets/icons/check.svg" alt=""/>Тестирование по компетенциям.</li>
                        <li class="services__description"><img src="@/assets/icons/check.svg" alt=""/>Профориентация.</li>
                    </ul>
                </div>
                <div class="services__btn">
                    <button @click="store.targetModal('Заказать услугу', 'Комплексное консультирование')">Заказать услугу</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {useCounterStore} from '@/store/index'
const store = useCounterStore()
</script>

<style lang="scss" scoped>
.services {
    padding: 70px 20px;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media screen and (max-width: $limit-mobile) {
        padding: 50px 10px;
    }

    &__items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 50px;

        @media screen and (max-width: $limit-tablet) {
            grid-template-columns: 1fr 1fr;
        }

        @media screen and (max-width: $limit-mobile) {
            grid-template-columns: 1fr;
            gap: 30px;
        }
    }

    &__item {
        display: flex;
        flex-direction: column;
        padding: 30px;
        background-color: $color-white;
        filter: drop-shadow(0px 0px 2px $color-black);
        border-radius: 10px;
        gap: 30px;
        cursor: pointer;
        transition: .5s;

        @media screen and (max-width: $limit-mobile) {
            padding: 15px;
        }

        @media (hover:hover) {
            &:hover {
                filter: drop-shadow(0px 0px 10px $color-btn);
            }
        }
    }

    &__main {
        display: flex;
        flex-direction: column;
        gap: 30px;
        flex: 1;
    }

    &__icon {
        display: flex;
        justify-content: center;

        img {
            width: 100px;
            height: 100px;
        }
    }

    &__title {
        font-size: 20px;
        font-weight: 700;
        text-align: center;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__description {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        font-size: 16px;
    }

    &__btn {
        display: flex;
        justify-content: center;

        button {
            border: 1px solid $color-btn;
            background-color: $color-btn;
            color: $color-white;
            font-weight: 700;
            border-radius: 5px;
            padding: 15px 60px;
            font-size: 20px;
            cursor: pointer;
            transition: .5s;
            flex:1;

            @media (hover: hover) {
                &:hover {
                    background-color: $color-white;
                    color: $color-btn;   
                }
            }

            @media screen and (max-width: $limit-mobile){
                font-size: 18px;
                flex: 1;
            }
        }
    }
}
</style>