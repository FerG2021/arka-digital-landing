<script>
import Button from 'primevue/button';
import { useLandingStore } from '../stores/landing';
import { useLandingNavigation } from '../composables/useLandingNavigation';
import ArkaIcon from '../../public/arka-digital.png';
import GoToSection from '../components/GoToSection.vue';

export default {
    name: 'SiteHeader',
    components: {
        Button,
        GoToSection
    },
    data() {
        const { navigateToSection, openAboutPage } = useLandingNavigation();

        return {
            store: useLandingStore(),
            ArkaIcon,
            navigateToSection,
            openAboutPage
        };
    },
    methods: {
        t(key) {
            return this.store.t(key);
        }
    }
};
</script>

<template>
    <header
        id="navbar"
        class="fixed top-0 left-0 right-0 z-50 bg-arka-dark/95 backdrop-blur-md border-b border-white/10 transition-all duration-300"
    >
        <div class="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
            <a
                href="#inicio"
                @click.prevent="navigateToSection('inicio')"
                class="flex items-center gap-3.5 group"
            >
                <div
                    class="w-11 h-11 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform"
                >
                    <img
                        :src="ArkaIcon"
                        alt="Arka Digital Isotipo"
                        class="w-full h-full object-contain"
                    />
                </div>
                <span class="font-display font-bold text-xl lg:text-2xl tracking-tight text-white">
                    ARKA <span class="text-arka-turquoise">DIGITAL</span>
                </span>
            </a>

            <nav
                class="hidden md:flex items-center gap-8 text-sm lg:text-base font-medium text-white/80"
            >
                <GoToSection section="servicios" label="nav_services" />
                <GoToSection section="proyectos" label="nav_projects" />
                <GoToSection section="metodologia" label="nav_methodology" />
                <GoToSection section="nosotros" label="nav_about" />
                <GoToSection section="contacto" label="nav_contact" />
            </nav>

            <div class="flex items-center gap-3">
                <Button
                    id="lang-toggle"
                    @click="store.toggleLanguage()"
                    type="button"
                    aria-label="Cambiar idioma"
                    class="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-arka-turquoise/40 bg-arka-blue/50 text-white text-xs lg:text-sm font-semibold hover:bg-arka-turquoise hover:text-arka-dark transition-all cursor-pointer"
                >
                    <i class="pi pi-globe" aria-hidden="true" />
                    <span id="lang-label">{{ store.language === 'es' ? 'EN' : 'ES' }}</span>
                </Button>

                <a
                    href="#contacto"
                    @click.prevent="navigateToSection('contacto')"
                    class="hidden sm:inline-flex items-center px-5 py-2 rounded-full bg-arka-turquoise text-arka-dark font-semibold text-sm hover:bg-arka-turquoiseDark transition-colors"
                    >{{ t('nav_cta') }}</a
                >

                <Button
                    id="mobile-menu-btn"
                    @click="store.toggleMobileMenu()"
                    :aria-expanded="store.mobileMenuOpen"
                    class="md:hidden p-2 text-white hover:text-arka-turquoise"
                    aria-label="Menú"
                >
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </Button>
            </div>
        </div>

        <div
            id="mobile-menu"
            v-if="store.mobileMenuOpen"
            class="md:hidden bg-arka-dark border-t border-white/10 px-6 py-5 space-y-4"
        >
            <GoToSection section="servicios" label="nav_services" />
            <GoToSection section="proyectos" label="nav_projects" />
            <GoToSection section="metodologia" label="nav_methodology" />
            <GoToSection section="nosotros" label="nav_about" />
            <GoToSection section="contacto" label="nav_contact" />
        </div>
    </header>
</template>
