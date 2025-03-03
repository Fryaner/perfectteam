<template>
    <div class="banner" id="main">
        <div class="banner__info">
            <section class="banner__top" ref="topText">
                <h1 class="banner__title">Профессионалы для вашего бизнеса!</h1>
                <p class="banner__description">Полный цикл услуг по подбору, оценке и ведению кадрового учета для Вашего бизнеса</p>
            </section>
            <div class="banner__btn" ref="btn">
                <button @click="store.targetModal('Получить консультацию')">Получить консультацию</button>
            </div>
        </div>
        <form autocomplete="off" action="https://formspree.io/f/mrbeyypl" method="POST" @submit="send" class="banner__form" ref="form">
            <div class="banner__inputs">
                <div class="banner__input">
                    <user/>
                    <input placeholder="Имя" name="Имя" :class="{ error: v$.user.$errors.length }" v-model="state.user" type="text" id="user"/>
                </div>
                <div class="banner__input"> 
                    <mail/>   
                    <input placeholder="Почта" name="Почта" :class="{ error: v$.mail.$errors.length }" v-model="state.mail" type="text" id="mail"/>
                </div>
                <div class="banner__input">
                    <comment/>
                    <input placeholder="Комментарий" :class="{ error: v1$.commentValue.$errors.length }" v-model="state1.commentValue" type="text" name="Вопрос" id="qusetion"/>
                </div>
                <div class="banner__input">
                    <phone/>
                    <input placeholder="Номер телефона" @input="formatPhoneNumber" name="Номер телефона" :class="{ error: v$.phone.$errors.length }" v-model="state.phone" type="text" id="phone"/>
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
import { onMounted, reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const store = useCounterStore()

const state = reactive({
      user: '',
      phone: '',
      mail: '',
    })

const state1 = reactive({
    commentValue: ''
})
const rule = { commentValue: {required}}

const rules = {
    user: { required }, 
    phone: { required }, 
    mail: { required, email }
}

function formatPhoneNumber() {
    state.phone = state.phone.replace(/[^0-9]/g, '');
    if (state.phone.length > 11) {
    state.phone = state.phone.slice(0, 11);
    }
}

const topText = ref(null);
const btn = ref(null);
const form = ref(null);

onMounted(() => {
  const timeline = gsap.timeline()

  timeline.from(topText.value, { opacity: 0, x: '-100%', duration: 1 })
  timeline.from(btn.value, { opacity: 0, y: 50, duration: .5 })
  timeline.from(form.value, { opacity: 0, x: '100%', duration: 1 })

});

const v1$ = useVuelidate(rule, state1)
const v$ = useVuelidate(rules, state)

async function send(event) {
    const result = await v$.value.$validate()
    const resultComment = await v1$.value.$validate()
    if (!result && !resultComment) {
        event.preventDefault()
        return
    } 
}
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

        .error {
            border: 1px solid rgb(251, 68, 68);

            &::placeholder {
                color: rgb(251, 68, 68);
            }
        }

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