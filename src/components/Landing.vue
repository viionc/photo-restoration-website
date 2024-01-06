<script setup lang="ts">
import {ref} from "vue";
import {useIntersectionObserver} from "@vueuse/core";

const bg =
    window.screen.width < 1000
        ? new URL("../assets/background_small.webp", import.meta.url).href
        : new URL("../assets/background.webp", import.meta.url).href;
const img1 = new URL("../assets/collage/collage1.webp", import.meta.url).href;
const img2 = new URL("../assets/collage/collage2.webp", import.meta.url).href;
const img3 = new URL("../assets/collage/collage3.webp", import.meta.url).href;
const img4 = new URL("../assets/collage/collage4.webp", import.meta.url).href;

const intersectionTarget = ref(null);
const isVisable = ref(false);

useIntersectionObserver(intersectionTarget, ([{isIntersecting}]) => {
    isVisable.value = isIntersecting;
});
</script>
<template>
    <section
        id="home"
        class="w-full flex justify-center items-center h-[800px] max-h-[800px] bg-cover bg-center bg-no-repeat mt-20"
        :style="{backgroundImage: `url(${bg})`}">
        <div
            ref="intersectionTarget"
            :class="`container flex gap-20 justify-start h-full items-center transition-all duration-700 ${
                isVisable ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-4'
            }`">
            <div class="flex flex-col gap-8 w-[90%] ms-8 md:ms-0 lg:w-1/2 xl:w-1/3 text-white">
                <h1 class="text-4xl">Photo Restoration Studio</h1>
                <p class="text-xl">
                    Rediscover Your Memories in Every Pixel: Where Timeless Photos Find a New Breath of Life – Welcome to Our Photo Restoration Haven!
                </p>
                <a href="#about"><p class="text-orange-500 font-semibold text-lg hover:ms-4 transition-all duration-500">Learn more about us.</p></a>
            </div>
            <div class="w-1/2 hidden grid-cols-12 grid-rows-8 h-1/3 gap-2 lg:grid">
                <img
                    :src="img1"
                    alt=""
                    class="col-start-6 col-span-3 row-start-3 row-span-3 w-full h-full rounded-md shadow-cyan-800 shadow-md border border-orange-100 hover:scale-110" />
                <img
                    :src="img2"
                    alt=""
                    class="lg:col-start-9 col-span-3 row-start-2 row-span-3 w-full h-full rounded-md shadow-cyan-800 shadow-md border border-orange-100 hover:scale-110" />
                <img
                    :src="img3"
                    alt=""
                    class="lg:col-start-9 col-span-3 row-start-5 row-span-3 w-full h-full rounded-md shadow-cyan-800 shadow-md border border-orange-100 hover:scale-110" />
                <img
                    :src="img4"
                    alt=""
                    class="lg:col-start-6 col-span-3 row-start-6 row-span-3 w-full h-full rounded-md shadow-cyan-800 shadow-md border border-orange-100 hover:scale-110" />
            </div>
        </div>
    </section>
</template>
