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
        id="about"
        :class="`container flex justify-center flex-col items-center gap-20 transition-all duration-700 ${isVisable ? 'opacity-100' : 'opacity-10'}`">
        <article class="flex flex-col justify-center w-[90%] md:w-2/3 items-center">
            <h3 class="text-2xl font-semibold mb-8">About Our Photo Restoration Studio</h3>
            <p class="text-xl w-full md:w-3/4 leading-9">
                Welcome to Photo Restoration Studio, where cherished memories are given a new lease on life through the art of photo restoration. We
                understand the sentimental value that each photograph holds, and our mission is to preserve those precious moments for generations to
                come.
            </p>
        </article>
        <article class="flex flex-col justify-center w-[90%] md:w-2/3 items-center">
            <h3 class="text-2xl font-semibold mb-8">Our Passion</h3>
            <p class="text-xl w-full md:w-3/4 leading-9">
                At the heart of our photo restoration studio is a team of passionate professionals with a shared love for photography and a commitment
                to excellence. We believe that every photograph tells a unique story, and our goal is to breathe new life into images that may have
                faded with time or been damaged by the years.
            </p>
        </article>
        <article class="flex flex-col justify-center w-[90%] md:w-2/3 items-center">
            <h3 class="text-2xl font-semibold mb-8">Expertise and Craftsmanship</h3>
            <p class="text-xl w-full md:w-3/4 leading-9">
                Backed by years of experience and a keen eye for detail, our skilled artisans utilize cutting-edge technology and traditional
                restoration techniques to meticulously repair, enhance, and revitalize your treasured photos. Whether it's a vintage family portrait
                or a snapshot capturing a milestone, we take pride in restoring each image with precision and care.
            </p>
        </article>
        <article
            class="py-24 relative flex flex-col items-center w-[90%] md:w-2/3 after:content=[' '] after:absolute after:top-0 after:left-[-2000px] after:right-[-2000px] after:bottom-0 after:bg-orange-100 after:bg-opacity-75">
            <h3 class="z-10 text-2xl font-semibold mb-24">Why Choose Us?</h3>
            <div class="z-10 flex flex-wrap justify-center gap-8">
                <div class="group flex flex-col items-center md:items-start w-[90%] md:w-[400px] gap-3">
                    <h4 class="group-hover:ms-4 transition-all duration-500 text-2xl font-semibold">Quality Assurance</h4>
                    <p class="leading-8 text-lg">
                        We are dedicated to delivering the highest quality photo restoration services. Your satisfaction is our priority, and we
                        ensure that every restored image meets our stringent standards.
                    </p>
                </div>
                <div class="group flex flex-col items-center md:items-start w-[90%] md:w-[400px] gap-3">
                    <h4 class="group-hover:ms-4 transition-all duration-500 text-2xl font-semibold">Preserving History</h4>
                    <p class="leading-8 text-lg">
                        We understand the historical and emotional significance of your photographs. Our team is committed to preserving not just
                        images but the stories and memories they hold.
                    </p>
                </div>
                <div class="group flex flex-col items-center md:items-start w-[90%] md:w-[400px] gap-3">
                    <h4 class="group-hover:ms-4 transition-all duration-500 text-2xl font-semibold">Easy Online Process</h4>
                    <p class="leading-8 text-lg">
                        Our user-friendly online platform makes it convenient for you to upload your photos and receive beautifully restored images
                        from the comfort of your home.
                    </p>
                </div>
                <div class="group flex flex-col items-center md:items-start w-[90%] md:w-[400px] gap-3">
                    <h4 class="group-hover:ms-4 transition-all duration-500 text-2xl font-semibold">Customized Solutions</h4>
                    <p class="leading-8 text-lg">
                        Every photo is unique, and so are our restoration solutions. We offer personalized services tailored to the specific needs of
                        each image.
                    </p>
                </div>
            </div>
        </article>
        <article class="flex flex-col justify-center w-[90%] md:w-2/3 items-center">
            <h3 class="text-2xl font-semibold mb-8">Join Us in Preserving Memories</h3>
            <p class="text-xl w-full md:w-3/4 leading-9">
                Whether you have a faded family portrait, a vintage wedding snapshot, or a cherished moment captured on film, Photo Restoration Studio
                is here to transform and preserve those memories. We invite you to explore our services, connect with our passionate team, and embark
                on a journey to rediscover the timeless beauty of your photographs.
            </p>
        </article>
    </section>
</template>
