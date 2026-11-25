<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import { useLandingStore } from '../stores/landing';

export default {
    name: 'FormContact',
    components: {
        Button,
        InputText,
        Textarea
    },
    data() {
        return {
            store: useLandingStore(),
            contactForm: {
                name: '',
                phone: '',
                email: '',
                message: ''
            }
        };
    },
    computed: {},
    methods: {
        t(key) {
            return this.store.t(key);
        },
        submitContact() {
            this.store.submitContact();
            Object.assign(this.contactForm, {
                name: '',
                phone: '',
                email: '',
                message: ''
            });
        }
    }
};
</script>

<template>
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
                    <label class="block text-xs font-semibold text-slate-600 mb-1.5">E-Mail</label>
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
</template>

<style scoped></style>
