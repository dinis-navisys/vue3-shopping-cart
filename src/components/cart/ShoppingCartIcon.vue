<template>
  <span
    class="roundedIcon bg-black text-blue-50 p-4 text-xl absolute bottom-0 right-0 h-36 w-36"
  >
    <i class="icon fa-solid fa-cart-shopping" />
    <span class="topRight">
      <p>{{ getShoppingLength }}</p>
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const getShoppingLength = computed(() => {
  return store.getters.getCardLength;
});
</script>

<style scoped>
.roundedIcon {
  border-top-left-radius: 40px;
}

.icon {
  font-size: 60px;
  margin-top: 3rem;
  color: white;
}

.topRight {
  float: right;
  background-color: white;
  border-radius: 60%;
  width: 30px;
  height: 30px;
  color: black;
}

.topRight p {
  padding-left: 7px;
}
</style>
