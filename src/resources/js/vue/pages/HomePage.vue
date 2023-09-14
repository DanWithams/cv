<script setup>
import AppHeader from "../components/AppHeader.vue";
import {ref} from "vue";
import TagCloud from "../components/TagCloud.vue";
import PageSection from "../components/PageSection.vue";
import {scrollToElement} from "../../navigation/scroll.js";
import ChevronDoubleDown from "../icons/ChevronDoubleDown.vue";
import ContactForm from "../components/ContactForm.vue";

const tags = ref([
    'Developer',
    'Full Stack',
    'SCRUM Master',
    'Systems Designer',
    'Database Administrator',
    'Code Champion',
    'Information Architect',
    'Contributor',
    'Internet of Things',
    'Big Data',
    'Cryptography',
    'Scalability',
    'Test Drive Development',
    'Continuous Integration',
    'Rapid Iteration Development',
    'Rapid Iteration Development',
    'Open Source',
    'PHP',
    'JavaScript',
    'CSS',
    'HTML5',
    'VueJS',
    'React',
]);

</script>

<template>
    <AppHeader class="sticky top-0"></AppHeader>

    <div class="pb-32">
        <TagCloud class="h-[80vh]" :tags="tags">
            <div class="absolute z-40 top-[40%] left-0 right-0 flex flex-col justify-center items-center">
                <div class="bg-zinc-800 bg-opacity-75 text-6xl uppercase">
                    Hello World! <div class="text-teal-400">I'm Dan.</div>
                </div>
            </div>
        </TagCloud>
        <div class="flex flex-row justify-center text-teal-400 mb-10">
            <ChevronDoubleDown class="w-16 h-16 animate-pulse cursor-pointer" @click="scrollToElement('#about')"></ChevronDoubleDown>
        </div>
        <div>
            <PageSection id="about" heading="About">
                <p>Donec faucibus sagittis nunc non lobortis. Mauris eros turpis, sodales quis lorem eu, luctus aliquam nisl. Nam quis faucibus nulla, in finibus nunc. Phasellus dapibus venenatis ultricies. Proin non sem orci. Nunc egestas interdum purus auctor pulvinar. Morbi non neque id tellus facilisis convallis. Quisque laoreet felis eget placerat posuere.</p>
            </PageSection>
            <PageSection id="skills" heading="Skills">
                <p>Donec faucibus sagittis nunc non lobortis. Mauris eros turpis, sodales quis lorem eu, luctus aliquam nisl. Nam quis faucibus nulla, in finibus nunc. Phasellus dapibus venenatis ultricies. Proin non sem orci. Nunc egestas interdum purus auctor pulvinar. Morbi non neque id tellus facilisis convallis. Quisque laoreet felis eget placerat posuere.</p>
            </PageSection>
            <PageSection id="porfolio" heading="Portfolio">
                <p>Donec faucibus sagittis nunc non lobortis. Mauris eros turpis, sodales quis lorem eu, luctus aliquam nisl. Nam quis faucibus nulla, in finibus nunc. Phasellus dapibus venenatis ultricies. Proin non sem orci. Nunc egestas interdum purus auctor pulvinar. Morbi non neque id tellus facilisis convallis. Quisque laoreet felis eget placerat posuere.</p>
            </PageSection>
            <ContactForm></ContactForm>
        </div>
    </div>

</template>
