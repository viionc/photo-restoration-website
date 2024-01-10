<script setup lang="ts">
import {ref} from "vue";

const burger = new URL("../assets/icons/burger.svg", import.meta.url).href;
const close = new URL("../assets/icons/close.svg", import.meta.url).href;
const open = ref(false);
const handleNavbar = () => {
    if (window.screen.width > 768) return;
    open.value = !open.value;
};
</script>
<template>
    <header :class="`z-[100] w-full flex justify-center top-0 left-0 bg-white fixed border-b border-orange-500 shadow-lg bg-opacity-90`">
        <nav class="container flex gap-2 xl:gap-12 h-20 items-center px-2">
            <button class="me-auto md:me-0">
                <img src="/logo.webp" alt="Photo Restoration Studio" class="h-16 w-20 border rounded-lg border-orange-500" />
            </button>
            <button>
                <img :src="burger" alt="open navbar" :class="`block md:hidden w-16 h-16  `" v-on:click="handleNavbar" loading="lazy" />
            </button>
            <img
                :src="close"
                alt="open navbar"
                :class="`absolute top-2 right-2 w-16 h-16 z-[10000] ${open ? 'block' : 'hidden'} `"
                loading="lazy"
                v-on:click="handleNavbar" />
            <ul
                :class="`ms-0 lg:ms-auto text-xl lg:text-4xl w-full lg:w-auto top-0 flex h-[100dvh] md:h-full absolute  z-[1000] flex-col 
                justify-center items-center transition-all duration-300 ease-in-out font-semibold
                md:static md:flex-row ${open ? 'left-0  bg-white' : 'left-[-600px]'}`">
                <li class="h-full px-6 cursor-pointer hover:bg-orange-500 hover:text-white hover:-translate-y-[10%] transition-all w-full md:w-auto">
                    <a href="#home" class="h-full w-full flex items-center justify-center" v-on:click="handleNavbar">Home</a>
                </li>
                <li class="h-full px-6 cursor-pointer hover:bg-orange-500 hover:text-white hover:-translate-y-[10%] transition-all w-full md:w-auto">
                    <a href="#portfolio" class="h-full w-full flex items-center justify-center" v-on:click="handleNavbar">Portfolio</a>
                </li>
                <li class="h-full px-6 cursor-pointer hover:bg-orange-500 hover:text-white hover:-translate-y-[10%] transition-all w-full md:w-auto">
                    <a href="#about" class="h-full w-full flex items-center justify-center" v-on:click="handleNavbar">About us</a>
                </li>
                <li class="h-full px-6 cursor-pointer hover:bg-orange-500 hover:text-white hover:-translate-y-[10%] transition-all w-full md:w-auto">
                    <a href="#pricing" class="h-full w-full flex items-center justify-center" v-on:click="handleNavbar">Pricing</a>
                </li>
                <li class="h-full px-6 cursor-pointer hover:bg-orange-500 hover:text-white hover:-translate-y-[10%] transition-all w-full md:w-auto">
                    <a href="#faq" class="h-full w-full flex items-center justify-center" v-on:click="handleNavbar">F.A.Q.</a>
                </li>
            </ul>
            <button
                :class="`relative text-md lg:text-lg text-white border bg-orange-500 font-bold p-2 hover:bg-orange-400  focus:border-2 focus:border-orange-600 active:bg-opacity-80
                after:content-[' '] after:bg-orange-300 after:absolute after:top-[8px] after:bottom-[-8px] after:left-[8px] after:right-[-8px] after:z-[-1] after:hover:z-[-1]
                ms-auto md:ms-0
                `">
                <a href="#contact">Contact us!</a>
            </button>
        </nav>
    </header>
</template>
