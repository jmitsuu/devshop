<script setup lang="ts">
interface Props {
    title: string,
    genere: string,
    heshe:string
}
const props = defineProps<Props>()

</script>

<template>
    <div class="bg-gray-100 py-16 px-20 bg-opacity-50">
        <h1 class="text-[2.9rem] font-light">
            {{ props.title }}
        </h1>
        <p class="mt-10 border-t-[0.1rem] border-gray-500 pt-9">
            Estilo e elegância para {{props.heshe}}! <br>
            Descubra nossa incrível variedade de moda {{ props.genere }}, com roupas de alta qualidade e tendências atualizadas.
            Vista-se com confiança e sofisticação. Venha conferir nossa coleção completa!
        </p>
    </div>
</template>