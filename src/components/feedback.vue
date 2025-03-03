<template>
    <section class="feedback">
        <Title>НУЖНЫ КАЧЕСТВЕННЫЕ СОТРУДНИКИ В КОМАНДУ?</Title>
        <div class="feedback__main">
            <h3 class="feedback__title">Оставьте заявку, и мы свяжемся с вами</h3>
            <form action="https://formspree.io/f/mjkgnjqg" method="POST" @submit="send" class="feedback__form">
                <div class="feedback__image">
                    <img src="@/assets/images/feedback.webp" alt=""/>
                </div>
                <div class="feedback__input feedback__input-user">
                    <label :class="{ errorText: v$.user.$errors.length }" for="user">Имя</label>
                    <input name="Имя" :class="{ error: v$.user.$errors.length }" v-model="state.user" type="text" id="user"/>
                    <p :class="{ errorText: v$.user.$errors.length }" v-if="v$.user.$errors.length">Необходимо заполнить поле</p>
                </div>
                <div class="feedback__input feedback__input-phone">
                    <label :class="{ errorText: v$.phone.$errors.length }" for="phone">Телефон</label>
                    <input @input="formatPhoneNumber" name="Номер телефона" :class="{ error: v$.phone.$errors.length }" v-model="state.phone" type="tel" id="phone"/>
                    <p :class="{ errorText: v$.phone.$errors.length }" v-if="v$.phone.$errors.length">Необходимо заполнить поле</p>
                </div>
                <div class="feedback__input feedback__input-email">
                    <label :class="{ errorText: v$.mail.$errors.length }" for="mail">Email</label>
                    <input name="Почта" :class="{ error: v$.mail.$errors.length }" v-model="state.mail" type="mail" id="mail"/>
                    <p :class="{ errorText: v$.mail.$errors.length }" v-if="v$.mail.$errors.length">Необходимо заполнить поле</p>
                </div>
                <div class="feedback__input feedback__input-comment">
                    <label :class="{ errorText: v$.mail.$errors.length }" for="comment">Комментарий</label>
                    <input :class="{ error: v1$.commentValue.$errors.length }" v-model="state1.commentValue" type="text" name="Вопрос" id="comment"/>
                    <p :class="{ errorText: v1$.commentValue.$errors.length }" v-if="v1$.commentValue.$errors.length">Необходимо заполнить поле</p>
                </div>
                <div class="feedback__btn">
                    <button>Оставить заявку</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

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
    if (!result || !resultComment) {
        event.preventDefault()
        return
    } 
}
</script>

<style lang="scss" scoped>
.errorText {
    color: rgb(251, 68, 68);
}
.feedback {
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
        gap: 20px;
    }

    &__title {
        font-size: 20px;
        font-weight: 700;
    }
    
    &__form {
        display: grid;
        grid-template-areas:
        "User - Image"
        "Phone Email Image"
        "Comment Comment Image"
        "Button Button Image";
        gap: 20px;
        grid-template-columns: 0.6fr 0.6fr 1fr;

        @media screen and (max-width: $limit-tablet) {
            grid-template-areas:
            "Image Image"
            "User Phone"
            "Email Comment"
            "Button Button";

            grid-template-columns: 1fr 1fr;
        }

        @media screen and (max-width: $limit-mobile) {
            grid-template-areas:
            "Image"
            "User"
            "Phone"
            "Email"
            "Comment"
            "Button";

            grid-template-columns: 1fr;
        }
    }

    &__image {
        grid-area: Image;
        display: flex;
        justify-content: center;


        img {
            @media screen and (max-width: $limit-tablet) {
                width: 100%;
                height: auto;
            }
        }
    }

    &__input {
        display: flex;
        flex-direction: column;
        gap: 5px;

        .error {
            transition: .5s;
        border: 1px solid rgb(251, 68, 68);
    }
        
        &:focus-within {
            label {
                font-weight: 700;
            }

            input {
                border-width: 2px;
                transition: .5s;
            }
        }

        label {
            transition: .5s;
            font-size: 16px;
        }

        input {
            border: 1px solid $color-black;
            border-radius: 5px;
            padding: 10px;
            min-width: 200px;
        }
    }

    &__input-user {
        grid-area: User;
    }

    &__input-phone {
        grid-area: Phone;
    }

    &__input-email {
        grid-area: Email;
    }

    &__input-comment {
        grid-area: Comment;
    }

    &__btn {
        display: grid;
        grid-area: Button;
        align-items: center;
        justify-content:  flex-start;

        @media screen and (max-width: $limit-tablet) {
                // width: 100%;
                justify-content: normal;
            }

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
            text-align: center;

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
    }
}
</style>