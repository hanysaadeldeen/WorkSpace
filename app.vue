<template>
  <div class="overflow-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { watch } from "vue";

const { locale } = useI18n();

const setDirection = () => {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("lang", locale.value);
  }
};
onMounted(() => {
  setDirection();
});
watch(locale, setDirection, { immediate: true });
</script>

<style scoped></style>