<script setup lang="ts">
import {ref} from "vue";

const img1 = new URL("../assets/carousel/1.webp", import.meta.url).href;
const img2 = new URL("../assets/carousel/2.webp", import.meta.url).href;
const img3 = new URL("../assets/carousel/3.webp", import.meta.url).href;
const img4 = new URL("../assets/carousel/4.webp", import.meta.url).href;
const arrowLeft = new URL("../assets/icons/arrowLeft.svg", import.meta.url).href;
const arrowRight = new URL("../assets/icons/arrowRight.svg", import.meta.url).href;
const images = [img1, img2, img3, img4];
const currentImageIndex = ref(1);

const forwards = () => {
    currentImageIndex.value = currentImageIndex.value + 1 > images.length ? 1 : currentImageIndex.value + 1;
};

const backwards = () => {
    currentImageIndex.value = currentImageIndex.value - 1 === 0 ? images.length : currentImageIndex.value - 1;
};

const handleDotClick = (index: number) => {
    currentImageIndex.value = index;
};

setInterval(() => {
    forwards();
}, 3000);
</script>

<template>
    <section class="w-full flex justify-center bg-orange-100 py-12">
        <div class="container flex flex-col gap-8 justify-center items-center">
            <article class="flex w-full justify-center h-[400px] gap-4">
                <div class="w-12 h-full flex items-center justify-center">
                    <img
                        :src="arrowLeft"
                        class="p-2 bg-orange-100 rounded-md cursor-pointer hover:scale-105 hover:bg-orange-200"
                        v-on:click="backwards" />
                </div>
                <div class="w-1/2 flex justify-center">
                    <img
                        v-for="i in images.length"
                        loading="lazy"
                        :src="images[i - 1]"
                        :class="`h-full w-full object-cover ${currentImageIndex === i ? 'block' : 'hidden'}`" />
                </div>
                <div class="w-12 h-full flex items-center justify-center">
                    <img
                        :src="arrowRight"
                        class="p-2 bg-orange-100 rounded-md cursor-pointer hover:scale-105 hover:bg-orange-200"
                        v-on:click="forwards" />
                </div>
            </article>
            <div class="flex justify-center items-center gap-3">
                <span
                    v-for="i in images.length"
                    v-on:click="() => handleDotClick(i)"
                    :class="`rounded-full 
                ${currentImageIndex === i ? 'bg-orange-500 h-8 w-8' : 'bg-orange-300 h-6 w-6 hover:scale-125 cursor-pointer  '}`"></span>
            </div>
        </div>
    </section>
</template>