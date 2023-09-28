<script setup lang="ts">
import HeaderGen from "../../components/HeaderGen.vue";
import { ShoppingCartIcon } from "@heroicons/vue/24/solid";
import axios from "axios";
import { ref, onMounted } from "vue";
import Product from "../../components/Product.vue";
const dataJewelery = ref();
const load = ref(false);
async function getMensClouthing() {
  const { data } = await axios.get(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  dataJewelery.value = data;
  console.log(data);
  load.value = true;
}
const textHeader = "As melhores jóias para voce! \nDescubra nossa incrível variedade de jóias, com a mais alta qualidade. Venha conferir nossa coleção completa!";

onMounted(() => {
  getMensClouthing();
});
</script>

<template>
  <section class="min-h-screen">
    <header>
      <HeaderGen :title="'Jóias'" :text="textHeader" />
    </header>
    <div class="w-11/12 mx-auto mt-10 border-[0.1rem] min-h-screen">
      <div
        class="grid rounded-md sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 p-4 gap-5"
      >
        <div
          class="gap-3 p-5 justify-center items-center rounded-xl cursor-pointer bg-gray-200 hover:bg-black hover:bg-opacity-10 transition duration-500 bg-opacity-50"
          v-for="item in dataJewelery"
          :key="item.id"
        >
          <div v-if="!load">loading</div>
          <Product
            v-else
            :title="item.title"
            :img="item.image"
            :price="item.price"
            :rate="item.rating.rate"
            :description="
              item.description.length > 100
                ? item.description.slice(0, 90)
                : item.description
            "
          />
          <ShoppingCartIcon
            class="h-8 cursor-pointer m-auto hover:text-orange-500"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
