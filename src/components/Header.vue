<template>
    <header :class="`z-[100] w-full flex justify-center top-0 left-0 bg-white fixed border-b border-orange-500 shadow-lg bg-opacity-90`">
        <nav class="container flex gap-12 h-20 items-center">
            <img src="/logo.webp" alt="Photo Restoration Studio" class="h-16 border rounded-lg border-orange-500" />
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
                :class="`relative text-lg text-white border bg-orange-500 font-bold p-2 hover:bg-orange-400  focus:border-2 focus:border-orange-600 active:bg-opacity-80
                after:content-[' '] after:bg-orange-300 after:absolute after:top-[8px] after:bottom-[-8px] after:left-[8px] after:right-[-8px] after:z-[-1] after:hover:z-[-1]
                `">
                <a href="#contact">Contact us!</a>
            </button>
        </nav>
    </header>
</template>
