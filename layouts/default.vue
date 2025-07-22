<template>
  <div>
    <AppHeader :dir="locale === 'ar' ? 'rtl' : 'ltr'" />
    <slot />
    <AppFooter :dir="locale === 'ar' ? 'rtl' : 'ltr'" />
    <ScrollToTop />
    <WhatsUpScroll />

  </div>
</template>

<script setup>
const { locale } = useI18n()
</script>
