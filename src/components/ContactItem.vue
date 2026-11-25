<script>
export default {
    name: 'ContactItem',
    props: {
        icon: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        href: {
            type: String,
            default: null
        },
        external: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<template>
    <a
        v-if="href"
        :href="href"
        :target="external ? '_blank' : null"
        :rel="external ? 'noopener noreferrer' : null"
        class="flex items-center gap-3 group hover:text-arka-blue transition-colors"
    >
        <span
            class="w-9 h-9 rounded-full bg-arka-turquoise/20 text-arka-blue flex items-center justify-center font-bold group-hover:bg-arka-turquoise/35 transition-colors"
        >
            <i :class="icon" aria-hidden="true"></i>
        </span>
        <span class="underline-offset-2 group-hover:underline">{{ label }}</span>
    </a>

    <div v-else class="flex items-center gap-3">
        <span
            class="w-9 h-9 rounded-full bg-arka-turquoise/20 text-arka-blue flex items-center justify-center font-bold"
        >
            <i :class="icon" aria-hidden="true"></i>
        </span>
        <span>{{ label }}</span>
    </div>
</template>
