<script setup>

import HeaderItem from "./HeaderItem.vue";
import {scrollToTop, scrollToElement} from "../../navigation/scroll.js";
import AppButton from "./AppButton.vue";


</script>

<template>
    <div class="absolute p-6 flex flex-row justify-around items-center bg-zinc-800 z-50">
        <div class="text-xl leading-4 cursor-pointer" @click="scrollToTop">
            <div>DAN</div>
            <div class="text-teal-400">WITHAMS</div>
        </div>
        <div class="uppercase">
            <HeaderItem @click="scrollToTop">
                Home
            </HeaderItem>
        </div>
        <div class="uppercase">
            <HeaderItem @click="scrollToElement('#about')">
                About
            </HeaderItem>
        </div>
        <div class="uppercase">
            <HeaderItem @click="scrollToElement('#skills')">
                Skills
            </HeaderItem>
        </div>
        <div class="uppercase">
            <HeaderItem @click="scrollToElement('#portfolio')">
                Portfolio
            </HeaderItem>
        </div>
        <div class="uppercase">
            <AppButton @click="scrollToElement('#contact')">
                Contact
            </AppButton>
        </div>
    </div>
</template>

<style scoped>

</style>
