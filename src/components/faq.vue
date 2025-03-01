<template>
    <section class="faq">
        <Title>FAQ (Часто задаваемые вопросы)</Title>
        <div class="faq__main">
            <div class="faq__list">
                <h3 class="faq__title">Ответы на ваши вопросы:</h3>
                <div>
                    <Accordeon>
                        <template v-slot:question>
                            Сколько времени занимает подбор персонала?
                        </template>
                        <template v-slot:answer>
                            Подбор персонала по заявке заказчика от 3 до 14 дней.
                        </template>
                    </Accordeon>
                </div>
                <div>
                    <Accordeon>
                        <template v-slot:question>
                            Какие гарантии вы предоставляете?
                        </template>
                        <template v-slot:answer>
                            Гарантии  по договору от 30 дней до 90 дней.
                        </template>
                    </Accordeon>
                </div>
                <div>
                    <Accordeon>
                        <template v-slot:question>
                            Как происходит оплата?
                        </template>
                        <template v-slot:answer>
                            Гибкая система оплаты .
                        </template>
                    </Accordeon>
                </div>
                <div>
                    <Accordeon>
                        <template v-slot:question>
                            Можно ли заказать только часть услуг?
                        </template>
                        <template v-slot:answer>
                            Да ,можно.
                        </template>
                    </Accordeon>
                </div>
            </div>
            <div class="faq__image">
                <img src="@/assets/images/faq.png" alt=""/>
                <div class="faq__btn">
                    <button>Задать вопрос</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.faq {
    padding: 70px 20px;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media screen and (max-width: $limit-mobile) {
        padding: 50px 10px;
    }

    &__main {
        display: flex;
        gap: 40px;
        align-items: center;

        @media screen and (max-width: $limit-tablet) {
            flex-direction: column;
            gap: 0;
        }
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 25px;
        flex: 1;

        
        @media screen and (max-width: $limit-tablet) {
            width: 100%;
        }
    }

    &__image {
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: center;
        flex: 0.7;

        @media screen and (max-width: $limit-tablet) {
            width: 100%;
        }

        img {
            max-width: 600px;
            width: 100%;
        }
    }

    &__title {
        font-size: 20px;
        font-weight: 700;
    }

    &__btn {
        display: flex;
        justify-content: center;
        width: 100%;

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
            grid-area: Button;

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