<script setup>
import { useLandingNavigation } from '../composables/useLandingNavigation';

const { t } = useLandingNavigation();
</script>

<template>
    <section id="foco" class="full-section bg-white text-arka-dark">
        <div
            class="max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-12 items-center"
        >
            <div class="lg:col-span-5 space-y-6 fade-up">
                <span
                    class="text-xs font-bold uppercase tracking-widest text-arka-blue bg-arka-turquoise/25 px-3.5 py-1.5 rounded-full"
                    >{{ t('focus_tag') }}</span
                >
                <h2
                    class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-arka-dark leading-tight"
                >
                    {{ t('focus_title') }}
                </h2>
                <p class="text-slate-600 text-base lg:text-lg leading-relaxed">
                    {{ t('focus_desc') }}
                </p>
            </div>

            <div class="lg:col-span-7 grid sm:grid-cols-2 gap-6 fade-up">
                <div
                    class="p-7 rounded-3xl border border-slate-200 bg-slate-50/70 hover:border-arka-turquoise hover:shadow-xl hover:shadow-arka-blue/5 transition-all group"
                >
                    <div
                        class="w-14 h-14 rounded-2xl bg-arka-turquoise/20 text-arka-blue flex items-center justify-center mb-5 group-hover:bg-arka-turquoise group-hover:text-arka-dark transition-colors"
                    >
                        <svg
                            class="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </div>
                    <h3 class="font-display font-bold text-xl text-arka-dark mb-2">
                        {{ t('pillar_1_title') }}
                    </h3>
                    <p class="text-slate-600 text-sm leading-relaxed">
                        {{ t('pillar_1_desc') }}
                    </p>
                </div>

                <div
                    class="p-7 rounded-3xl border border-slate-200 bg-slate-50/70 hover:border-arka-turquoise hover:shadow-xl hover:shadow-arka-blue/5 transition-all group"
                >
                    <div
                        class="w-14 h-14 rounded-2xl bg-arka-turquoise/20 text-arka-blue flex items-center justify-center mb-5 group-hover:bg-arka-turquoise group-hover:text-arka-dark transition-colors"
                    >
                        <svg
                            class="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                        </svg>
                    </div>
                    <h3 class="font-display font-bold text-xl text-arka-dark mb-2">
                        {{ t('pillar_2_title') }}
                    </h3>
                    <p class="text-slate-600 text-sm leading-relaxed">
                        {{ t('pillar_2_desc') }}
                    </p>
                </div>

                <div
                    class="p-7 rounded-3xl border border-slate-200 bg-slate-50/70 hover:border-arka-turquoise hover:shadow-xl hover:shadow-arka-blue/5 transition-all group"
                >
                    <div
                        class="w-14 h-14 rounded-2xl bg-arka-turquoise/20 text-arka-blue flex items-center justify-center mb-5 group-hover:bg-arka-turquoise group-hover:text-arka-dark transition-colors"
                    >
                        <svg
                            class="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                        </svg>
                    </div>
                    <h3 class="font-display font-bold text-xl text-arka-dark mb-2">
                        {{ t('pillar_3_title') }}
                    </h3>
                    <p class="text-slate-600 text-sm leading-relaxed">
                        {{ t('pillar_3_desc') }}
                    </p>
                </div>

                <div
                    class="p-7 rounded-3xl border border-slate-200 bg-slate-50/70 hover:border-arka-turquoise hover:shadow-xl hover:shadow-arka-blue/5 transition-all group"
                >
                    <div
                        class="w-14 h-14 rounded-2xl bg-arka-turquoise/20 text-arka-blue flex items-center justify-center mb-5 group-hover:bg-arka-turquoise group-hover:text-arka-dark transition-colors"
                    >
                        <svg
                            class="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <h3 class="font-display font-bold text-xl text-arka-dark mb-2">
                        {{ t('pillar_4_title') }}
                    </h3>
                    <p class="text-slate-600 text-sm leading-relaxed">
                        {{ t('pillar_4_desc') }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
