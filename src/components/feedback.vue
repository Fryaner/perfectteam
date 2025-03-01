<template>
    <section class="feedback">
        <Title>НУЖНЫ КАЧЕСТВЕННЫЕ СОТРУДНИКИ В КОМАНДУ?</Title>
        <div class="feedback__main">
            <h3 class="feedback__title">Оставьте заявку, и мы свяжемся с вами</h3>
            <form class="feedback__form">
                <div class="feedback__image">
                    <img src="@/assets/images/feedback.png" alt=""/>
                </div>
                <div class="feedback__input feedback__input-user">
                    <label for="user">Имя</label>
                    <input type="text" id="user"/>
                </div>
                <div class="feedback__input feedback__input-phone">
                    <label for="phone">Телефон</label>
                    <input type="text" id="phone"/>
                </div>
                <div class="feedback__input feedback__input-email">
                    <label for="mail">Email</label>
                    <input type="text" id="mail"/>
                </div>
                <div class="feedback__input feedback__input-comment">
                    <label for="comment">Комментарий</label>
                    <input type="text" id="comment"/>
                </div>
                <div class="feedback__btn">
                    <button>Оставить заявку</button>
                </div>
            </form>
        </div>
    </section>
</template>

<style lang="scss" scoped>
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

        label {
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