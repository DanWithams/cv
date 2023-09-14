<script setup>
import { useAppStore } from "../stores/appStore.js";

const appStore = useAppStore();

</script>

<template>
    <div :class="{ 'dark': appStore.darkMode }" v-cloak>
        <div class="flex flex-row justify-center bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-200 min-h-[100vh]">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
