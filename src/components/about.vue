<template>
    <section class="about" id="about">
        <Title>Почему выбирают нас</Title>
        <div class="about__main">
            <div class="about__items">
                <div class="about__item">
                    <img class="about__icon" src="@/assets/icons/flask.svg" alt=""/>
                    <p class="about__description" ><span>Имеем обширный опыт</span> работы в разных сферах бизнеса с 2009 года</p>
                </div>
                <div class="about__item">
                    <img class="about__icon" src="@/assets/icons/user1.svg" alt=""/>
                    <p class="about__description" ><span>Компания состоит из квалифицированных</span> и опытных специалистов, которые эффективно выполняют поставленные задачи</p>
                </div>
                <div class="about__item">
                    <img class="about__icon" src="@/assets/icons/waypoints.svg" alt=""/>
                    <p class="about__description" ><span>Индивидуальный подход</span>, гибкая ценовая политика, предложим лучшие условия сотрудничества</p>
                </div>
                <div class="about__item">
                    <img class="about__icon" src="@/assets/icons/circle.svg" alt=""/>
                    <p class="about__description" ><span>Гарантируем быстрый</span> и качественный подбор</p>
                </div>
                <div class="about__item">
                    <img class="about__icon" src="@/assets/icons/timer.svg" alt=""/>
                    <p class="about__description" ><span>Экономия</span> времени и человеческих ресурсов</p>
                </div>
                <div class="about__item">
                    <img class="about__icon" src="@/assets/icons/user2.svg" alt=""/>
                    <p class="about__description" ><span>Берем на себя все вопросы</span> для эффективной работы Вашего бизнеса</p>
                </div>
            </div>
            <div class="about__btn">
                <button @click="store.targetModal('Узнать больше о нас')">Узнать больше</button>
            </div>
        </div>
    </section>

</template>

<script setup>
import {useCounterStore} from '@/store/index'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from 'vue';
const store = useCounterStore()

gsap.registerPlugin(ScrollTrigger);


    onMounted(() => {
        const titleElement = document.querySelectorAll('.about__item')
        const btn = document.querySelectorAll('.about__btn')

        btn

        gsap.from(btn,
            {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: btn,
                start: 'top 100%',
                end: 'bottom 20%',
                toggleActions: "play none none reverse",
                markers: false
            }
            }
        );

        titleElement.forEach((item) => {
        gsap.from(item,
            {
            x: '-110%',
            duration: .5,
            scrollTrigger: {
                trigger: item,
                start: 'top 100%',
                end: 'bottom 20%',
                toggleActions: "play none none reverse",
                markers: false
            }
            }
        );
        })
    });
</script>

<style lang="scss" scoped>
.about {
    padding: 70px 20px;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media screen and (max-width: $limit-mobile) {
        padding: 50px 10px;
    }

    &__main {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    &__items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 40px;

        @media screen and (max-width: $limit-tablet) {
            grid-template-columns: 1fr 1fr;
        }

        @media screen and (max-width: $limit-mobile) {
            grid-template-columns: 1fr;
            gap: 30px;
        }
    }

    &__item {
        filter: drop-shadow(0px 0px 2px $color-black);
        border-radius: 10px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        background-color: $color-white;
        transition: 0.5s;
        cursor: pointer;

        @media (hover:hover) {
            &:hover {
                filter: drop-shadow(0px 0px 10px $color-btn);
            }
        }
    }

    &__icon {
        width: 48px;
        height: 48px;
    }

    &__description {
        font-size: 16px;
        text-align: center;

        span {
            font-weight: 700;
        }
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