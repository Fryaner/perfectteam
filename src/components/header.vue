<template>
<header class="header">
  <div class="header__logo">
    <img src="@/assets/icons/logo.png" alt=""/>
  </div>
  <div class="header__info" :class="{active: store.isActive}">
    <nav class="header__nav">
        <ul class="header__list">
            <li class="header__link" ><router-link to="">ГЛАВНАЯ</router-link></li>
            <li class="header__link"><router-link to="">О НАС</router-link></li>
            <li class="header__link"><router-link to="">КОНТАКТЫ</router-link></li>
            <li class="header__link"><router-link to="">УСЛУГИ</router-link></li>
            <li class="header__link"><router-link to="">ЦЕНЫ</router-link></li>
        </ul>
    </nav>
    <div class="header__contacts">
        <a href="tel:+79017183460" class="header__phone">+7 901 718 34 60</a>
        <div class="header__btn">
            <button>Заказать звонок</button>
            <p>На связи ежедневно с 9:00 до 21:00</p>
        </div>
    </div>
  </div>
  <div class="header__burger" @click="store.targetBurgerMenu()">
    <p class="header__burger-top" :class="{active: store.isActive}"></p>
    <p class="header__burger-middle" :class="{active: store.isActive}"></p>
    <p class="header__burger-bottom" :class="{active: store.isActive}"></p>
  </div>
</header>
</template>

<script setup>
import {useCounterStore} from '@/store/index'
const store = useCounterStore()
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    padding: 20px;

    @media screen and (max-width: $limit-mobile){
        padding: 10px;  
        padding-bottom: 30px;
    }

    &__logo {
        display: flex;
        flex-grow: 1; 
        position: relative;
        z-index: 20;

        img {
            cursor: pointer;
            width: 78px;
            height: auto;
        }
    }

    &__info {
        display: flex;
        align-items: center;
        flex-grow: 1;
        z-index: 10;

        @media screen and (max-width: $limit-mobile) {
            transition: .5s;
            transform: translateX(100%);
            background-color: $color-white;
            padding: 80px 0 20px 0; 
            width: 100%;
            height: 100vh;
            top: 0; 
            left: 0;
            flex-direction: column;
            position: absolute;

            &.active {
                transform: translateX(0);
            }
        }
    }

    &__nav, &__contacts {
        flex-grow: 1;
    }



    &__list {
        display: flex;
        gap: 40px;

        @media screen and (max-width: $limit-mobile) {
            flex-direction: column;
            gap: 60px;
        }
    }  
    
    &__link {
        position: relative;


        @media screen and (max-width: $limit-tablet) {
            font-size: 13px;
        }


        &::after {
            transition: .5s;
            content: '';
            width: 0;
            height: 2px;
            border-radius: 10px;
            background-color: $color-btn;
            position: absolute;
            left: 0;
            bottom: -5px;
        }

        @media screen and (max-width: $limit-mobile) {
            font-size: 20px;
            text-align: center;
        }

        a {
            transition: .5s;  
        }
        
        @media (hover:hover) {
            &:hover {
                &::after {
                width: 100%;
            }
                a {
                    color: $color-btn;
                }
            }
        }
    }
    
    &__contacts {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 20px;

        @media screen and (max-width: $limit-tablet) {
            gap: 5px;
            flex-direction: column;
        }
    }
    
    &__phone {
        font-size: 24px;
        color: $color-orange;
        font-weight: 700;
        transition: .5s;

        @media screen and (max-width: $limit-tablet) {
            font-size: 18px;
        }

        @media (hover:hover) { 
            &:hover {
                color: #FF4400;
            }
        }
    }

    &__btn {
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: center;

        button {
            background-color: $color-btn;
            border: 1px solid $color-btn;
            padding: 10px 27px;
            color: $color-white;
            border-radius: 5px;
            font-size: 20px;
            font-weight: 700;
            cursor: pointer;
            transition: .5s;

            @media screen and (max-width: $limit-tablet) {
                font-size: 18px;
            }


            @media (hover:hover) {
                &:hover {
                    color: $color-btn;
                    background-color: $color-white;
                }
            }
        }

        p {
            font-size: 10px;
            letter-spacing: 1.5px;
        }
    }

    &__burger {
        display: none;
        position: relative;
        width: 40px;
        height: 30px;
        z-index: 20;

        @media screen and (max-width: $limit-mobile) {
            display: flex;
        }

        &-top, &-middle, &-bottom {
            position: absolute;
            width: 100%;
            height: 4px;
            border-radius: 10px;
            background-color: $color-bg-title;
        }

        &-top {
            top: 0;
            transform: rotate(0);
            transition: .5s;

            &.active {
                top: 12px;
                transform: rotate(45deg);
            }
        }

        &-middle {
            top: 50%;
            display: block;
            transition: .5s;
            transform: translateY(-50%);

            &.active { 
                display: none;
            }
        }

        &-bottom {
            bottom: 0;
            transform: rotate(0);
            transition: .5s;

            &.active { 
                bottom: 13px;
                transform: rotate(-45deg);
            }
        }
    }

}
</style>