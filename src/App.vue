<script setup lang="ts">
import AboutUs from "./components/AboutUs.vue";
import Header from "./components/Header.vue";
import Landing from "./components/Landing.vue";
import Portfolio from "./components/Portfolio.vue";
import Pricing from "./components/Pricing.vue";
import Footer from "./components/Footer.vue";
import Contact from "./components/Contact.vue";
import Carousel from "./components/Carousel.vue";
</script>

<template>
    <Header />
    <main class="w-full flex flex-col items-center justify-center gap-52">
        <Landing />
        <Portfolio />
        <Carousel />
        <AboutUs />
        <Pricing />
        <Contact />
        <Footer />
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
