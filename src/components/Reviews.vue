<script setup lang="ts">
const person1 = new URL("../assets/reviews/person1.webp", import.meta.url).href;
const person2 = new URL("../assets/reviews/person2.webp", import.meta.url).href;
const person3 = new URL("../assets/reviews/person3.webp", import.meta.url).href;
</script>

<template>
    <section class="container flex flex-col items-center">
        <h3 class="text-2xl mb-12 font-semibold">Recent Reviews:</h3>
        <div class="flex justify-center items-center flex-wrap gap-12">
            <article class="w-[300px] hover:scale-105">
                <img :src="person1" alt="review #1" class="h-20 w-20 rounded-lg float-left me-2 mb-2" />
                <h4 class="text-xl font-semibold mb-4">Grace W.</h4>
                <p class="text-justify">
                    "Absolutely incredible service! I entrusted Photo Restoration Store with restoring a vintage family photo that was almost beyond
                    recognition. The result brought tears to my eyes – they not only revived the image but also preserved the nostalgia and warmth of
                    that moment. "
                </p>
            </article>
            <article class="w-[300px] hover:scale-105">
                <img :src="person2" alt="review #2" class="h-20 w-20 rounded-lg float-left me-2 mb-2" />
                <h4 class="text-xl font-semibold mb-4">Alex M.</h4>
                <p class="text-justify">
                    "Great experience with Photo Restoration Store! The online process was straightforward, and the team was quick to respond to my
                    queries. I sent in a damaged wedding photo, and the restoration exceeded my expectations. The colors were vibrant, and the fine
                    details were meticulously restored. "
                </p>
            </article>
            <article class="w-[300px] hover:scale-105">
                <img :src="person3" alt="review #3" class="h-20 w-20 rounded-lg float-left me-2 mb-2" />
                <h4 class="text-xl font-semibold mb-4">Emily J.</h4>
                <p class="text-justify">
                    "I can't express how thrilled I am with the photo restoration services at Photo Restoration Store. I had an old, torn picture of
                    my grandparents that I thought was beyond repair. The team not only repaired the damage but also enhanced the overall clarity
                    without compromising the vintage charm. Highly recommended!"
                </p>
            </article>
        </div>
    </section>
</template>
