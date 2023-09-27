<script lang="ts" setup>
interface Props {
  title: string;
  price: number;
  img: string;
  decription?: string;
  count?: number;
  rate?: number;
}
const props = defineProps<Props>();
</script>
<template>
  <div class="flex gap-5 h-96 text-center relative flex-col">
    <img :src="props.img" class="rounded-lg h-52" />

    <div class="flex flex-col bottom-0 w-full absolute propss-center">
      <p
        class="border-b-2 border-orange-600 text-gray-800 text-semibold text-center text-[1rem]"
      >
        {{ props.title }}...
      </p>
      <p class="text-orange-500 text-[1.4rem] text-bold">
        {{ props.price }} R$
      </p>
    </div>
  </div>
</template>
