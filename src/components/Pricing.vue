<script setup lang="ts">
import {useIntersectionObserver} from "@vueuse/core";
import {ref} from "vue";
const intersectionTarget = ref(null);
const isVisable = ref(false);

useIntersectionObserver(intersectionTarget, ([{isIntersecting}]) => {
    isVisable.value = isIntersecting;
});
</script>

<template>
    <section
        ref="intersectionTarget"
        id="pricing"
        :class="`bg-orange-100 w-full py-20 items-center justify-center flex flex-col transition-all duration-700 ${
            isVisable ? 'opacity-100' : 'opacity-10'
        }`">
        <h2 class="text-2xl font-semibold mb-12 text-cyan-800">Our pricings:</h2>
        <div class="container flex gap-10 flex-wrap justify-center">
            <article
                :class="`relative z-10 w-[300px] border h-[400px]  bg-orange-200 flex items-center flex-col shadow-xl
            after:content-[' '] after:bg-orange-400 after:absolute after:top-[12px] after:bottom-[-12px] after:left-[12px] after:right-[-12px] after:z-[-1] 
            transition-all duration-500 md:delay-1000 ${isVisable ? 'translate-x-0' : '-translate-x-20'}
            `">
                <h3 class="text-xl font-semibold p-3 bg-orange-300 w-full text-center">Basic</h3>
                <ul class="w-full flex flex-col gap-2 pt-2 bg-orange-200">
                    <li class="w-full flex px-4 py-1 justify-between border-b border-orange-400">
                        <span class="font-semibold">Color:</span>
                        <span>No</span>
                    </li>
                    <li class="w-full flex px-4 py-1 justify-between border-b border-orange-400">
                        <span class="font-semibold">Max size:</span>
                        <span>200px x 100px</span>
                    </li>
                    <li class="w-full flex px-4 py-1 justify-between border-b border-orange-400">
                        <span class="font-semibold">AI Help:</span>
                        <span>Yes</span>
                    </li>
                    <li class="w-full flex px-4 py-1 justify-between border-b border-orange-400">
                        <span class="font-semibold">Format:</span>
                        <span>JPG</span>
                    </li>
                    <li class="w-full flex px-4 py-1 justify-between border-b border-orange-400">
                        <span class="font-semibold">Delivery time:</span>
                        <span>Up to 14 days</span>
                    </li>
                </ul>
                <div class="flex items-center justify-center h-full bg-orange-300 w-full">
                    <div class="flex items-end">
                        <p class="text-6xl font-semibold text-cyan-900">50$</p>
                        <p class="text-md font-semibold">/photo</p>
                    </div>
                </div>
            </article>
            <article
                :class="`relative z-10 w-[300px] border h-[400px]  bg-orange-200 flex items-center flex-col shadow-2xl
            after:content-[' '] after:bg-orange-400 after:absolute after:top-[12px] after:bottom-[-12px] after:left-[12px] after:right-[-12px] after:z-[-1]
            transition-all duration-500 md:delay-[500ms] ${isVisable ? 'translate-x-0' : '-translate-x-20'}
            `">
                <h3 class="text-xl font-semibold p-3 bg-orange-300 w-full text-center">Advanced</h3>
                <ul class="w-full flex flex-col gap-2 pt-2 bg-orange-200">
                    <li class="w-full flex px-4 py-1 justify-between border-b border-orange-400">
                        <span class="font-semibold">Color:</span>
                        <span>No</span>
                    </li>
                    <li class="w-full flex px-4 py-1 justify-between border-b border-orange-400">
                        <span class="font-semibold">Max size:</span>
                        <span>400 x 200px</span>
                    </li>
                    <li class="w-full flex px-4 py-1 justify-between border-b border-orange-400">
                        <span class="font-semibold">AI Help:</span>
                        <span>Yes</span>
                    </li>
                    <li class="w-full flex px-4 py-1 justify-between border-b border-orange-400">
                        <span class="font-semibold">Format:</span>
                        <span>PNG</span>
                    </li>
                    <li class="w-full flex px-4 py-1 justify-between border-b border-orange-400">
                        <span class="font-semibold">Delivery time:</span>
                        <span>Up to 7 days</span>
                    </li>
                </ul>
                <div class="flex items-center justify-center h-full bg-orange-300 w-full">
                    <div class="flex items-end">
                        <p class="text-6xl font-semibold text-cyan-900">150$</p>
                        <p class="text-md font-semibold">/photo</p>
                    </div>
                </div>
            </article>
            <article
                :class="`relative z-10 w-[300px] border h-[400px]  bg-orange-200 flex items-center flex-col shadow-2xl
            after:content-[' '] after:bg-orange-400 after:absolute after:top-[12px] after:bottom-[-12px] after:left-[12px] after:right-[-12px] after:z-[-1]
            transition-all duration-500  ${isVisable ? 'translate-x-0' : '-translate-x-20'}
            `">
                <h3 class="text-xl font-semibold p-3 bg-orange-300 w-full text-center">Pro</h3>
                <ul class="w-full flex flex-col gap-2 pt-2 bg-orange-200">
                    <li class="w-full flex px-4 py-1 justify-between border-b border-orange-400">
                        <span class="font-semibold">Color:</span>
                        <span>Yes</span>
                    </li>
                    <li class="w-full flex px-4 py-1 justify-between border-b border-orange-400">
                        <span class="font-semibold">Max size:</span>
                        <span>1000px x 500px</span>
                    </li>
                    <li class="w-full flex px-4 py-1 justify-between border-b border-orange-400">
                        <span class="font-semibold">AI Help:</span>
                        <span>No, 100% manual work</span>
                    </li>
                    <li class="w-full flex px-4 py-1 justify-between border-b border-orange-400">
                        <span class="font-semibold">Format:</span>
                        <span>TIFF and analog print</span>
                    </li>
                    <li class="w-full flex px-4 py-1 justify-between border-b border-orange-400">
                        <span class="font-semibold">Delivery time:</span>
                        <span>Up to 3 days</span>
                    </li>
                </ul>
                <div class="flex items-center justify-center h-full bg-orange-300 w-full">
                    <div class="flex items-end">
                        <p class="text-6xl font-semibold text-cyan-900">250$</p>
                        <p class="text-md font-semibold">/photo</p>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>
