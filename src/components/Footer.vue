<script setup lang="ts"></script>

<template>
    <footer class="w-full text-white flex gap-8 md:gap-20 justify-center items-center h-16 py-2 bg-zinc-800">
        <p class="text-sm lg:text-lg">Photo Restoration Studio (c)2024</p>
        <div class="flex h-full items-center gap-4 md:gap-4">
            <a href="https://www.linkedin.com/in/marek-stankiewicz-82b04b292/" target="_blank" aria-label="Check my LinkedIn profile.">
                <font-awesome-icon :icon="['fab', 'linkedin']" class="text-4xl hover:scale-110 hover:text-cyan-600 cursor-pointer" />
            </a>
            <a href="https://github.com/viionc" target="_blank" aria-label="Check my GitHub profile.">
                <font-awesome-icon :icon="['fab', 'github']" class="text-4xl hover:scale-110 hover:text-green-600 cursor-pointer" />
            </a>
        </div>
    </footer>
</template>
