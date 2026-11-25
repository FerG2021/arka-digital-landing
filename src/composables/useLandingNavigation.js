import { nextTick } from 'vue';
import { useLandingStore } from '../stores/landing';

export function useLandingNavigation() {
    const store = useLandingStore();

    function openAboutPage() {
        store.closeMobileMenu();
        store.currentView = 'about';
        window.history.replaceState(null, '', '#conocenos');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async function navigateToSection(sectionId) {
        store.closeMobileMenu();
        store.currentView = 'home';
        window.history.replaceState(null, '', `#${sectionId}`);
        await nextTick();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }

    return {
        t: store.t,
        openAboutPage,
        navigateToSection
    };
}
