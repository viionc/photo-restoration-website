<script setup lang="ts">
import {ref} from "vue";
const before1 = new URL("../assets/portfolio/before1.png", import.meta.url).href;
const before2 = new URL("../assets/portfolio/before2.png", import.meta.url).href;
const before3 = new URL("../assets/portfolio/before3.png", import.meta.url).href;
const images = [before1, before2, before3];

interface Slider {
    id: number;
    sliderEvent: null | MouseEvent;
}

const sliderId = ref<Slider>({
    id: 0,
    sliderEvent: null,
});

const sliderPositions = ref<Record<number, number>>({
    1: 40,
    2: 40,
    3: 40,
});

const handleSlider = (e: MouseEvent) => {
    if (!sliderId.value.sliderEvent) return;
    const parent = (sliderId.value.sliderEvent.target as HTMLElement).parentElement;
    if (!parent) return;
    const pos = parent.getBoundingClientRect();
    if (e.clientX - pos.left > pos.width || e.clientX - pos.left <= 0) return;
    sliderPositions.value[sliderId.value.id] = e.clientX - pos.left;
};

const startDragging = (e: MouseEvent, id: number) => {
    e.preventDefault();
    sliderId.value = {id, sliderEvent: e};
};
const stopDragging = (e: MouseEvent) => {
    e.preventDefault();
    sliderId.value = {id: 0, sliderEvent: null};
};

window.addEventListener("mousemove", handleSlider);
</script>

<template>
    <section id="portfolio" class="container gap-8 flex flex-col items-center">
        <h2 class="text-2xl font-bold">Check examples of our work:</h2>
        <div class="flex gap-8">
            <article v-for="i = 1 in 3" class="relative h-[300px]">
                <img draggable="false" :src="images[i - 1]" class="select-none h-full" :alt="`portfolio example #${i} before select-none`" />
                <div @dragover.prevent @dragenter.prevent>
                    <div
                        draggable="false"
                        :style="{width: sliderPositions[i] + 'px'}"
                        :class="`select-none z-10 absolute top-0 left-0 bottom-0 h-full bg-[url('./assets/portfolio/after${i}.png')] bg-cover`"></div>
                </div>
                <div
                    v-on:mousedown="(e) => startDragging(e, i)"
                    v-on:mouseup="stopDragging"
                    :style="{left: sliderPositions[i] + 'px'}"
                    class="z-50 absolute top-[-6px] bottom-[-6px] rounded-lg w-3 bg-orange-500 cursor-grab"></div>
            </article>
        </div>
    </section>
</template>
