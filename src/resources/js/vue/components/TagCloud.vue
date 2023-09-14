<script setup>
import {computed, onMounted, ref, watch} from "vue";

const props = defineProps({
    tags: {
        type: Array,
        required: true,
    }
});

function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomPosition = () => {
    return {
        top: getRandomInteger(5, 90),
        left: getRandomInteger(5, 90),
    };
};

const toStyle = ({top, left}) => {
    return {
        top: top + '%',
        left: left + '%',
    };
};

const tagsList = ref([]);

watch(
    () => props.tags,
    () => tagsList.value = props.tags.map(tag => ({ name: tag, classList: 'opacity-0', style: toStyle(randomPosition()) })),
    { immediate: true }
);

const getRandomItem = (array) => {
    return array[getRandomInteger(0, array.length - 1)];
}

onMounted(() => {
    setInterval(() => {
        const item = getRandomItem(tagsList.value);
        item.classList = 'opacity-100';
        item.style = toStyle(randomPosition())
        setTimeout(() => item.classList = 'opacity-0', 3000);
    }, 750);
});

</script>

<template>
    <div class="relative">
        <slot name="default"></slot>
        <div v-for="tag in tagsList" class="absolute z-10 text-4xl text-teal-700 transition-opacity duration-1000 bg-zinc-800 bg-opacity-75 rounded-2xl" :class="tag.classList" :style="tag.style">{{ tag.name }}</div>
    </div>
</template>

<style scoped>

</style>
