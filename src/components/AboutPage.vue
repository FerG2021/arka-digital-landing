<script setup>
import Button from 'primevue/button';
import { useLandingStore } from '../stores/landing';
import { useLandingNavigation } from '../composables/useLandingNavigation';

const store = useLandingStore();
const { t, openAboutPage, navigateToSection } = useLandingNavigation();
</script>

<template>
    <section id="about-page" class="view-transition">
        <div class="full-section bg-arka-dark bg-tech-grid text-white relative overflow-hidden">
            <div
                class="absolute top-20 right-0 w-96 h-96 bg-arka-turquoise/10 rounded-full blur-3xl pointer-events-none"
            ></div>

            <div class="max-w-7xl mx-auto px-6 lg:px-10 w-full space-y-8 relative z-10">
                <div>
                    <Button
                        type="button"
                        @click.prevent="navigateToSection('inicio')"
                        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-arka-turquoise hover:text-arka-dark text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                    >
                        <span>&larr;</span>
                        <span>{{ t('about_back') }}</span>
                    </Button>
                </div>

                <div class="grid lg:grid-cols-12 gap-12 items-center">
                    <div class="lg:col-span-6 space-y-6">
                        <span
                            class="text-xs font-bold uppercase tracking-widest text-arka-dark bg-arka-turquoise px-3.5 py-1.5 rounded-full"
                            >{{ t('about_tag') }}</span
                        >
                        <h1
                            class="font-display text-4xl sm:text-5xl font-bold leading-tight text-white"
                        >
                            {{ t('about_title') }}
                        </h1>
                        <p class="text-white/80 text-base lg:text-lg leading-relaxed">
                            {{ t('about_intro_1') }}
                        </p>
                        <p class="text-white/70 text-base leading-relaxed">
                            {{ t('about_intro_2') }}
                        </p>

                        <div class="grid grid-cols-3 gap-4 pt-3 border-t border-white/10">
                            <div>
                                <p
                                    class="font-display text-2xl sm:text-3xl font-bold text-arka-turquoise"
                                >
                                    +5
                                </p>
                                <p class="text-xs text-white/60 mt-1">{{ t('stat_1') }}</p>
                            </div>
                            <div>
                                <p
                                    class="font-display text-2xl sm:text-3xl font-bold text-arka-turquoise"
                                >
                                    100%
                                </p>
                                <p class="text-xs text-white/60 mt-1">{{ t('stat_2') }}</p>
                            </div>
                            <div>
                                <p
                                    class="font-display text-2xl sm:text-3xl font-bold text-arka-turquoise"
                                >
                                    UX+Dev
                                </p>
                                <p class="text-xs text-white/60 mt-1">{{ t('stat_3') }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-6">
                        <div
                            class="relative rounded-3xl overflow-hidden border-2 border-arka-turquoise/40 shadow-2xl bg-arka-blue group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
                                alt="Equipo de Arka Digital trabajando"
                                class="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-arka-dark via-arka-dark/20 to-transparent"
                            ></div>
                            <div
                                class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between"
                            >
                                <div>
                                    <span
                                        class="inline-block px-3 py-1 rounded-full bg-arka-turquoise text-arka-dark font-bold text-xs mb-2"
                                        >#ComunidadArka</span
                                    >
                                    <h3
                                        class="font-display text-xl sm:text-2xl font-bold text-white"
                                    >
                                        {{ t('photo_caption_title') }}
                                    </h3>
                                    <p class="text-white/75 text-xs sm:text-sm">
                                        {{ t('photo_caption_sub') }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="full-section bg-white text-arka-dark">
            <div class="max-w-7xl mx-auto px-6 lg:px-10 w-full space-y-12">
                <div class="max-w-3xl space-y-4">
                    <span
                        class="text-xs font-bold uppercase tracking-widest text-arka-blue bg-arka-turquoise/25 px-3.5 py-1.5 rounded-full"
                        >{{ t('what_tag') }}</span
                    >
                    <h2
                        class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-arka-dark"
                    >
                        {{ t('what_title') }}
                    </h2>
                    <p class="text-slate-600 text-base lg:text-lg">{{ t('what_subtitle') }}</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div
                        class="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-arka-turquoise transition-all space-y-4"
                    >
                        <div
                            class="w-12 h-12 rounded-2xl bg-arka-dark text-arka-turquoise flex items-center justify-center font-display font-bold text-lg"
                        >
                            01
                        </div>
                        <h3 class="font-display text-xl font-bold text-arka-dark">
                            {{ t('do_1_title') }}
                        </h3>
                        <p class="text-slate-600 text-sm leading-relaxed">{{ t('do_1_desc') }}</p>
                    </div>

                    <div
                        class="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-arka-turquoise transition-all space-y-4"
                    >
                        <div
                            class="w-12 h-12 rounded-2xl bg-arka-dark text-arka-turquoise flex items-center justify-center font-display font-bold text-lg"
                        >
                            02
                        </div>
                        <h3 class="font-display text-xl font-bold text-arka-dark">
                            {{ t('do_2_title') }}
                        </h3>
                        <p class="text-slate-600 text-sm leading-relaxed">{{ t('do_2_desc') }}</p>
                    </div>

                    <div
                        class="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-arka-turquoise transition-all space-y-4"
                    >
                        <div
                            class="w-12 h-12 rounded-2xl bg-arka-dark text-arka-turquoise flex items-center justify-center font-display font-bold text-lg"
                        >
                            03
                        </div>
                        <h3 class="font-display text-xl font-bold text-arka-dark">
                            {{ t('do_3_title') }}
                        </h3>
                        <p class="text-slate-600 text-sm leading-relaxed">{{ t('do_3_desc') }}</p>
                    </div>

                    <div
                        class="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-arka-turquoise transition-all space-y-4"
                    >
                        <div
                            class="w-12 h-12 rounded-2xl bg-arka-dark text-arka-turquoise flex items-center justify-center font-display font-bold text-lg"
                        >
                            04
                        </div>
                        <h3 class="font-display text-xl font-bold text-arka-dark">
                            {{ t('do_4_title') }}
                        </h3>
                        <p class="text-slate-600 text-sm leading-relaxed">{{ t('do_4_desc') }}</p>
                    </div>
                </div>

                <div
                    class="rounded-3xl bg-arka-blue p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div class="space-y-2 text-center md:text-left">
                        <h3 class="font-display text-2xl sm:text-3xl font-bold">
                            {{ t('about_banner_title') }}
                        </h3>
                        <p class="text-white/80 text-sm sm:text-base">
                            {{ t('about_banner_sub') }}
                        </p>
                    </div>
                    <Button
                        type="button"
                        @click.prevent="navigateToSection('contacto')"
                        class="px-8 py-4 rounded-full bg-arka-turquoise text-arka-dark font-bold text-sm sm:text-base hover:bg-arka-turquoiseDark transition-all shrink-0 cursor-pointer"
                    >
                        <span>{{ t('about_banner_btn') }}</span> &rarr;
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>
