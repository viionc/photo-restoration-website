<script setup lang="ts">
const bg =
    window.screen.width < 1000
        ? new URL("../assets/background_small.webp", import.meta.url).href
        : new URL("../assets/background.webp", import.meta.url).href;
</script>
<template>
    <section
        id="home"
        class="w-full flex justify-center items-center h-[800px] bg-cover bg-center bg-no-repeat mt-20"
        :style="{backgroundImage: `url(${bg})`}">
        <div class="container flex gap-20 justify-start">
            <div class="flex flex-col gap-8 w-[90%] ms-8 md:ms-0 lg:w-1/2 xl:w-1/3 text-white">
                <h1 class="text-4xl">Photo Restoration Studio</h1>
                <p class="text-xl">
                    Rediscover Your Memories in Every Pixel: Where Timeless Photos Find a New Breath of Life – Welcome to Our Photo Restoration Haven!
                </p>
                <a href="#about"><p class="text-orange-500 font-semibold text-lg hover:ms-4 transition-all duration-500">Learn more about us.</p></a>
            </div>
        </div>
    </section>
</template>
