<script lang="ts" setup>
import { ref } from "vue";
const stringLength = ref(false)
interface Props {
  title: string;
  price: number;
  img: string;
  description?: string | undefined;
  count?: number;
  rate?: number;
}

const props = defineProps<Props>();

</script>
<template>
  <div class="flex  gap-5 h-96 text-center relative flex-col">
    <div class="flex flex-col justify-between items-center">
      <img :src="props.img" class="rounded-lg h-44 w-44 mb-4" />

      <p class="text-gray-600 text-xs xl:text-[1.0rem]">{{ props.description }}
        <!-- <span
          v-if="props.description?.length > 50">...</span> -->
        
        </p>
      <p class="text-gray-900 font-bold text-[1.3rem]">
        <span class="font-normal text-[1.0rem]" v-if="props.rate">Nota</span>
        {{ rate }}
      </p>


    </div>


    <div class="flex flex-col bottom-0 w-full absolute propss-center">
      <p class=" text-gray-800 text-semibold text-center text-[1rem] ">
        {{ props.title }}...
      </p>
      <p class="text-orange-500 text-[1.4rem] text-bold mt-3  ">
        <span class="border-t-2 border-orange-600 ">  {{ props.price }} R$</span>
      
      </p>
    </div>
  </div>
</template>
