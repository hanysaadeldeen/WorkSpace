<template>
  <button @click="setLocale(locale === 'en' ? 'ar' : 'en')" class="text-base font-medium group  flex gap-x-1   ">
    <span class="text-TextD group-hover:text-primary transition-all duration-300 ease-in-out">
      {{ locale === "en" ? "العربية" : "En" }}
    </span>
    <Globe class="text-TextD group-hover:text-primary transition-all duration-300 ease-in-out " />
  </button>
</template>

<script setup>
import { Globe } from 'lucide-vue-next';

const { locale, setLocale } = useI18n();
</script>

<style scoped></style>
