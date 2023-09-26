<script setup lang="ts">
import { ref, onMounted } from "vue"
import { RouterLink, RouterView } from 'vue-router';
import axios from "axios"
import { ClipboardDocumentIcon, HomeIcon, ClipboardIcon, ChartBarIcon, MapIcon, RectangleGroupIcon, PresentationChartBarIcon, ArchiveBoxArrowDownIcon } from '@heroicons/vue/24/solid';
const dataCategories = ref()
async function getCategories() {
  const { data } = await axios.get("https://fakestoreapi.com/products/categories")

  dataCategories.value = data
}

const modalControl = ref(false)
const items = [


  {
    path: "/masculino/Masculino",
    title: "Masculino"
  },
  {
    path: "/feminino/Feminino",
    title: "Calças"
  },
  {
    path: "/joias/Joias",
    title: "Jóias"
  }
  ,
  {
    path: "/eletronicos/Eletronicos",
    title: "Eletronicos"
  }
]
onMounted(() => {
  getCategories()
})
</script>
<template>
  <div class="relative  ">
    <nav class=" h-24  gap-6 flex items-center  w-full bg-gray-200">

      <div class="flex   ">

        <h1 class="text-gray-900  text-[1.8rem] ">
          <span class="font-bold ">SHOP</span>
          Management
        </h1>
      </div>
      <div class="mx-auto flex gap-6 text-[1.4rem]" >
        <RouterLink to="/" @click="modalControl = false" @mouseover="modalControl = false">
          <h1 class="text-gray-600 font-semibold">Home</h1>

        </RouterLink>

        <RouterLink to="/Produtos" class="relative" >
          <div @mouseover="modalControl = true" @click="modalControl = !modalControl"
            class="flex relative text-center items-center  gap-3">
            <span class="text-gray-600 font-semibold">Produtos</span>

          </div>
          <Tranistion>
            <div @mouseleave="modalControl = false"  class="flex flex-col   p-2 absolute bg-slate-300 "  v-if="modalControl">
              <RouterLink v-for=" item in items" :key="item.title" :to="`${item.path}`"  >
                <p  @click="modalControl = false" class="text-gray-500 rounded-md hover:text-gray-900">{{ item.title
                }}</p>
              </RouterLink>
            </div>
          </Tranistion>
        </RouterLink>
        <RouterLink to="/About" @click="modalControl = false" @mouseover="modalControl = false">
          <h1 class="text-gray-600 font-semibold">Sobre nós</h1>

        </RouterLink>
      </div>
    </nav>
    <RouterView />
  </div>
  <div class="flex-1">

  </div>
</template>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>