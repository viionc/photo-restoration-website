<script setup lang="ts">
import {useIntersectionObserver} from "@vueuse/core";
import {ref} from "vue";
const plus = new URL("../assets/icons/plus.svg", import.meta.url).href;

const intersectionTarget = ref(null);
const isVisable = ref(false);
const clickedQuestion = ref<HTMLElement | null>(null);

useIntersectionObserver(intersectionTarget, ([{isIntersecting}]) => {
    isVisable.value = isIntersecting;
});

const handleAccordion = (e: MouseEvent) => {
    if (clickedQuestion.value?.classList.contains("open")) {
        clickedQuestion.value.classList.remove("open");
        if (clickedQuestion.value === e.target) return;
    }
    const target = e.target as HTMLElement;
    clickedQuestion.value = target;
    clickedQuestion.value.classList.add("open");
};
</script>

<template>
    <section
        id="faq"
        ref="intersectionTarget"
        :class="`w-full flex justify-center bg-orange-100 py-12 transition-all duration-700 ${isVisable ? 'opacity-100' : 'opacity-10'}`">
        <article class="container">
            <h2 class="text-2xl font-semibold mb-12 text-cyan-800 text-center">Frequently Asked Questions</h2>
            <ul class="md:w-2/3 mx-auto p-4">
                <li class="cursor-pointer" v-on:click="(e) => handleAccordion(e)">
                    <div class="title flex gap-2 bg-orange-300 p-4 border border-orange-400 items-center justify-between">
                        <h3 class="text-2xl font-semibold text-cyan-950">
                            1. Do you offer rush services for customers who need their photos restored urgently?
                        </h3>
                        <img :src="plus" alt="" class="w-6 h-6 transition-transform duration-1000" />
                    </div>
                    <div
                        class="question-wrapper px-4 bg-orange-200 border-x border-orange-400 cursor-default"
                        v-on:click="(e) => e.stopPropagation()">
                        <p class="text-xl text-pretty">
                            Yes, at Photo Restoration Studio, we understand that some memories are more time-sensitive. We provide rush services for
                            customers who need expedited photo restoration. Contact our customer support, and we'll do our best to accommodate your
                            timeline while maintaining the highest quality standards in restoration.
                        </p>
                    </div>
                </li>
                <li class="cursor-pointer" v-on:click="(e) => handleAccordion(e)">
                    <div class="title flex gap-2 bg-orange-300 p-4 border border-orange-400 items-center justify-between">
                        <h3 class="text-2xl font-semibold text-cyan-950">2. What types of photos can be restored by your studio?</h3>
                        <img :src="plus" alt="" class="w-6 h-6 transition-transform duration-1000" />
                    </div>
                    <div
                        class="question-wrapper px-4 bg-orange-200 border-x border-orange-400 cursor-default"
                        v-on:click="(e) => e.stopPropagation()">
                        <p class="text-xl text-pretty">
                            Photo Restoration Studio specializes in restoring a wide range of photos, including vintage prints, torn or damaged
                            pictures, faded images, and even digital photographs. Whether it's a family portrait, wedding photo, or a snapshot from
                            years past, we have the expertise to bring it back to life.
                        </p>
                    </div>
                </li>
                <li class="cursor-pointer" v-on:click="(e) => handleAccordion(e)">
                    <div class="title flex gap-2 bg-orange-300 p-4 border border-orange-400 items-center justify-between">
                        <h3 class="text-2xl font-semibold text-cyan-950">
                            3. Are there specific types of damage that your photo restoration services can address?
                        </h3>
                        <img :src="plus" alt="" class="w-6 h-6 transition-transform duration-1000" />
                    </div>
                    <div
                        class="question-wrapper px-4 bg-orange-200 border-x border-orange-400 cursor-default"
                        v-on:click="(e) => e.stopPropagation()">
                        <p class="text-xl text-pretty">
                            Absolutely. Photo Restoration Studio specializes in addressing various types of damage, including tears, creases,
                            discoloration, and water damage. Our skilled artisans use advanced techniques to carefully repair and restore your photos,
                            ensuring that the unique challenges presented by different forms of damage are expertly handled.
                        </p>
                    </div>
                </li>
                <li class="cursor-pointer" v-on:click="(e) => handleAccordion(e)">
                    <div class="title flex gap-2 bg-orange-300 p-4 border border-orange-400 items-center justify-between">
                        <h3 class="text-2xl font-semibold text-cyan-950">
                            4. How can I trust the security of my photos when submitting them online?
                        </h3>
                        <img :src="plus" alt="" class="w-6 h-6 transition-transform duration-1000" />
                    </div>
                    <div
                        class="question-wrapper px-4 bg-orange-200 border-x border-orange-400 cursor-default"
                        v-on:click="(e) => e.stopPropagation()">
                        <p class="text-xl text-pretty">
                            At Photo Restoration Studio, we take the security and privacy of your photos seriously. Our online platform is encrypted
                            to ensure the confidentiality of your images. Rest assured that your files are handled with the utmost care, and we have
                            implemented secure protocols to safeguard your valuable memories.
                        </p>
                    </div>
                </li>
                <li class="cursor-pointer" v-on:click="(e) => handleAccordion(e)">
                    <div class="title flex gap-2 bg-orange-300 p-4 border border-orange-400 items-center justify-between">
                        <h3 class="text-2xl font-semibold text-cyan-950">
                            5. What sets Photo Restoration Studio apart from other photo restoration services?
                        </h3>
                        <img :src="plus" alt="" class="w-6 h-6 transition-transform duration-1000" />
                    </div>
                    <div
                        class="question-wrapper px-4 bg-orange-200 border-x border-orange-400 cursor-default"
                        v-on:click="(e) => e.stopPropagation()">
                        <p class="text-xl text-pretty">
                            What makes us stand out is our passion for both photography and preserving memories. Our team of skilled artisans combines
                            cutting-edge technology with traditional restoration techniques, ensuring a meticulous and personalized approach to every
                            project. We are dedicated to delivering not just restored photos but cherished moments with a touch of artistry.
                        </p>
                    </div>
                </li>
            </ul>
        </article>
    </section>
</template>

<style scoped>
.question-wrapper {
    display: grid;
    grid-template-rows: 0fr;
    transition: all 333ms ease-in-out;
}

li.open .question-wrapper {
    grid-template-rows: 1fr;
    padding: 1rem 1rem;
}
li.open .title img {
    transform: rotate(405deg);
}
h3,
.title {
    pointer-events: none;
}
p {
    overflow: hidden;
}
</style>
