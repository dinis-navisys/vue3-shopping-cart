<template>
  <nav
    class="flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-black shadow sm:items-baseline w-full"
  >
    <div class="mb-2 sm:mb-0">
      <router-link
        to="/"
        class="text-2xl no-underline text-blue-50 hover:text-blue-dark"
        >ESHOP</router-link
      >
    </div>
    <div>
      <router-link
        to="/store"
        class="text-lg no-underline text-blue-50 hover:text-blue-dark ml-2"
        >Store</router-link
      >
      <router-link
        to="/cart"
        class="text-lg no-underline text-blue-50 hover:text-blue-dark ml-2"
        >Cart</router-link
      >
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Navbar",
};
</script>

<style>
/* .active is from routes/index.ts */
nav .active {
  border-bottom: 2px solid white;
}
</style>
