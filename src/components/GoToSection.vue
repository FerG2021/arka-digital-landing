<script>
import { useLandingStore } from '../stores/landing';
import { useLandingNavigation } from '../composables/useLandingNavigation';

export default {
    name: 'GoToSection',
    props: {
        section: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    },
    data() {
        const { navigateToSection } = useLandingNavigation();

        return {
            store: useLandingStore(),
            navigateToSection
        };
    },
    computed: {
        sectionClass() {
            return this.store.mobileMenuOpen
                ? 'block text-white/90 hover:text-arka-turquoise font-medium'
                : 'nav-link hover:text-arka-turquoise transition-colors';
        }
    },
    methods: {
        t(key) {
            return this.store.t(key);
        }
    }
};
</script>

<template>
    <a :href="`#${section}`" @click.prevent="navigateToSection(section)" :class="sectionClass">{{
        t(label)
    }}</a>
</template>

<style scoped></style>
