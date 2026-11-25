<script setup>
import { nextTick, onBeforeUnmount, onMounted, watch } from 'vue';
import AboutPage from './components/AboutPage.vue';
import HomePage from './components/HomePage.vue';
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';
import { useLandingStore } from './stores/landing';

const store = useLandingStore();
let fadeObserver;

if (window.location.hash === '#conocenos') {
    store.currentView = 'about';
}

function observeFadeUps() {
    document.querySelectorAll('.fade-up:not(.visible)').forEach((element) => {
        fadeObserver.observe(element);
    });
}

onMounted(() => {
    fadeObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );
    observeFadeUps();
});

watch(
    () => store.currentView,
    async () => {
        await nextTick();
        observeFadeUps();
    }
);

watch(
    () => store.language,
    (language) => {
        document.documentElement.lang = language;
    },
    { immediate: true }
);

onBeforeUnmount(() => fadeObserver?.disconnect());
</script>

<template>
    <SiteHeader />
    <HomePage v-if="store.currentView === 'home'" />
    <AboutPage v-else />
    <SiteFooter />
</template>
