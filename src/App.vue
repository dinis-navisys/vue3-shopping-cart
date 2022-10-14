<script lang="ts">
import Navbar from "./components/shared/Navbar.vue";
import { defineComponent } from 'vue';

export default defineComponent({
    name: "App",
    components: {
        Navbar
    }
})
</script>

<template>
    <Navbar />
    <router-view />
</template>
