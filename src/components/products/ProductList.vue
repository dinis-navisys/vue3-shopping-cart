<template>
    <div class="grid grid-cols-3">
        <ProductCart />
        <ShoppingCartIcon />
    </div>
</template>

<script lang="ts">
import ShoppingCartIcon from "../cart/ShoppingCartIcon.vue";
import { defineComponent } from "vue";
import ProductCart from "./ProductCart.vue";

export default defineComponent({
  name: "ProductList",
  components: {
    ShoppingCartIcon,
    ProductCart,
  },
});
</script>
