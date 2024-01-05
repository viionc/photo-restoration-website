<template>
    <header class="z-[100] w-full flex justify-center top-0 left-0 bg-white fixed border-b border-black shadow-md bg-opacity-90">
        <nav class="container flex gap-12 h-20 items-center">
            <p class="text-2xl">Logo</p>
            <ul class="ms-auto flex text-2xl h-full">
                <li class="h-full px-6 cursor-pointer hover:bg-orange-500 hover:text-white hover:-translate-y-[10%] transition-all">
                    <a href="#home" class="h-full w-full flex items-center justify-center">Home</a>
                </li>
                <li class="h-full px-6 cursor-pointer hover:bg-orange-500 hover:text-white hover:-translate-y-[10%] transition-all">
                    <a href="#portfolio" class="h-full w-full flex items-center justify-center">Portfolio</a>
                </li>
                <li class="h-full px-6 cursor-pointer hover:bg-orange-500 hover:text-white hover:-translate-y-[10%] transition-all">
                    <a href="#about" class="h-full w-full flex items-center justify-center">About us</a>
                </li>
                <li class="h-full px-6 cursor-pointer hover:bg-orange-500 hover:text-white hover:-translate-y-[10%] transition-all">
                    <a href="#pricing" class="h-full w-full flex items-center justify-center">Pricing</a>
                </li>
            </ul>
            <button
                class="text-lg text-white border rounded-md bg-orange-600 font-bold p-2 hover:bg-orange-500 hover:scale-105 focus:border-2 focus:border-orange-600 active:bg-opacity-80">
                Contact us!
            </button>
        </nav>
    </header>
</template>
