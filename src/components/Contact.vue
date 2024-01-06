<script setup lang="ts">
import {ref} from "vue";

const dialog = ref<HTMLDialogElement | null>(null);

const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (!dialog.value) return;
    dialog.value.open = true;
};

const closeDialog = () => {
    if (!dialog.value) return;
    dialog.value.open = false;
};
</script>

<template>
    <section id="contact" class="container flex flex-col items-center justify-center relative">
        <h3 class="text-4xl font-semibold mb-24">Send us a message!</h3>
        <form
            v-on:submit="handleSubmit"
            class="relative py-24 w-[90%] md:w-2/3 lg:w-1/2 flex flex-col gap-4 justify-center items-center bg-orange-200 after:contant-[' '] after:bg-orange-300 after:absolute after:top-[20px] after:bottom-[-20px] after:left-[20px] after:right-[-20px] after:z-[-1]">
            <div class="flex flex-col gap-2 w-2/3 md:w-1/2">
                <!-- <label for="name" class="text-xl font-semibold">Name:</label> -->
                <input id="name" type="text" class="h-10 rounded-md px-2 border border-orange-500" placeholder="Name" />
            </div>
            <div class="flex flex-col gap-2 w-2/3 md:w-1/2">
                <!-- <label for="email" class="text-xl font-semibold">E-mail:</label> -->
                <input id="email" type="email" class="h-10 rounded-md px-2 border border-orange-500" placeholder="E-mail" required />
            </div>
            <div class="flex flex-col gap-2 w-2/3 md:w-1/2">
                <!-- <label for="subject" class="text-xl font-semibold">Subject:</label> -->
                <input id="subject" type="text" class="h-10 rounded-md px-2 border border-orange-500" placeholder="Subject" />
            </div>
            <div class="flex flex-col gap-2 w-2/3 md:w-1/2">
                <!-- <label for="message" class="text-xl font-semibold">Message:</label> -->
                <textarea id="message" rows="10" class="p-2 rounded-md border border-orange-500" placeholder="Your message" required></textarea>
            </div>
            <button
                :class="`relative z-10 text-lg text-white w-1/4 border-2 border-orange-500 bg-orange-500 font-bold p-2 hover:bg-orange-400 focus:border-2 focus:border-orange-600 active:bg-opacity-80
                `">
                Send
            </button>
        </form>
        <dialog ref="dialog" class="border border-orange-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 rounded-lg shadow-lg">
            <div class="w-full h-full flex items-center justify-center flex-col py-8">
                <h4 class="mb-4 text-2xl font-semibold">Thank you!</h4>
                <button
                    v-on:click="closeDialog"
                    :class="`relative  text-lg text-white w-1/4 border-2 border-orange-500 bg-orange-500 font-bold p-2 hover:bg-orange-400 focus:border-2 focus:border-orange-600 active:bg-opacity-80
                    `">
                    Close
                </button>
            </div>
        </dialog>
    </section>
</template>
