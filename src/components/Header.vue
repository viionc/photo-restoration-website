<script setup lang="ts"></script>

<template>
    <header class="w-full flex justify-center">
        <nav class="container flex gap-12 h-20 items-center">
            <p class="text-2xl">Logo</p>
            <ul class="ms-auto flex text-2xl h-full">
                <li
                    class="h-full px-6 flex items-center justify-center cursor-pointer hover:bg-orange-500 hover:text-white hover:-translate-y-[10%] transition-all">
                    <a href="#home">Home</a>
                </li>
                <li
                    class="h-full px-6 flex items-center justify-center cursor-pointer hover:bg-orange-500 hover:text-white hover:-translate-y-[10%] transition-all">
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li
                    class="h-full px-6 flex items-center justify-center cursor-pointer hover:bg-orange-500 hover:text-white hover:-translate-y-[10%] transition-all">
                    <a href="#about">About us</a>
                </li>
                <li
                    class="h-full px-6 flex items-center justify-center cursor-pointer hover:bg-orange-500 hover:text-white hover:-translate-y-[10%] transition-all">
                    <a href="#pricing">Pricing</a>
                </li>
            </ul>
            <button
                class="text-lg text-white border rounded-md bg-orange-600 font-bold p-2 hover:bg-orange-500 hover:scale-105 focus:border-2 focus:border-orange-600">
                Contact us!
            </button>
        </nav>
    </header>
</template>
