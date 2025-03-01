<template>
    <footer class="footer">
        <div class="footer__info">
            <p class="footer__mail"><span>Email: </span>hrfectteam@yandex.ru, hrfectteam@mail.ru</p>
            <p class="footer__phone"><span>Phone: </span>+7 901 718 34 60 </p>
            <p class="footer__timing">Мы работаем: Пн-Пт, 9:00-18:00</p>
        </div>
        <div class="footer__other">
            <p class="footer__site">www perfectteam.pro</p>
            <div class="footer__social">
                <a href=""><img src="@/assets/icons/wa.svg" alt=""/></a>
                <a href=""><img src="@/assets/icons/vk.svg" alt=""/></a>
                <a href=""><img src="@/assets/icons/tg.svg" alt=""/></a>
            </div>
            <p class="footer__title">PERFECT TEAM © 2025. All Rights Reserved.</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    margin-top: 100px;
    padding: 50px 0;
    border-top: 1px solid $color-black;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

    &__info, &__other {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }

    &__mail, &__phone, &__timing {
        font-size: 24px;

        span {
            font-weight: 700;
        }
    }

    &__site {
        font-size: 32px;
        font-weight: 700;
    }

    &__social {
        display: flex;
        gap: 30px;
    }

    &__title {
        font-size: 32px;
        letter-spacing: 1px;
    }
}
</style>