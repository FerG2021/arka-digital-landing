<script setup>
import { useLandingNavigation } from '../composables/useLandingNavigation';
import FocusItem from '../components/FocusItem.vue';
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
                <FocusItem
                    icon="pi pi-cog"
                    class="gear-spin"
                    title="pillar_1_title"
                    description="pillar_1_desc"
                />

                <FocusItem
                    icon="pi pi-sync"
                    class="gear-spin"
                    title="pillar_2_title"
                    description="pillar_2_desc"
                />

                <FocusItem
                    icon="pi pi-bolt"
                    class="dollar-pulse"
                    title="pillar_3_title"
                    description="pillar_4_desc"
                />

                <FocusItem
                    icon="pi pi-dollar"
                    class="dollar-pulse"
                    title="pillar_3_title"
                    description="pillar_4_desc"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.icon-class {
    display: flex;
    width: 40px;
    height: 40px;
    font-size: 1.65rem;
    align-items: center;
    justify-content: center;
    line-height: 1;
    transform-origin: 50% 50%;
}

@keyframes gear-spin {
    to {
        transform: rotate(360deg);
    }
}

.group .gear-spin {
    animation: gear-spin 2s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
    .group .gear-spin {
        animation: none;
    }
}

@keyframes dollar-pulse {
    0%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
}

.dollar-pulse {
    animation: dollar-pulse 1.2s ease-in-out infinite;
    transform-origin: center;
}
</style>
