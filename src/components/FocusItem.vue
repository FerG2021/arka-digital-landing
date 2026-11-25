<script>
import { useLandingStore } from '../stores/landing';

export default {
    name: '',
    props: {
        icon: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        class: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            store: useLandingStore()
        };
    },
    computed: {
        iconClass() {
            return `${this.icon} icon-class ${this.class}`;
        }
    },
    methods: {
        t(key) {
            return this.store.t(key);
        }
    }
};
</script>

<template>
    <div
        class="p-7 rounded-3xl border border-slate-200 bg-slate-50/70 hover:border-arka-turquoise hover:shadow-xl hover:shadow-arka-blue/5 transition-all group"
    >
        <div
            class="w-14 h-14 rounded-2xl bg-arka-turquoise/20 text-arka-blue flex items-center justify-center mb-5 group-hover:bg-arka-turquoise group-hover:text-arka-dark transition-colors"
        >
            <i :class="iconClass" aria-hidden="true"></i>
        </div>
        <h3 class="font-display font-bold text-xl text-arka-dark mb-2">
            {{ t(title) }}
        </h3>
        <p class="text-slate-600 text-sm leading-relaxed">
            {{ t(description) }}
        </p>
    </div>
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
