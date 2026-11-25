<script>
import { useLandingStore } from '../stores/landing';
import ContactItem from '../components/ContactItem.vue';
import FormContact from '../components/FormContact.vue';

export default {
    name: 'ContactSection',

    components: {
        ContactItem,
        FormContact
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

    methods: {
        t(key) {
            return this.store.t(key);
        }
    }
};
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
                    <ContactItem
                        icon="pi pi-whatsapp"
                        label="3843-401553"
                        href="https://wa.me/543843401553?text=Hola%21%20Quisiera%20hacer%20una%20consulta."
                        external
                    />

                    <ContactItem
                        icon="pi pi-instagram"
                        label="@_arka.digital"
                        href="https://www.instagram.com/_arka.digital/"
                        external
                    />

                    <ContactItem
                        icon="pi pi-at"
                        label="contacto.arkadigital@gmail.com"
                        href="mailto:contacto.arkadigital@gmail.com"
                    />

                    <ContactItem
                        icon="pi pi-map-marker"
                        label="Ciudad Autónoma de Buenos Aires, Argentina"
                        href="https://www.google.com/maps/search/?api=1&query=Ciudad+Autonoma+de+Buenos+Aires,+Argentina"
                        external
                    />
                </div>
            </div>

            <FormContact />
        </div>
    </section>
</template>
