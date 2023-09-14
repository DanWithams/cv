<script setup>

import PageHeading from "./PageHeading.vue";

const props = defineProps({
    heading: {
        type: String,
        default: '',
    }
});

</script>

<template>
    <div class="py-24 mb-6">
        <PageHeading>
            <slot name="heading">
                {{ heading }}
            </slot>
        </PageHeading>
        <slot name="default"></slot>
    </div>
</template>

<style scoped>

</style>
