<template>
    <div class="banner" id="main">
        <div class="banner__info">
            <section class="banner__top">
                <h1 class="banner__title">Профессионалы для вашего бизнеса!</h1>
                <p class="banner__description">Полный цикл услуг по подбору, оценке и ведению кадрового учета для Вашего бизнеса</p>
            </section>
            <div class="banner__btn">
                <button @click="store.targetModal('Получить консультацию')">Получить консультацию</button>
            </div>
        </div>
        <form class="banner__form">
            <div class="banner__inputs">
                <div class="banner__input">
                    <user/>
                    <input class="banner__input-name" type="text" placeholder="Имя"/> 
                </div>
                <div class="banner__input"> 
                    <mail/>   
                    <input class="banner__input-mail" type="text" placeholder="Mail"/>
                </div>
                <div class="banner__input">
                    <comment/>
                    <input class="banner__input-comment"  type="text" placeholder="Комментарий"/>
                </div>
                <div class="banner__input">
                    <phone/>
                    <input class="banner__input-phone" type="text" placeholder="Номер телефона"/>       
                </div>    
            </div>
            <button class="banner__btn-form">Оставить заявку</button>
        </form>
    </div>
</template>

<script setup>
import phone from '@/assets/icons/phone.vue'
import comment from '@/assets/icons/comment.vue'
import user from '@/assets/icons/user.vue'
import mail from '@/assets/icons/mail.vue'

import {useCounterStore} from '@/store/index'
const store = useCounterStore()
</script>

<style lang="scss" scoped>
.banner {
    padding: 30px 30px 100px 30px;
    display: flex;
    justify-content: space-between;
    background-image: url('@/assets/images/banner.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 0;
    gap: 20px;

    @media screen and (max-width: $limit-tablet){
        flex-direction: column;
        gap: 30px;
        padding: 20px 20px 60px 20px;
    }

    @media screen and (max-width: $limit-mobile){
        padding: 30px 10px 30px 10px;
    }

    &:after {
        top: 0;
        left: 0;
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.321);
        z-index: -1;
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: 50px;
        width: 50%;

        @media screen and (max-width: $limit-tablet){
            width: 100%;
            gap: 30px;
        }
    }
    
    &__top {
        display: flex;
        flex-direction: column;
        gap: 30px;

        @media screen and (max-width: $limit-tablet){
            gap: 15px;
        }

        @media screen and (max-width: $limit-mobile){
            text-align: center;
        }
    }

    &__title {
        font-size: 36px;
        font-weight: 700;

        @media screen and (max-width: $limit-mobile){
            font-size: 24px;
        }
    }

    &__description {
        font-size: 20px;
        font-weight: 500;

        @media screen and (max-width: $limit-mobile){
            font-size: 16px;
        }
    }

    &__btn {
        display: flex;

        button {
            background-color: $color-btn;
            border: 1px solid $color-btn;
            color: $color-white;
            border-radius: 5px;
            padding: 10px 27px;
            transition: .5s;
            cursor: pointer;
            font-size: 20px;
            font-weight: 700;

            @media screen and (max-width: $limit-mobile){
                font-size: 18px;
                flex: 1;
            }

            @media (hover:hover) {
                &:hover {
                    background-color: $color-white;
                    color: $color-btn;
                }
            }
        }
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: 40px;
        background-color: rgba(0, 0, 0, 0.6);
        padding: 30px;
        width: 50%;

        @media screen and (max-width: $limit-tablet){
            width: 100%;
        }

        @media screen and (max-width: $limit-mobile){
            width: 100%;
            padding: 20px;
            gap: 30px;
        }
    }

    &__inputs {
        display: grid;
        gap: 20px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        
        @media screen and (max-width: $limit-mobile){
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
        }
    }

    &__input {
        position: relative;
        max-width: 700px;

        svg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 12px;
            stroke: $color-white;
            pointer-events: none;

            @media screen and (max-width: $limit-mobile){
                width: 20px;
                left: 10px;
            }
        }

        &:focus-within { 
            svg {
                stroke: $color-black;
            }
        }
            input {
                border: 2px solid $color-white;
                padding: 10px 10px 10px 50px;
                transition: .5s;
                color: white;
                width: 100%;

                @media screen and (max-width: $limit-mobile){
                    padding-left: 40px;
                }

            &:focus svg  {
                fill: red;
            }

            &:focus {
                color: $color-black;
                background-color: white;

                &::placeholder {
                    color: $color-black;

                }
            }

            &::placeholder {
                color: $color-white;
            }
        }
    }

    &__input-name, 
    &__input-comment,
    &__input-phone,
    &__input-mail {
        background-repeat: no-repeat;
        background-position: 10px center;
        background-size: 24px;
    }

    &__btn-form {
        border: 2px solid $color-white;
        color: $color-white;
        padding: 10px;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0);
        transition: .5s;
        font-weight: 700;
        border-radius: 5px;
        font-size: 20px;

        @media screen and (max-width: $limit-mobile){
            font-size: 18px;
        }

        @media (hover: hover) {
            &:hover {
                background-color: $color-white;
                color: $color-black;    
            }
        }
    }
}
</style>