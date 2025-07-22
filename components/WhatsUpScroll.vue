<template>
  <a href="https://wa.me/966502765770" target="_blank">
    <span v-if="showButton"
      class="fixed bottom-28 text-white p-4 rounded-full shadow-lg transition duration-300 z-50 ease-in-out size-12 md:w-14 md:h-14 flex justify-center items-center opacity-0 group  animate-fadeIn bg-[#25D366] hover:bg-green-600"
      :class="locale === 'ar' ? ' right-10' : 'left-10'">
      <i class="fa-brands fa-whatsapp text-2xl md:text-3xl"></i>

    </span>
  </a>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showButton = ref(false);
const { locale } = useI18n();

const handleScroll = () => {
  showButton.value = window.scrollY > window.innerHeight * 0.5;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

</script>
<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-in-out forwards;
}
</style>
