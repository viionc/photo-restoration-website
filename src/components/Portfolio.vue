<script setup lang="ts">
import {ref} from "vue";
const before1 = new URL("../assets/portfolio/before1.webp", import.meta.url).href;
const before2 = new URL("../assets/portfolio/before2.webp", import.meta.url).href;
const before3 = new URL("../assets/portfolio/before3.webp", import.meta.url).href;
const after1 = new URL("../assets/portfolio/after1.webp", import.meta.url).href;
const after2 = new URL("../assets/portfolio/after2.webp", import.meta.url).href;
const after3 = new URL("../assets/portfolio/after3.webp", import.meta.url).href;
const beforeImages = [before1, before2, before3];
const afterIamges = [after1, after2, after3];

interface Slider {
    id: number;
    sliderEvent: null | MouseEvent | TouchEvent;
}

const clickedSlider = ref<Slider>({
    id: 0,
    sliderEvent: null,
});

const sliderPositions = ref<Record<number, number>>({
    1: 95,
    2: 220,
    3: 110,
});

const handleSlider = (e: MouseEvent | TouchEvent) => {
    if (!clickedSlider.value.sliderEvent) return;
    const parent = (clickedSlider.value.sliderEvent.target as HTMLElement).parentElement; //yes
    if (!parent) return;
    const pos = parent.getBoundingClientRect();
    const x = (e as MouseEvent).clientX ? (e as MouseEvent).clientX : (e as TouchEvent).touches[0].clientX;
    changePosition(x, pos);
};

const changePosition = (x: number, pos: DOMRect) => {
    if (x - pos.left > pos.width - 12 || x - pos.left <= 0) return;
    sliderPositions.value[clickedSlider.value.id] = x - pos.left;
};

const startDragging = (e: MouseEvent | TouchEvent, id: number) => {
    e.preventDefault();
    window.addEventListener("mousemove", handleSlider);
    window.addEventListener("touchmove", handleSlider);
    clickedSlider.value = {id, sliderEvent: e};
};
const stopDragging = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    window.removeEventListener("mousemove", handleSlider);
    window.removeEventListener("touchmove", handleSlider);
    clickedSlider.value = {id: 0, sliderEvent: null};
};
</script>

<template>
    <section id="portfolio" class="container gap-8 flex flex-col items-center">
        <h2 class="text-2xl font-bold">Check examples of our work:</h2>
        <div class="flex gap-8 flex-wrap justify-center">
            <article v-for="i = 1 in 3" class="relative h-[300px] max-w-[90%]">
                <img draggable="false" :src="beforeImages[i - 1]" class="select-none h-full" :alt="`portfolio example #${i} before select-none`" />
                <div
                    draggable="false"
                    :style="{width: sliderPositions[i] + 'px', backgroundImage: `url(${afterIamges[i - 1]})`}"
                    :class="`select-none z-10 absolute top-0 left-0 bottom-0 h-full bg-cover bg-no-repeat `"></div>
                <div
                    v-on:mousedown="(e) => startDragging(e, i)"
                    v-on:mouseup="stopDragging"
                    v-on:touchstart="(e) => startDragging(e, i)"
                    v-on:touchend="stopDragging"
                    :style="{left: `${sliderPositions[i]}px`, cursor: `${clickedSlider.id ? 'grabbing' : 'grab'}`}"
                    class="z-50 absolute top-[-6px] bottom-[-6px] rounded-lg w-3 bg-orange-500 cursor-grab"></div>
            </article>
        </div>
    </section>
</template>
