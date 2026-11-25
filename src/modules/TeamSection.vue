<script setup>
import Button from 'primevue/button';
import { useLandingNavigation } from '../composables/useLandingNavigation';

const { t, openAboutPage } = useLandingNavigation();
</script>

<template>
    <section id="nosotros" class="full-section bg-arka-blue text-white relative overflow-hidden">
        <div
            class="max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-12 items-center relative z-10"
        >
            <div class="lg:col-span-6 space-y-6 fade-up">
                <span
                    class="inline-block font-mono text-arka-turquoise text-base font-semibold tracking-wide"
                >
                    #ComunidadArka
                </span>
                <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                    {{ t('team_title') }}
                </h2>
                <p class="text-white/85 text-base lg:text-lg leading-relaxed">
                    {{ t('team_p1') }}
                </p>
                <p class="text-white/75 text-base lg:text-lg leading-relaxed">
                    {{ t('team_p2') }}
                </p>

                <div class="pt-3 space-y-4">
                    <p class="text-arka-turquoise font-display font-bold text-xl">
                        {{ t('team_cta_text') }}
                    </p>
                    <div class="flex flex-wrap gap-3">
                        <Button
                            type="button"
                            @click="openAboutPage"
                            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-arka-turquoise text-arka-dark font-bold hover:bg-arka-turquoiseDark transition-all shadow-lg shadow-arka-dark/25 cursor-pointer"
                        >
                            <span>{{ t('team_btn_know') }}</span> <span>&rarr;</span>
                        </Button>
                        <a
                            href="#contacto"
                            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-arka-turquoise/60 text-white font-semibold hover:bg-white/10 transition-all"
                        >
                            <span>{{ t('team_btn_contact') }}</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-5 fade-up">
                <div
                    class="aspect-square rounded-3xl bg-arka-dark/60 border border-white/10 p-5 flex flex-col items-center justify-center text-center hover:border-arka-turquoise hover:-translate-y-1 transition-all"
                >
                    <div
                        class="w-12 h-12 rounded-full bg-arka-turquoise/15 text-arka-turquoise flex items-center justify-center mb-3 font-mono font-bold"
                    >
                        FL
                    </div>
                    <span class="font-display font-bold text-arka-turquoise text-sm sm:text-base"
                        >Flutter<br />Developer</span
                    >
                </div>

                <div
                    class="aspect-square rounded-3xl bg-arka-dark/60 border border-white/10 p-5 flex flex-col items-center justify-center text-center hover:border-arka-turquoise hover:-translate-y-1 transition-all"
                >
                    <div
                        class="w-12 h-12 rounded-full bg-arka-turquoise/15 text-arka-turquoise flex items-center justify-center mb-3 font-mono font-bold"
                    >
                        FE
                    </div>
                    <span class="font-display font-bold text-arka-turquoise text-sm sm:text-base"
                        >Frontend<br />Developer</span
                    >
                </div>

                <div
                    class="aspect-square rounded-3xl bg-arka-dark/60 border border-white/10 p-5 flex flex-col items-center justify-center text-center hover:border-arka-turquoise hover:-translate-y-1 transition-all"
                >
                    <div
                        class="w-12 h-12 rounded-full bg-arka-turquoise/15 text-arka-turquoise flex items-center justify-center mb-3 font-mono font-bold"
                    >
                        QA
                    </div>
                    <span class="font-display font-bold text-arka-turquoise text-sm sm:text-base"
                        >QA<br />Tester</span
                    >
                </div>

                <div
                    class="aspect-square rounded-3xl bg-arka-dark/60 border border-white/10 p-5 flex flex-col items-center justify-center text-center hover:border-arka-turquoise hover:-translate-y-1 transition-all"
                >
                    <div
                        class="w-12 h-12 rounded-full bg-arka-turquoise/15 text-arka-turquoise flex items-center justify-center mb-3 font-mono font-bold"
                    >
                        UX
                    </div>
                    <span class="font-display font-bold text-arka-turquoise text-sm sm:text-base"
                        >UX/UI<br />Designer</span
                    >
                </div>

                <div
                    class="aspect-square rounded-3xl bg-arka-dark/60 border border-white/10 p-5 flex flex-col items-center justify-center text-center hover:border-arka-turquoise hover:-translate-y-1 transition-all"
                >
                    <div
                        class="w-12 h-12 rounded-full bg-arka-turquoise/15 text-arka-turquoise flex items-center justify-center mb-3 font-mono font-bold"
                    >
                        PM
                    </div>
                    <span class="font-display font-bold text-arka-turquoise text-sm sm:text-base"
                        >Product<br />Manager</span
                    >
                </div>

                <div
                    class="aspect-square rounded-3xl bg-arka-dark/60 border border-white/10 p-5 flex flex-col items-center justify-center text-center hover:border-arka-turquoise hover:-translate-y-1 transition-all"
                >
                    <div
                        class="w-12 h-12 rounded-full bg-arka-turquoise/15 text-arka-turquoise flex items-center justify-center mb-3 font-mono font-bold"
                    >
                        BE
                    </div>
                    <span class="font-display font-bold text-arka-turquoise text-sm sm:text-base"
                        >Backend<br />Developer</span
                    >
                </div>
            </div>
        </div>
    </section>
</template>
