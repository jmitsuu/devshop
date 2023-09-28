<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { Bars4Icon } from "@heroicons/vue/24/solid";
import { ShoppingCartIcon } from "@heroicons/vue/24/outline";
import axios from "axios";
import Footer from "./Footer.vue";
const dataCategories = ref();
const modalControl = ref(false);
const modalMobile = ref(false);
const menuCategories = ref(false)
async function getCategories() {
  const { data } = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );

  dataCategories.value = data;
}

function closeModal() {
  if (modalMobile.value && modalControl.value) {
    modalMobile.value = false;
    modalControl.value = false;
  }
}
const items = [
  {
    path: "/vestuario/Masculino",
    title: "Masculino",
  },
  {
    path: "/vestuario/Feminino",
    title: "Feminino",
  },
  {
    path: "/joias/Joias",
    title: "Jóias",
  },
  {
    path: "/eletronicos/Eletronicos",
    title: "Eletronicos",
  },
];
onMounted(() => {});
</script>
<template>
  <section>
    <header>
      <nav
        class="h-24 gap-6 flex items-center bg-gradient-to-b from-[rgb(245,244,242)] z-50 to-[#f1c9b9]"
      >
        <div class="flex text-white w-full">
          <h1 class="text-gray-900 text-[1.8rem]">
            <span class="font-bold">SHOP</span>
            Dev
          </h1>
        </div>

        <div
          class="mx-auto md:flex justify-end w-full gap-6 text-[1.4rem] mr-8 hidden"
        >
          <RouterLink
            to="/"
            @click="closeModal"
            @mouseover="modalControl = false"
          >
            <h1
              class="text-black transition-all hover:text-gray-400 font-semibold"
            >
              Home
            </h1>
          </RouterLink>

          <div class="relative cursor-pointer">
            <div
              @mouseover="modalControl = true"
              @click="modalControl = !modalControl"
              class="flex relative text-center items-center gap-3"
            >
              <span
                class="text-black hover:text-gray-400 transition-all font-semibold"
                >Produtos</span
              >
            </div>
            <Tranistion>
              <div
                @mouseleave="modalControl = false"
                class="flex flex-col rounded-md p-2 absolute bg-[#fefbf6]"
                v-if="modalControl"
              >
                <RouterLink
                  v-for="item in items"
                  :key="item.title"
                  :to="`${item.path}`"
                >
                  <p
                    @click="modalControl = false"
                    class="text-black rounded-md transition-all border-b hover:bg-[#e4e0da]"
                  >
                    {{ item.title }}
                  </p>
                </RouterLink>
              </div>
            </Tranistion>
          </div>
          <RouterLink
            to="/About"
            @click="modalControl = false"
            @mouseover="modalControl = false"
          >
            <h1
              class="text-black hover:text-gray-400 transition-all font-semibold"
            >
              Sobre nós
            </h1>
          </RouterLink>
        </div>

        <div class="absolute right-2 close" id="" @click="closeModal">
          <Bars4Icon
            class="w-8 xl:hidden md:hidden close"
            @click="modalMobile = !modalMobile"
          />
          <div class="w-full h-full relative" v-if="modalMobile">
            <ul class="absolute right-8 top-0 w-32 bg-[#fefbf6] rounded-md p-2">
              <li class="border-b-2">
                <RouterLink to="/" @click="modalControl = !modalControl">
                  Home
                </RouterLink>
              </li>
              <li
                class="cursor-pointer border-b-2"
                @click="menuCategories = !menuCategories"
              >
                produtos

                <div class="relative w-full h-full" v-if="menuCategories">
                  <ul
                    class="absolute right-28 top-0 bg-[#fefbf6] rounded-md p-2"
                  >
                    <li @click="modalMobile = false">
                      <RouterLink
                        v-for="item in items"
                        :key="item.title"
                        :to="`${item.path}`"
                        @mouseleave="modalControl = false"
                        class="border-b-2 p-2 flex flex-col"
                      >
                        {{ item.title }}
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="w-full border-b-2">
                <RouterLink to="/about"> Sobre nós </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <ShoppingCartIcon class="w-10 mr-8 left-44     absolute cursor-pointer" />
      </nav>
    </header>

    <RouterView />
    <Footer />
  </section>
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
