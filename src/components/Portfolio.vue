<script setup lang="ts">
import {ref} from "vue";
const before1 = new URL("../assets/portfolio/before1.png", import.meta.url).href;
const before2 = new URL("../assets/portfolio/before2.png", import.meta.url).href;
const before3 = new URL("../assets/portfolio/before3.png", import.meta.url).href;

const sliderPositions = ref<Record<number, number>>({
    1: 40,
    2: 40,
    3: 40,
});

const handleSlider = (e: DragEvent, id: number) => {
    const parent = (e.target as HTMLElement).parentElement;
    if (!parent) return;
    const pos = parent.getBoundingClientRect();
    if (e.clientX - pos.left > pos.width || e.clientX - pos.left <= 0) return;
    sliderPositions.value[id] = e.clientX - pos.left;
    console.log(pos);
};

const dragStart = (e: DragEvent, id: number) => {
    window.addEventListener("", () => handleSlider(e, id));
};
</script>

<template>
    <section id="portfolio" class="container gap-8 flex flex-col items-center">
        <h2 class="text-2xl font-bold">Check examples of our work:</h2>
        <div class="flex gap-8">
            <article class="relative h-[300px]">
                <img draggable="false" :src="before1" class="pointer-events-none select-none h-full" alt="portfolio example #1 before select-none" />
                <span
                    draggable="false"
                    :style="{width: sliderPositions[1] + 'px'}"
                    class="pointer-events-none select-none z-10 absolute top-0 left-0 bottom-0 h-full bg-[url('./assets/portfolio/after1.png')] bg-cover"></span>
                <span
                    draggable
                    v-on:dragstart="(e) => dragStart(e, 1)"
                    :style="{left: sliderPositions[1] + 'px'}"
                    class="z-50 absolute top-[-6px] bottom-[-6px] rounded-lg w-3 bg-orange-500 cursor-grab"></span>
            </article>
            <article class="relative h-[300px]">
                <img draggable="false" :src="before2" class="select-none h-full" alt="portfolio example #1 before select-none" />
                <span
                    draggable="false"
                    :style="{width: sliderPositions[2] + 'px'}"
                    class="select-none z-10 absolute top-0 left-0 bottom-0 h-full bg-[url('./assets/portfolio/after2.png')]"></span>
                <span
                    draggable
                    v-on:click="(e) => e.preventDefault()"
                    v-on:drag="(e) => handleSlider(e, 2)"
                    :style="{left: sliderPositions[2] + 'px'}"
                    class="z-50 absolute top-[-6px] bottom-[-6px] rounded-lg w-3 bg-orange-500 cursor-grab"></span>
            </article>

            <article class="relative h-[300px]">
                <img draggable="false" :src="before3" class="select-none h-full" alt="portfolio example #3 before select-none" />
                <span
                    draggable="false"
                    :style="{width: sliderPositions[3] + 'px'}"
                    class="select-none z-10 h-full absolute top-0 left-0 bg-[url('./assets/portfolio/after3.png')] bg-cover"></span>
                <span
                    draggable
                    v-on:click="(e) => e.preventDefault()"
                    v-on:drag="(e) => handleSlider(e, 3)"
                    :style="{left: sliderPositions[3] + 'px'}"
                    class="z-50 absolute top-[-6px] bottom-[-6px] rounded-lg w-3 bg-orange-500 cursor-grab"></span>
            </article>
        </div>
    </section>
</template>
