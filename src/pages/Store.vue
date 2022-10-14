<template>
  <ProductList />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import ProductList from "../components/products/ProductList.vue";

export default defineComponent({
    name: "Store",
    components: { ProductList }
});
</script>