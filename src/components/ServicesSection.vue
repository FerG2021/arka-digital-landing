<script setup>
import { useLandingNavigation } from '../composables/useLandingNavigation';

const { t } = useLandingNavigation();
</script>

<template>
    <section
        id="servicios"
        class="full-section bg-slate-50 text-arka-dark border-y border-slate-200/70"
    >
        <div class="max-w-7xl mx-auto px-6 lg:px-10 w-full space-y-12">
            <div class="text-center max-w-3xl mx-auto space-y-4 fade-up">
                <span
                    class="text-xs font-bold uppercase tracking-widest text-arka-blue bg-arka-turquoise/25 px-3.5 py-1.5 rounded-full"
                    >{{ t('services_tag') }}</span
                >
                <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-arka-dark">
                    {{ t('services_title') }}
                </h2>
                <p class="text-slate-600 text-base lg:text-lg">{{ t('services_subtitle') }}</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 fade-up">
                <div
                    class="bg-white rounded-3xl p-8 border border-slate-200/90 flex flex-col justify-between hover:-translate-y-1.5 hover:border-arka-turquoise hover:shadow-2xl hover:shadow-arka-blue/10 transition-all"
                >
                    <div>
                        <div
                            class="w-12 h-12 rounded-2xl bg-arka-blue text-arka-turquoise flex items-center justify-center mb-6"
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
                                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <h3 class="font-display text-2xl font-bold text-arka-dark mb-3">
                            {{ t('srv_1_title') }}
                        </h3>
                        <p class="text-slate-600 text-base leading-relaxed mb-8">
                            {{ t('srv_1_desc') }}
                        </p>
                    </div>
                    <a
                        href="#contacto"
                        class="inline-flex items-center justify-between w-full px-6 py-3 rounded-full bg-arka-dark text-white font-medium text-sm hover:bg-arka-blue transition-colors group"
                    >
                        <span>{{ t('btn_more') }}</span>
                        <span
                            class="text-arka-turquoise group-hover:translate-x-1 transition-transform"
                            >&rarr;</span
                        >
                    </a>
                </div>

                <div
                    class="bg-white rounded-3xl p-8 border border-slate-200/90 flex flex-col justify-between hover:-translate-y-1.5 hover:border-arka-turquoise hover:shadow-2xl hover:shadow-arka-blue/10 transition-all"
                >
                    <div>
                        <div
                            class="w-12 h-12 rounded-2xl bg-arka-blue text-arka-turquoise flex items-center justify-center mb-6"
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
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                />
                            </svg>
                        </div>
                        <h3 class="font-display text-2xl font-bold text-arka-dark mb-3">
                            {{ t('srv_2_title') }}
                        </h3>
                        <p class="text-slate-600 text-base leading-relaxed mb-8">
                            {{ t('srv_2_desc') }}
                        </p>
                    </div>
                    <a
                        href="#contacto"
                        class="inline-flex items-center justify-between w-full px-6 py-3 rounded-full bg-arka-dark text-white font-medium text-sm hover:bg-arka-blue transition-colors group"
                    >
                        <span>{{ t('btn_more') }}</span>
                        <span
                            class="text-arka-turquoise group-hover:translate-x-1 transition-transform"
                            >&rarr;</span
                        >
                    </a>
                </div>

                <div
                    class="bg-white rounded-3xl p-8 border border-slate-200/90 flex flex-col justify-between hover:-translate-y-1.5 hover:border-arka-turquoise hover:shadow-2xl hover:shadow-arka-blue/10 transition-all"
                >
                    <div>
                        <div
                            class="w-12 h-12 rounded-2xl bg-arka-blue text-arka-turquoise flex items-center justify-center mb-6"
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
                                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <h3 class="font-display text-2xl font-bold text-arka-dark mb-3">
                            {{ t('srv_3_title') }}
                        </h3>
                        <p class="text-slate-600 text-base leading-relaxed mb-8">
                            {{ t('srv_3_desc') }}
                        </p>
                    </div>
                    <a
                        href="#contacto"
                        class="inline-flex items-center justify-between w-full px-6 py-3 rounded-full bg-arka-dark text-white font-medium text-sm hover:bg-arka-blue transition-colors group"
                    >
                        <span>{{ t('btn_more') }}</span>
                        <span
                            class="text-arka-turquoise group-hover:translate-x-1 transition-transform"
                            >&rarr;</span
                        >
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
