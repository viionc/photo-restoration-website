<script setup lang="ts">
import Header from "./components/Header.vue";
import Landing from "./components/Landing.vue";
import Portfolio from "./components/Portfolio.vue";
</script>

<template>
    <Header />
    <main class="w-full flex flex-col items-center justify-center gap-12">
        <Landing />
        <Portfolio />
    </main>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
