<template>
    <section>
        <Title>FAQ (Часто задаваемые вопросы)</Title>
        <div>
            <div>
                <Accordeon>
                    <template v-slot:question>
                        Вопрос
                    </template>
                    <template v-slot:answer>
                        Ответ
                    </template>
                </Accordeon>
            </div>
            <div>

            </div>
        </div>
    </section>
</template>