<script setup>
import { reactive } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import { useLandingStore } from '../stores/landing';
import { useLandingNavigation } from '../composables/useLandingNavigation';

const store = useLandingStore();
const { t } = useLandingNavigation();
const contactForm = reactive({ name: '', phone: '', email: '', message: '' });

function submitContact() {
    store.submitContact();
    Object.assign(contactForm, { name: '', phone: '', email: '', message: '' });
}
</script>

<template>
    <section id="contacto" class="full-section bg-white text-arka-dark">
        <div
            class="max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-12 items-center"
        >
            <div class="lg:col-span-5 space-y-6 fade-up">
                <span
                    class="text-xs font-bold uppercase tracking-widest text-arka-blue bg-arka-turquoise/25 px-3.5 py-1.5 rounded-full"
                    >{{ t('contact_tag') }}</span
                >
                <h2
                    class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-arka-dark leading-tight"
                >
                    {{ t('contact_title') }}
                </h2>
                <p class="text-slate-600 text-base lg:text-lg">{{ t('contact_subtitle') }}</p>

                <div class="space-y-3 pt-2 text-sm text-slate-700">
                    <div class="flex items-center gap-3">
                        <span
                            class="w-9 h-9 rounded-full bg-arka-turquoise/20 text-arka-blue flex items-center justify-center font-bold"
                            >@</span
                        >
                        <span>contacto.arkadigital@gmail.com</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <span
                            class="w-9 h-9 rounded-full bg-arka-turquoise/20 text-arka-blue flex items-center justify-center font-bold"
                            >IG</span
                        >
                        <span>@_arkadigital</span>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-7 fade-up">
                <div class="bg-slate-50 border border-slate-200 rounded-3xl p-7 sm:p-10 shadow-sm">
                    <div class="mb-6">
                        <h3 class="font-display text-2xl font-bold text-arka-dark">
                            {{ t('form_heading') }}
                        </h3>
                        <p class="text-slate-500 text-sm mt-1">{{ t('form_subheading') }}</p>
                    </div>

                    <form id="contact-form" class="space-y-4" @submit.prevent="submitContact">
                        <div class="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">{{
                                    t('form_name_lbl')
                                }}</label>
                                <InputText
                                    v-model="contactForm.name"
                                    type="text"
                                    required
                                    :placeholder="t('form_name_ph')"
                                    class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-arka-dark focus:outline-none focus:border-arka-blue focus:ring-2 focus:ring-arka-turquoise/40 transition-all"
                                />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-slate-600 mb-1.5">{{
                                    t('form_phone_lbl')
                                }}</label>
                                <InputText
                                    v-model="contactForm.phone"
                                    type="tel"
                                    :placeholder="t('form_phone_ph')"
                                    class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-arka-dark focus:outline-none focus:border-arka-blue focus:ring-2 focus:ring-arka-turquoise/40 transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-slate-600 mb-1.5"
                                >E-Mail</label
                            >
                            <InputText
                                v-model="contactForm.email"
                                type="email"
                                required
                                placeholder="tu@empresa.com"
                                class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-arka-dark focus:outline-none focus:border-arka-blue focus:ring-2 focus:ring-arka-turquoise/40 transition-all"
                            />
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-slate-600 mb-1.5">{{
                                t('form_msg_lbl')
                            }}</label>
                            <Textarea
                                v-model="contactForm.message"
                                rows="4"
                                required
                                :placeholder="t('form_msg_ph')"
                                class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-arka-dark focus:outline-none focus:border-arka-blue focus:ring-2 focus:ring-arka-turquoise/40 transition-all resize-none"
                            ></Textarea>
                        </div>

                        <Button
                            type="submit"
                            class="w-full py-3.5 rounded-full bg-arka-dark text-white font-bold text-sm sm:text-base hover:bg-arka-blue transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <span>{{ t('form_submit') }}</span>
                            <span class="text-arka-turquoise">&rarr;</span>
                        </Button>

                        <p
                            id="form-feedback"
                            v-if="store.contactSubmitted"
                            class="text-center text-sm font-semibold text-arka-blue bg-arka-turquoise/25 py-2.5 px-4 rounded-xl"
                        >
                            {{ t('form_success') }}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
