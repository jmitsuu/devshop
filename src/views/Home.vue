<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { ShoppingCartIcon } from "@heroicons/vue/24/solid";
import axios from "axios";
import Product from "@/components/Product.vue";
const dataItems = ref();
const load = ref(false);
async function getAllItems() {
  const { data } = await axios.get(
    "https://fakestoreapi.com/products?limit=15"
  );
  console.log(data);
  dataItems.value = data;
  load.value = true
}
onMounted(() => {
  getAllItems();
});
import "vueperslides/dist/vueperslides.css";
</script>
<template>
  <section class="">
    <header class="">
      <img
        src="../assets/images/b1.jpg"
        class="object-cover h-[700px] w-full"
      />
    </header>
  </section>

  <section class="justify-center">
    <h1 class="text-[3rem] text-gray-600 shadow-gray-300 shadow-md p-6">
      Novidades
    </h1>
    <div
      class="flex justify-center items-center bg-opacity-10 container mx-auto mt-3 border rounded-md p-4"
    >
      <div class="grid xl:grid-cols-6 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 p-4 gap-5">
        <div
          class="gap-3 p-5 justify-center items-center rounded-xl cursor-pointer bg-gray-200  hover:bg-black hover:bg-opacity-10 transition duration-500 bg-opacity-50"
          v-for="item in dataItems"
          :key="item.id"
        >
        <div v-if="!load">loading</div>
          <Product v-else :title="item.title" :img="item.image" :price="item.price" />
          <ShoppingCartIcon
            class="h-8 cursor-pointer m-auto hover:text-orange-500"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
