<script setup>
import Button from 'primevue/button';
import { useLandingNavigation } from '../composables/useLandingNavigation';

const { t, openAboutPage } = useLandingNavigation();
</script>

<template>
    <section
        id="inicio"
        class="full-section bg-arka-dark bg-tech-grid text-white relative overflow-hidden"
    >
        <div
            class="absolute -top-32 -right-32 w-96 h-96 bg-arka-turquoise/15 rounded-full blur-3xl pointer-events-none"
        ></div>
        <div
            class="absolute -bottom-32 -left-32 w-96 h-96 bg-arka-blue/60 rounded-full blur-3xl pointer-events-none"
        ></div>

        <div
            class="max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-12 items-center relative z-10"
        >
            <div class="lg:col-span-7 space-y-7 fade-up">
                <div
                    class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-arka-blue/80 border border-arka-turquoise/30 text-arka-turquoise text-xs lg:text-sm font-medium"
                >
                    <span class="w-2 h-2 rounded-full bg-arka-turquoise animate-pulse"></span>
                    <span>{{ t('hero_badge') }}</span>
                </div>

                <h1
                    class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
                >
                    {{ t('hero_title') }}
                </h1>

                <p class="text-white/75 text-lg lg:text-xl max-w-2xl leading-relaxed">
                    {{ t('hero_subtitle') }}
                </p>

                <div class="flex flex-wrap items-center gap-4 pt-2">
                    <a
                        href="#proyectos"
                        class="px-7 py-3.5 rounded-full bg-arka-turquoise text-arka-dark font-bold text-sm lg:text-base hover:bg-arka-turquoiseDark transition-all shadow-lg shadow-arka-turquoise/20"
                        >{{ t('hero_btn_projects') }}</a
                    >
                    <Button
                        type="button"
                        @click="openAboutPage"
                        class="px-7 py-3.5 rounded-full border border-white/25 text-white font-semibold text-sm lg:text-base hover:border-arka-turquoise hover:text-arka-turquoise transition-all cursor-pointer"
                        >{{ t('hero_btn_know_us') }}</Button
                    >
                </div>
            </div>

            <div class="lg:col-span-5 fade-up">
                <div
                    class="bg-arka-blue/40 border border-white/10 rounded-3xl p-7 lg:p-8 backdrop-blur-sm space-y-6"
                >
                    <div class="flex items-center justify-between border-b border-white/10 pb-4">
                        <div class="flex items-center gap-2">
                            <span class="w-3 h-3 rounded-full bg-arka-turquoise"></span>
                            <span class="w-3 h-3 rounded-full bg-arka-turquoiseDark/60"></span>
                            <span class="w-3 h-3 rounded-full bg-white/20"></span>
                        </div>
                        <span class="text-xs font-mono text-arka-turquoise">arka-core // v2.6</span>
                    </div>

                    <div class="space-y-4">
                        <div
                            class="p-4 rounded-2xl bg-arka-dark/70 border border-white/5 flex items-center justify-between"
                        >
                            <div>
                                <p class="text-xs text-white/50 uppercase tracking-wider">
                                    {{ t('hero_card_1_lbl') }}
                                </p>
                                <p class="font-semibold text-white mt-0.5">
                                    {{ t('hero_card_1_val') }}
                                </p>
                            </div>
                            <span class="text-arka-turquoise font-mono text-sm">100%</span>
                        </div>

                        <div
                            class="p-4 rounded-2xl bg-arka-dark/70 border border-white/5 flex items-center justify-between"
                        >
                            <div>
                                <p class="text-xs text-white/50 uppercase tracking-wider">
                                    {{ t('hero_card_2_lbl') }}
                                </p>
                                <p class="font-semibold text-white mt-0.5">
                                    {{ t('hero_card_2_val') }}
                                </p>
                            </div>
                            <span class="text-arka-turquoise font-mono text-sm">Agile</span>
                        </div>

                        <div
                            class="p-4 rounded-2xl bg-arka-dark/70 border border-white/5 flex items-center justify-between"
                        >
                            <div>
                                <p class="text-xs text-white/50 uppercase tracking-wider">
                                    {{ t('hero_card_3_lbl') }}
                                </p>
                                <p class="font-semibold text-white mt-0.5">
                                    {{ t('hero_card_3_val') }}
                                </p>
                            </div>
                            <span class="text-arka-turquoise font-mono text-sm">24/7</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
