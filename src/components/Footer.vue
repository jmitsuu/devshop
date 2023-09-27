<script setup lang="ts">
const client = [
  { title: "Central de Ajuda" },
  { title: "Como Comprar" },
  { title: "Métodos de Pagamento" },
  { title: "Garantia ShopDev" },
  { title: "Devolução e Reembolso" },
  { title: "Fale Conosco" },
  { title: "Ouvidoria" },
];
const about = [
  { title: "Sobre Nós" },
  { title: "Políticas ShopDev" },
  { title: "Política de Privacidade" },
  { title: "Programa de Afiliados da ShopDev" },
  { title: "Ofertas Relâmpago" },
  { title: "ShopDev Blog" },
  { title: "Imprensa" },
];
</script>

<template>
  <footer
    class="w-full  pt-5 bg-slate-100 border-t-[0.1rem] border-gray-900 mt-3 h-[300px]"
  >
    <div class=" w-2/3 relative h-full flex justify-between mx-auto p-4">
      <div>
        <h1 class="text-[0.8rem] font-bold uppercase text-gray-800 mb-3">
          Atendimento ao Cliente
        </h1>
        <div v-for="item in client" :key="item.title">
          <p class="text-[0.8rem] cursor-pointer hover:text-orange-500">
            {{ item.title }}
          </p>
        </div>
      </div>
      <div>
        <h1 class="text-[0.8rem] font-bold uppercase text-gray-800 mb-3">
          Sobre Nós
        </h1>
        <div v-for="item in about" :key="item.title">
          <p class="text-[0.8rem] cursor-pointer hover:text-orange-500">
            {{ item.title }}
          </p>
        </div>
      </div>
      <div>
        <h1 class="text-[0.8rem] font-bold uppercase text-gray-800 mb-3">
          Pagamentos
        </h1>
        <div class="grid grid-cols-3 gap-8">
          <img
            class="shadow p-1"
            src="https://down-br.img.susercontent.com/file/a65c5d1c5e556c6197f8fbd607482372"
          />
          <img
            class="shadow p-1"
            src="https://down-br.img.susercontent.com/file/95d849253f75d5e6e6b867af4f7c65aa"
          />
          <img
            class="shadow p-1"
            src="https://down-br.img.susercontent.com/file/5ee8fb5f33fdf1e42ea32b86f47f54c4"
          />
          <img
            class="shadow p-1"
            src="https://down-br.img.susercontent.com/file/2d091a1c189e8e4c529a73f3ec3a118d"
          />
          <img
            class="shadow p-1"
            src="https://down-br.img.susercontent.com/file/285e5ab6207eb562a9e893a42ff7ee46"
          />
          <img
            class="shadow p-1"
            src="https://down-br.img.susercontent.com/file/44734b7fc343eb46237c2d90c6c9ca60"
          />
          <img
            class="shadow p-1"
            src="https://down-br.img.susercontent.com/file/2a2cfeb34b00ef7b3be23ea516dcd1c5"
          />
        </div>
      </div>
      <div class=" w-2/3 absolute bottom-0 border-t-2 p-5 text-[0.8rem]">

        @Todos os direitos reservados a ShopDev

      </div>
    </div>
   
  </footer>
</template>
