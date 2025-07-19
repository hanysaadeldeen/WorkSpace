<template>
    <footer :class="locale === 'ar' ? 'rtl' : 'ltr'">

    </footer>
</template>

<script setup lang="ts">
const { locale } = useI18n()

</script>