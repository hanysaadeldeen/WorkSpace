<template>
    <a href="#">
        <span v-if="showButton" @click="scrollToTop"
            class="fixed bottom-10 text-white p-4 rounded-full shadow-lg transition duration-300 z-50 ease-in-out size-12 md:w-14 md:h-14 flex justify-center items-center opacity-0 animate-fadeIn bg-primary hover:bg-primary/80"
            :class="locale === 'ar' ? ' right-10' : 'left-10'">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 17L12 7L2 17" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </span>
    </a>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { ChevronUp } from 'lucide-vue-next';

const showButton = ref(false);
const route = useRoute();
const { locale } = useI18n();

const handleScroll = () => {
    showButton.value = window.scrollY > window.innerHeight * 0.5;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});
watch(route, () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
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
