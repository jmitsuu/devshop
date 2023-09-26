
<script lang="ts" setup>
import bg1 from "../assets/images/b1.jpg"
import bg2 from "../assets/images/b2.jpg"
import bg3 from "../assets/images/b3.jpg"
import {ref, onMounted} from "vue"
import { VueperSlides, VueperSlide } from 'vueperslides'
import axios from "axios";
const dataItems = ref()
async function getAllItems(){
  const {data} = await axios.get("https://fakestoreapi.com/products?limit=10");
  console.log(data)
  dataItems.value = data
}
onMounted(()=>{
  getAllItems();
})
import 'vueperslides/dist/vueperslides.css'

</script>
<template>
  <section class="">
    <header class="">
      <img src="../assets/images/b1.jpg"  class="object-cover h-[700px] w-full"/>
    </header>
   </section>
 
   <section class="  justify-center ">
    <h1 class="text-[4rem] text-gray-600">Lançamentos</h1>
      <div class="bg-gray-200 flex  container mx-auto ">
        <div class="flex flex-wrap"
        v-for="item in dataItems"
        :key="item.id"
        >

        <img :src="item.image" class="w-44"/>

        </div>
      </div>

    </section>
</template>

<style></style>
