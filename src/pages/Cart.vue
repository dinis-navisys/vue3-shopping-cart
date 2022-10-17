<template>
  <CartResult />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import CartResult from "../components/cart/CartResult.vue";

export default defineComponent({
  name: "Cart",
  components: { CartResult },
});
</script>