<script setup>
import { useLandingNavigation } from '../composables/useLandingNavigation';

const { t } = useLandingNavigation();
</script>

<template>
    <footer class="bg-arka-dark text-white border-t border-white/10">
        <div
            class="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/60"
        >
            <div class="flex items-center gap-3">
                <span class="font-display font-bold text-white text-base"
                    >ARKA <span class="text-arka-turquoise">DIGITAL</span></span
                >
                <span>&copy; 2026</span>
            </div>
            <p>{{ t('footer_rights') }}</p>
        </div>
    </footer>
</template>
