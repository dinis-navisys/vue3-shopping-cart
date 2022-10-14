<template>
  <div
    class="flex flex-col justify-start items-start border-2 border-black w-full p-6 md:p-14"
  >
    <div>
      <h1 class="text-2xl font-semibold leading-6 text-gray-800">Total</h1>
    </div>
    <div class="flex mt-7 flex-col items-end w-full space-y-6">
      <div class="flex justify-between w-full items-center">
        <p class="text-lg leading-4 text-gray-600">{{total}}€</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed} from "vue";
import { useStore } from "vuex";

const store = useStore();

const total = computed(() => store.getters.getTotal);

</script>