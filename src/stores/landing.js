import { defineStore } from 'pinia';
import { ref } from 'vue';
import { translations } from './translations';

const projectFilters = ['all', 'web', 'mobile', 'api'];

export const useLandingStore = defineStore('landing', () => {
    const language = ref('es');
    const currentView = ref('home');
    const mobileMenuOpen = ref(false);
    const projectFilter = ref('all');
    const contactSubmitted = ref(false);
    let feedbackTimeout;

    function t(key) {
        const translation = translations[language.value]?.[key];
        if (typeof translation !== 'string') {
            throw new Error(`Missing ${language.value} translation for "${key}"`);
        }
        return translation;
    }

    function toggleLanguage() {
        language.value = language.value === 'es' ? 'en' : 'es';
    }

    function toggleMobileMenu() {
        mobileMenuOpen.value = !mobileMenuOpen.value;
    }

    function closeMobileMenu() {
        mobileMenuOpen.value = false;
    }

    function setProjectFilter(filter) {
        if (!projectFilters.includes(filter)) {
            throw new TypeError(`Unsupported project filter: "${filter}"`);
        }
        projectFilter.value = filter;
    }

    function submitContact() {
        contactSubmitted.value = true;
        window.clearTimeout(feedbackTimeout);
        feedbackTimeout = window.setTimeout(() => {
            contactSubmitted.value = false;
        }, 5000);
    }

    return {
        language,
        currentView,
        mobileMenuOpen,
        projectFilter,
        contactSubmitted,
        t,
        toggleLanguage,
        toggleMobileMenu,
        closeMobileMenu,
        setProjectFilter,
        submitContact
    };
});
