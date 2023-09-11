<script setup>
import { ref } from "vue";
import { useAppStore } from "../../stores/appStore.js";

const store = useAppStore();
const foo = ref('Hello World');

const toggleDarkMode = () => {
    store.toggle();
};

</script>

<template>
    Home Page: {{ foo }}
    <button @click="toggleDarkMode">
        Toggle Dark Mode
    </button>
    [{{ store.darkMode ? 'Y' : 'N' }}]
</template>
