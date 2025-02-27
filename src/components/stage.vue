<template>
    <section class="stage">
        <Title>ПРОЦЕСС РАБОТЫ С НАМИ — ПРОСТО И ЭФФЕКТИВНО</Title>
        <div class="stage__main">
            <div class="stage__items">
                <div class="stage__item">
                    <p class="stage__title"><img src="@/assets/icons/circlecheck.svg" alt=""/>1 Этап</p>
                    <p class="stage__description">После Вашего обращения проводим анализ рынка кандидатов, разрабатываем стратегию найма, даем оценку стоимости работы</p>
                </div>
                <div class="stage__item">
                    <p class="stage__title"><img src="@/assets/icons/circlecheck.svg" alt=""/>2 Этап</p>
                    <p class="stage__description">Заключаем договор, подтверждаем финансовые условия;</p>
                </div>
                <div class="stage__item">
                    <p class="stage__title"><img src="@/assets/icons/circlecheck.svg" alt=""/>3 Этап</p>
                    <p class="stage__description">Разрабатываем профиль кандидата, создаем вакансию, определяем условия и каналы поиска</p>
                </div>
                <div class="stage__item">
                    <p class="stage__title"><img src="@/assets/icons/circlecheck.svg" alt=""/>4 Этап</p>
                    <p class="stage__description">Подбираем специалистов по профилю, проводим интервью, отбираем финальных кандидатов;</p>
                </div>
                <div class="stage__item">
                    <p class="stage__title"><img src="@/assets/icons/circlecheck.svg" alt=""/>5 Этап</p>
                    <p class="stage__description">Утверждаем кандидата, готовим и направляем оффер</p>
                </div>
                <div class="stage__item">
                    <p class="stage__title"><img src="@/assets/icons/circlecheck.svg" alt=""/>6 Этап</p>
                    <p class="stage__description">Сопровождаем на этапе адаптации и стажировки, консультируем по всем необходимым вопросам.</p>
                </div>
            </div>
            <div class="stage__btn">
                <button>Начать сотрудничество</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.stage {
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
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        background-color: $color-white;
        transition: 0.5s;
        cursor: pointer;
        filter: drop-shadow(0px 0px 4px $color-black);
        border-radius: 10px;

        @media (hover:hover) {
            &:hover {
                filter: drop-shadow(0px 0px 10px $color-btn);
            }
        }
    }

    &__title {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 20px;
        font-weight: 700;
        color: $color-orange;
    }

    &__description {
        font-size: 16px;
        letter-spacing: 1.5px;
        line-height: 24px;
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