<script setup>
import Button from 'primevue/button';
import { useLandingStore } from '../stores/landing';
import { useLandingNavigation } from '../composables/useLandingNavigation';

const store = useLandingStore();
const { t, openAboutPage, navigateToSection } = useLandingNavigation();
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
                        src="data:image/png;base64,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"
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
                <a
                    href="#servicios"
                    @click.prevent="navigateToSection('servicios')"
                    class="nav-link hover:text-arka-turquoise transition-colors"
                    >{{ t('nav_services') }}</a
                >
                <a
                    href="#proyectos"
                    @click.prevent="navigateToSection('proyectos')"
                    class="nav-link hover:text-arka-turquoise transition-colors"
                    >{{ t('nav_projects') }}</a
                >
                <a
                    href="#metodologia"
                    @click.prevent="navigateToSection('metodologia')"
                    class="nav-link hover:text-arka-turquoise transition-colors"
                    >{{ t('nav_methodology') }}</a
                >
                <a
                    href="#nosotros"
                    @click.prevent="navigateToSection('nosotros')"
                    class="nav-link hover:text-arka-turquoise transition-colors"
                    >{{ t('nav_about') }}</a
                >
                <Button
                    type="button"
                    @click="openAboutPage"
                    class="nav-link hover:text-arka-turquoise transition-colors cursor-pointer"
                    >{{ t('nav_know_us') }}</Button
                >
                <a
                    href="#contacto"
                    @click.prevent="navigateToSection('contacto')"
                    class="nav-link hover:text-arka-turquoise transition-colors"
                    >{{ t('nav_contact') }}</a
                >
            </nav>

            <div class="flex items-center gap-3">
                <Button
                    id="lang-toggle"
                    @click="store.toggleLanguage()"
                    type="button"
                    aria-label="Cambiar idioma"
                    class="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-arka-turquoise/40 bg-arka-blue/50 text-white text-xs lg:text-sm font-semibold hover:bg-arka-turquoise hover:text-arka-dark transition-all cursor-pointer"
                >
                    <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                    </svg>
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
            <a
                href="#servicios"
                @click.prevent="navigateToSection('servicios')"
                class="block text-white/90 hover:text-arka-turquoise font-medium"
                >{{ t('nav_services') }}</a
            >
            <a
                href="#proyectos"
                @click.prevent="navigateToSection('proyectos')"
                class="block text-white/90 hover:text-arka-turquoise font-medium"
                >{{ t('nav_projects') }}</a
            >
            <a
                href="#metodologia"
                @click.prevent="navigateToSection('metodologia')"
                class="block text-white/90 hover:text-arka-turquoise font-medium"
                >{{ t('nav_methodology') }}</a
            >
            <a
                href="#nosotros"
                @click.prevent="navigateToSection('nosotros')"
                class="block text-white/90 hover:text-arka-turquoise font-medium"
                >{{ t('nav_about') }}</a
            >
            <Button
                type="button"
                @click="openAboutPage"
                class="block text-left text-white/90 hover:text-arka-turquoise font-medium"
                >{{ t('nav_know_us') }}</Button
            >
            <a
                href="#contacto"
                @click.prevent="navigateToSection('contacto')"
                class="block text-arka-turquoise font-semibold"
                >{{ t('nav_contact') }}</a
            >
        </div>
    </header>
</template>
