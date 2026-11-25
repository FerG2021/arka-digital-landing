<script setup>
import Button from 'primevue/button';
import { useLandingStore } from '../stores/landing';
import { useLandingNavigation } from '../composables/useLandingNavigation';

const store = useLandingStore();
const { t } = useLandingNavigation();
</script>

<template>
    <section id="proyectos" class="full-section bg-white text-arka-dark">
        <div class="max-w-7xl mx-auto px-6 lg:px-10 w-full space-y-10">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 fade-up">
                <div class="space-y-3">
                    <span
                        class="text-xs font-bold uppercase tracking-widest text-arka-blue bg-arka-turquoise/25 px-3.5 py-1.5 rounded-full"
                        >{{ t('proj_tag') }}</span
                    >
                    <h2
                        class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-arka-dark"
                    >
                        {{ t('proj_title') }}
                    </h2>
                </div>

                <div class="flex flex-wrap gap-2" id="project-filters">
                    <Button
                        @click="store.setProjectFilter('all')"
                        :class="[
                            'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer',
                            store.projectFilter === 'all'
                                ? 'bg-arka-dark text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-arka-turquoise/25'
                        ]"
                        >{{ t('filter_all') }}</Button
                    >
                    <Button
                        @click="store.setProjectFilter('web')"
                        :class="[
                            'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer',
                            store.projectFilter === 'web'
                                ? 'bg-arka-dark text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-arka-turquoise/25'
                        ]"
                        >{{ t('filter_web') }}</Button
                    >
                    <Button
                        @click="store.setProjectFilter('mobile')"
                        :class="[
                            'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer',
                            store.projectFilter === 'mobile'
                                ? 'bg-arka-dark text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-arka-turquoise/25'
                        ]"
                        >{{ t('filter_mobile') }}</Button
                    >
                    <Button
                        @click="store.setProjectFilter('api')"
                        :class="[
                            'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer',
                            store.projectFilter === 'api'
                                ? 'bg-arka-dark text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-arka-turquoise/25'
                        ]"
                        >{{ t('filter_api') }}</Button
                    >
                </div>
            </div>

            <div class="grid md:grid-cols-3 gap-7 fade-up" id="projects-grid">
                <article
                    v-show="store.projectFilter === 'all' || store.projectFilter === 'web'"
                    class="project-card group rounded-3xl border border-slate-200 overflow-hidden bg-white hover:border-arka-turquoise hover:shadow-xl transition-all flex flex-col justify-between"
                >
                    <div>
                        <div
                            class="h-48 bg-gradient-to-br from-arka-dark via-arka-blue to-arka-dark p-6 flex flex-col justify-between relative overflow-hidden"
                        >
                            <div
                                class="absolute right-0 bottom-0 w-32 h-32 bg-arka-turquoise/20 rounded-tl-full"
                            ></div>
                            <span
                                class="self-start px-3 py-1 rounded-full bg-white/10 text-arka-turquoise text-xs font-mono backdrop-blur-sm"
                                >E-Commerce & ERP</span
                            >
                            <h4 class="font-display text-white font-bold text-xl relative z-10">
                                Plataforma Comercial & Stock
                            </h4>
                        </div>
                        <div class="p-6 space-y-3">
                            <p class="text-slate-600 text-sm leading-relaxed">
                                {{ t('proj_1_desc') }}
                            </p>
                            <div class="flex flex-wrap gap-2 pt-2">
                                <span
                                    class="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-arka-blue"
                                    >Vue.js</span
                                >
                                <span
                                    class="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-arka-blue"
                                    >Laravel API</span
                                >
                                <span
                                    class="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-arka-blue"
                                    >MySQL</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="px-6 pb-6">
                        <a
                            href="#contacto"
                            class="text-sm font-bold text-arka-blue group-hover:text-arka-turquoiseDark inline-flex items-center gap-1.5 transition-colors"
                        >
                            <span>{{ t('proj_case') }}</span> &rarr;
                        </a>
                    </div>
                </article>

                <article
                    v-show="store.projectFilter === 'all' || store.projectFilter === 'mobile'"
                    class="project-card group rounded-3xl border border-slate-200 overflow-hidden bg-white hover:border-arka-turquoise hover:shadow-xl transition-all flex flex-col justify-between"
                >
                    <div>
                        <div
                            class="h-48 bg-gradient-to-br from-arka-blue via-arka-dark to-arka-blue p-6 flex flex-col justify-between relative overflow-hidden"
                        >
                            <div
                                class="absolute right-0 bottom-0 w-32 h-32 bg-arka-turquoiseDark/25 rounded-tl-full"
                            ></div>
                            <span
                                class="self-start px-3 py-1 rounded-full bg-white/10 text-arka-turquoise text-xs font-mono backdrop-blur-sm"
                                >Mobile App</span
                            >
                            <h4 class="font-display text-white font-bold text-xl relative z-10">
                                Gestión de Pedidos en Campo
                            </h4>
                        </div>
                        <div class="p-6 space-y-3">
                            <p class="text-slate-600 text-sm leading-relaxed">
                                {{ t('proj_2_desc') }}
                            </p>
                            <div class="flex flex-wrap gap-2 pt-2">
                                <span
                                    class="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-arka-blue"
                                    >Flutter</span
                                >
                                <span
                                    class="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-arka-blue"
                                    >REST API</span
                                >
                                <span
                                    class="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-arka-blue"
                                    >Push Alerts</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="px-6 pb-6">
                        <a
                            href="#contacto"
                            class="text-sm font-bold text-arka-blue group-hover:text-arka-turquoiseDark inline-flex items-center gap-1.5 transition-colors"
                        >
                            <span>{{ t('proj_case') }}</span> &rarr;
                        </a>
                    </div>
                </article>

                <article
                    v-show="store.projectFilter === 'all' || store.projectFilter === 'api'"
                    class="project-card group rounded-3xl border border-slate-200 overflow-hidden bg-white hover:border-arka-turquoise hover:shadow-xl transition-all flex flex-col justify-between"
                >
                    <div>
                        <div
                            class="h-48 bg-gradient-to-br from-arka-dark to-arka-blue p-6 flex flex-col justify-between relative overflow-hidden"
                        >
                            <div
                                class="absolute right-0 bottom-0 w-32 h-32 bg-arka-turquoise/20 rounded-tl-full"
                            ></div>
                            <span
                                class="self-start px-3 py-1 rounded-full bg-white/10 text-arka-turquoise text-xs font-mono backdrop-blur-sm"
                                >SaaS & Automatización</span
                            >
                            <h4 class="font-display text-white font-bold text-xl relative z-10">
                                Ecosistema de Turnos & Catálogos
                            </h4>
                        </div>
                        <div class="p-6 space-y-3">
                            <p class="text-slate-600 text-sm leading-relaxed">
                                {{ t('proj_3_desc') }}
                            </p>
                            <div class="flex flex-wrap gap-2 pt-2">
                                <span
                                    class="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-arka-blue"
                                    >Node / PHP</span
                                >
                                <span
                                    class="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-arka-blue"
                                    >Webhooks</span
                                >
                                <span
                                    class="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-arka-blue"
                                    >Cloud</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="px-6 pb-6">
                        <a
                            href="#contacto"
                            class="text-sm font-bold text-arka-blue group-hover:text-arka-turquoiseDark inline-flex items-center gap-1.5 transition-colors"
                        >
                            <span>{{ t('proj_case') }}</span> &rarr;
                        </a>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
