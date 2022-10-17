<template>
  <div class="overflow-y-hidden">
    <div
      class="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44"
    >
      <div
        class="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0"
      >
        <div class="flex w-full flex-col justify-start items-start">
          <div v-for="card in getCardData" :key="card.id">
            <div
              class="border-4 border-solid focus:ring-2 focus:ring-gray-500 focus:outline-none px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
            >
              <div class="flex justify-between">
                <button @click="removeFromCart(card.id)">X</button>
                <span class="ml-4">{{ card.name }}</span>
                <span class="ml-4">{{ card.quantity }}x</span>
                <span class="ml-4">{{ card.price }}€</span>
              </div>
            </div>
            <br />
          </div>
        </div>
        <div
          class="flex flex-col justify-start items-start border-2 border-black w-full p-6 md:p-14"
        >
          <div>
            <h1 class="text-2xl font-semibold leading-6 text-gray-800">
              Total
            </h1>
          </div>
          <div class="flex mt-7 flex-col items-end w-full space-y-6">
            <div class="flex justify-between w-full items-center">
              <p class="text-lg leading-4 text-gray-600">{{ total }}€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed} from "vue";
import { useStore } from "vuex";

const store = useStore();

const getCardData = computed(() => {
  return store.state.cart;
});
const total = computed(() => store.getters.getTotal);
const removeFromCart = (id: number) => {
  return store.dispatch("removeProductFromCard", id);
};
</script>