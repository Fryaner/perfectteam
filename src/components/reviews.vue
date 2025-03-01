<template>
    <section class="reviews">
        <Title>ОТЗЫВЫ</Title>
        <div class="swiper">
    <div class="swiper-wrapper">
      <div class="reviews__item swiper-slide">
                <img class="reviews__image" src="@/assets/images/reviewUser.webp" alt=""/>
                <div class="reviews__info">
                    <p class="reviews__description">Прексраная компания. Нашла сотрудников за час, будем с ними работать дальше!!!!</p>
                    <div class="reviews__rating">
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </div>
                </div>
            </div>
            <div class="reviews__item swiper-slide">
                <img class="reviews__image" src="@/assets/images/reviewUser.webp" alt=""/>
                <div class="reviews__info">
                    <p class="reviews__description">Прексраная компания. Нашла сотрудников за час, будем с ними работать дальше!!!!</p>
                    <div class="reviews__rating">
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </div>
                </div>
            </div>
    </div>
    <!-- Кнопки навигации -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <!-- Пагинация -->
    <div class="swiper-pagination"></div>
  </div>
    </section>
</template>

<script setup>
import Star from '@/assets/icons/star.vue';

import { onMounted } from 'vue';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


// Инициализация Swiper после монтирования компонента
onMounted(() => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
</script>

<style lang="scss">
.swiper {
    width: 80%;

    @media screen and (max-width: $limit-tablet) {
        width: 90%;
    }   

    @media screen and (max-width: $limit-mobile) {
        width: 100%;
    }   
}

/* Изменение цвета стрелок */
.swiper-button-prev,
.swiper-button-next {
    color: $color-black;
}

.reviews {
    padding: 70px 20px;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media screen and (max-width: $limit-mobile) {
        padding: 50px 10px;
    }

    &__item {
        display: flex;
        gap: 40px;
        padding: 0 80px;

        @media screen and (max-width: $limit-mobile) {
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 0 60px;
        }   
    }

    &__image {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 100%;
        border: 1px solid $color-black;

        @media screen and (max-width: $limit-tablet) {
            width: 150px;
            height: 150px;
        }   

        @media screen and (max-width: $limit-mobile) {
            width: 100px;
            height: 100px;
        }   
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 1;

        @media screen and (max-width: $limit-mobile) {
            align-items: center;
        }  
    }

    &__description {
        font-size: 20px;
        @media screen and (max-width: $limit-tablet) {
            font-size: 16px;
        }   

        @media screen and (max-width: $limit-mobile) {
            text-align: center;
        }   
    }

    &__rating {
        display: flex;
        gap: 10px;

        svg {
            fill: orange;
        }

        @media screen and (max-width: $limit-mobile) {
            svg {
                width: 16px;
                height: 16px;
            }
        } 
    }
}
</style>