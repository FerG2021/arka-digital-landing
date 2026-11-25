<script setup>
import { useLandingNavigation } from '../composables/useLandingNavigation';

const { t } = useLandingNavigation();
</script>

<template>
    <section id="metodologia" class="full-section bg-arka-dark bg-tech-grid text-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-10 w-full space-y-10">
            <div class="text-center max-w-3xl mx-auto space-y-4 fade-up">
                <span
                    class="text-xs font-bold uppercase tracking-widest text-arka-dark bg-arka-turquoise px-3.5 py-1.5 rounded-full"
                    >{{ t('agile_tag') }}</span
                >
                <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                    {{ t('agile_title') }}
                </h2>
                <p class="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {{ t('agile_subtitle') }}
                </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 fade-up">
                <div
                    class="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-arka-turquoise/60 transition-all flex items-center gap-4"
                >
                    <span
                        class="w-10 h-10 rounded-xl bg-arka-turquoise/15 text-arka-turquoise font-display font-bold flex items-center justify-center shrink-0"
                        >01</span
                    >
                    <h3 class="font-semibold text-base lg:text-lg text-white">
                        {{ t('step_1') }}
                    </h3>
                </div>

                <div
                    class="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-arka-turquoise/60 transition-all flex items-center gap-4"
                >
                    <span
                        class="w-10 h-10 rounded-xl bg-arka-turquoise/15 text-arka-turquoise font-display font-bold flex items-center justify-center shrink-0"
                        >02</span
                    >
                    <h3 class="font-semibold text-base lg:text-lg text-white">
                        {{ t('step_2') }}
                    </h3>
                </div>

                <div
                    class="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-arka-turquoise/60 transition-all flex items-center gap-4"
                >
                    <span
                        class="w-10 h-10 rounded-xl bg-arka-turquoise/15 text-arka-turquoise font-display font-bold flex items-center justify-center shrink-0"
                        >03</span
                    >
                    <h3 class="font-semibold text-base lg:text-lg text-white">
                        {{ t('step_3') }}
                    </h3>
                </div>

                <div
                    class="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-arka-turquoise/60 transition-all flex items-center gap-4"
                >
                    <span
                        class="w-10 h-10 rounded-xl bg-arka-turquoise/15 text-arka-turquoise font-display font-bold flex items-center justify-center shrink-0"
                        >04</span
                    >
                    <h3 class="font-semibold text-base lg:text-lg text-white">
                        {{ t('step_4') }}
                    </h3>
                </div>

                <div
                    class="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-arka-turquoise/60 transition-all flex items-center gap-4"
                >
                    <span
                        class="w-10 h-10 rounded-xl bg-arka-turquoise/15 text-arka-turquoise font-display font-bold flex items-center justify-center shrink-0"
                        >05</span
                    >
                    <h3 class="font-semibold text-base lg:text-lg text-white">
                        {{ t('step_5') }}
                    </h3>
                </div>

                <div
                    class="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-arka-turquoise/60 transition-all flex items-center gap-4"
                >
                    <span
                        class="w-10 h-10 rounded-xl bg-arka-turquoise/15 text-arka-turquoise font-display font-bold flex items-center justify-center shrink-0"
                        >06</span
                    >
                    <h3 class="font-semibold text-base lg:text-lg text-white">
                        {{ t('step_6') }}
                    </h3>
                </div>

                <div
                    class="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-arka-turquoise/60 transition-all flex items-center gap-4"
                >
                    <span
                        class="w-10 h-10 rounded-xl bg-arka-turquoise/15 text-arka-turquoise font-display font-bold flex items-center justify-center shrink-0"
                        >07</span
                    >
                    <h3 class="font-semibold text-base lg:text-lg text-white">
                        {{ t('step_7') }}
                    </h3>
                </div>

                <div
                    class="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-arka-turquoise/60 transition-all flex items-center gap-4"
                >
                    <span
                        class="w-10 h-10 rounded-xl bg-arka-turquoise/15 text-arka-turquoise font-display font-bold flex items-center justify-center shrink-0"
                        >08</span
                    >
                    <h3 class="font-semibold text-base lg:text-lg text-white">
                        {{ t('step_8') }}
                    </h3>
                </div>

                <div
                    class="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-arka-turquoise/60 transition-all flex items-center gap-4"
                >
                    <span
                        class="w-10 h-10 rounded-xl bg-arka-turquoise/15 text-arka-turquoise font-display font-bold flex items-center justify-center shrink-0"
                        >09</span
                    >
                    <h3 class="font-semibold text-base lg:text-lg text-white">
                        {{ t('step_9') }}
                    </h3>
                </div>
            </div>
        </div>
    </section>
</template>
