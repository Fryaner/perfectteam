<template>
    <Transition>
    <section v-if="store.isOpen" class="form-container">
        <section class="form">
        <img @click="close" class="form__close" src="@/assets/icons/close.svg" alt=""/>
        <div class="form__header">
            <p class="form__title">{{store.type}}</p>
            <p class="form__subtitle" v-if="store.service">{{ store.service }}</p>
        </div>
        <form action="https://formspree.io/f/mrbeyypl" method="POST" class="form__form" @submit="send">
            <input v-show="false" v-model="store.type" name="Тип Заявки"/>
            <input v-show="false" v-model="store.service" name="Услуга"/>
            <div class="form__list">
                <div class="form__input">
                    <label :class="{ errorText: v$.user.$errors.length }" for="user">Имя</label>
                    <div class="form__user">
                        <user/>
                        <input name="Имя" :class="{ error: v$.user.$errors.length }" v-model="state.user" type="text" id="user"/>
                    </div>
                    <p :class="{ errorText: v$.user.$errors.length }" v-if="v$.user.$errors.length">Необходимо заполнить поле</p>
                </div>
                <div class="form__input">
                    <label :class="{ errorText: v$.phone.$errors.length }" for="phone">Номер телефона</label>
                    <div class="form__phone">
                        <phone/>
                        <input @input="formatPhoneNumber" name="Номер телефона" :class="{ error: v$.phone.$errors.length }" v-model="state.phone" type="text" id="phone"/>
                    </div>
                    <p :class="{ errorText: v$.phone.$errors.length }" v-if="v$.phone.$errors.length">Необходимо заполнить поле</p>
                </div>
                <div class="form__input">
                    <label :class="{ errorText: v$.mail.$errors.length }" for="mail">Email</label>
                    <div class="form__mail">
                        <mail/>
                        <input name="Почта" :class="{ error: v$.mail.$errors.length }" v-model="state.mail" type="text" id="mail"/>
                    </div>
                    <p :class="{ errorText: v$.mail.$errors.length }" v-if="v$.mail.$errors.length">Необходимо заполнить поле</p>
                </div>
                <div v-if="store.type === 'Задать вопрос'" class="form__input">
                    <label :class="{ errorText: v1$.commentValue.$errors.length }" for="qusetion">Вопрос</label>
                    <div class="form__mail">
                        <comment/>
                        <input :class="{ error: v1$.commentValue.$errors.length }" v-model="state1.commentValue" type="text" name="Вопрос" id="qusetion"/>
                    </div>
                    <p :class="{ errorText: v1$.commentValue.$errors.length }" v-if="v1$.commentValue.$errors.length">Необходимо заполнить поле</p>
                </div>
            </div>
            <div class="form__footer">
                <div class="form__btns">
                    <button type="submit" class="form__send" :disabled="!isCheck">Отправить</button>
                    <button type="button" class="form__closed" @click="close">Отменить</button>
                </div>
                <div class="form__check">
                    <label for="check">Соглашаюсь с <a href="">обработкой персональных данных</a></label>
                    <input v-model="isCheck" type="checkbox" id="check"/>
                </div>
            </div>
        </form>
    </section>
    </section>     
    </Transition>
</template>

<script setup>
import user from '@/assets/icons/user.vue';
import phone from '@/assets/icons/phone.vue';
import mail from '@/assets/icons/mail.vue';
import comment from '@/assets/icons/comment.vue';
import { useCounterStore } from '@/store';
import { onMounted, reactive, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const store = useCounterStore()

const isCheck = ref(false)

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

function close() {
    v$.value.$reset();
    v1$.value.$reset();
    store.closeModal()
}

function closed() {
    state.user = ''
    state.phone = ''
    state.mail = ''
    state.comment = ''
    v$.value.$reset();
    v1$.value.$reset();
    store.closeModal()
}

onMounted(() => {
document.body.addEventListener('mousedown', function test(event) {
    if (event.target.className === 'form-container') {
        store.closeModal();
    }
})

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    closed()
  }
});
})

</script>

<style lang="scss" scoped>
.errorText {
    transition: .5s;
    color: rgb(251, 68, 68);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.form-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    background-color: hsla(0,0%,57.3%,.5)
}
.form {
    background-color: $color-white;
    box-shadow: (0 0 10px 2px $color-black);
    border-radius: 20px;
    padding: 30px;
    position: relative;
    max-width: 500px;
    width: calc(100% - 40px); 
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media screen and (max-width: $limit-mobile) {
        padding: 15px;
    }

    &__close {
        cursor: pointer;
        position: absolute;
        right: 15px;
        top: 15px;
        transform: rotate(0);
        transition: .5s;
        display: flex;
        flex-direction: column;
        gap: 15px;
        
        &:hover {
            transform: rotate(360deg);
        }
    }

    &__header {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    &__title {
        font-size: 24px;
        font-weight: 700;

        @media screen and (max-width: $limit-mobile) {
            font-size: 20px;
        }
    }

    &__subtitle {
        font-size: 20px;

        @media screen and (max-width: $limit-mobile) {
            font-size: 18px;
        }
    }
    
    &__form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    &__input {
        display: flex;
        flex-direction: column;
        gap: 5px;

        label {
            transition: .5s;
            font-size: 20px;

            @media screen and (max-width: $limit-mobile) {
                font-size: 16px;
            }
        }

        input {
            transition: .5s;
            padding: 15px 15px 15px 45px;
            border: 1px solid $color-black;
            border-radius: 5px;
            width: 100%;
            font-size: 18px;

            @media screen and (max-width: $limit-mobile) {
                padding: 10px 10px 10px 35px;
                font-size: 18px;
            }
        }

        .error {
    border: 1px solid rgb(251, 68, 68);
}

        &:focus-within {
            label {
                font-weight: 700;
            }
            
            input {
                background-color: $color-black;
                color: $color-white;
            }  


            svg {
                fill: $color-white;
            }
        }
    }

    &__user, &__phone, &__mail {
        position: relative;

        svg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 15px;

            @media screen and (max-width: $limit-mobile) {
                left: 10px;
            }
        }

    }

    &__footer {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__btns {
        display: flex;
        gap: 20px;
        justify-content: space-between;

        @media screen and (max-width: $limit-mobile) {
            flex-direction: column;
            gap: 15px;
        }
    }

    &__send {
        border: 1px solid $color-btn;
        background-color: $color-btn;
        color: $color-white;
        font-weight: 700;
        border-radius: 5px;
        padding: 15px 60px;
        font-size: 20px;
        cursor: pointer;
        transition: .5s;
        text-align: center;
        grid-area: Button;

        &:disabled {
            cursor: default;
            border: 1px solid gray;
            background-color: gray;
            color: $color-white;

            &:hover {
                background-color: gray;
                color: $color-white;  
            }
        }

        @media (hover: hover) {
            &:hover {
                background-color: $color-white;
                color: $color-btn;   
            }
        }

        @media screen and (max-width: $limit-mobile){
            font-size: 18px;
        } 
    }

    &__closed {
        border: 1px solid $color-btn;
        background-color: $color-white;
        color: $color-btn;
        font-weight: 700;
        border-radius: 5px;
        padding: 15px 60px;
        font-size: 20px;
        cursor: pointer;
        transition: .5s;
        text-align: center;
        grid-area: Button;

        @media (hover: hover) {
            &:hover {
                background-color: $color-btn;
                color: $color-white;   
            }
        }

        @media screen and (max-width: $limit-mobile){
            font-size: 18px;
        } 
    }

    &__check {
        display: flex;
        flex-direction: row-reverse;
        gap: 5px;
        align-items: center;
        justify-content: flex-end;

        label {
            cursor: pointer;
            font-size: 14px;

            @media screen and (max-width: $limit-mobile) {
                font-size: 12px;
            }

            a {
                color: $color-blue;
            }
        }

        input {
            cursor: pointer;
            width: 16px;
            height: 16px;
        }
    }

}
</style>