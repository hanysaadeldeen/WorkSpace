<template>
    <header class="relative max-lg:pt-5 z-30">
        <main class="mx-auto max-w-[1383px] relative flex   justify-between   items-center lg:mt-14 px-5 ">
            <nuxt-link to="/" class="logo z-30 relative">
                <img src="~/assets/img/Logo.svg" loading="eager" alt="Logo" class="max-w-[132px] max-h-[56px]"
                    width="132" height="56" />
            </nuxt-link>
            <nav class="shadow hidden lg:block fixed top-14 left-1/2  mx-4 -translate-x-1/2 z-30 bg-white text-primary-dark px-4
        md:px-10 pb-2 md:pb-4 pt-3 md:pt-[13px]  rounded-full w-full md:w-[591px] ">
                <ul class=" flex gap-4 md:gap-10 justify-between items-center">
                    <li>
                        <a href="#aboutUs">
                            من نحن
                        </a>
                    </li>
                    <li>
                        <a href="#gallary">
                            معرض الصور
                        </a>
                    </li>
                    <li>
                        <a href="#services">
                            الخدمات
                        </a>
                    </li>
                    <li>
                        <a href="#CompetitorsUs">
                            لماذا نحن
                        </a>
                    </li>
                    <li>
                        <a href="#location">
                            الموقع
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="gap-10 justify-between items-center  z-30 relative hidden lg:flex">
                <LanguageSwitcher class=" flex" />
                <button
                    class="shadow contact bg-transparent border-2 border-primary rounded-full text-primary transition-all duration-300 ease-in-out hover:text-white hover:border-transparent hover:bg-primary font-bold text-sm py-2 px-6">تواصل
                    معنا</button>
            </div>
            <div class="relative block lg:hidden  z-30 text-TextD hover:text-primary">
                <AlignLeft @click="toggleSidebar"
                    class=" transition-all duration-300 cursor-pointer size-10  lg:hidden  block h-full "
                    :class="{ hidden: isSideBar }" />
                <X @click="toggleSidebar" class=" transition-all duration-300  cursor-pointer size-10  lg:hidden block"
                    :class="{ hidden: !isSideBar }" />
            </div>
        </main>
        <transition :name="transitionName">
            <div v-if="isSideBar"
                class="sideBar fixed inset-x-0 top-[90px]  z-[29] flex h-[calc(100dvh-84px)] w-full flex-col items-start px-5 transition-all  lg:hidden "
                :class="[
                    {
                        'right-0': locale === 'ar',
                        'left-0': locale !== 'ar',
                    },
                ]">
                <div class="absolute -top-[90px] left-0   w-full h-[calc(100%+90px)]  bg-white  z-10  opacity-90  ">
                </div>
                <nav class="py-10 relative z-20">
                    <ul class="flex flex-col gap-8 justify-between text-primary-dark">
                        <li @click="toggleSidebar">
                            <a href="#aboutUs" class="">
                                من نحن
                            </a>
                        </li>
                        <li @click="toggleSidebar">
                            <a href="#gallary">
                                معرض الصور
                            </a>
                        </li>
                        <li @click="toggleSidebar">

                            <a href="#services">
                                الخدمات
                            </a>
                        </li>
                        <li @click="toggleSidebar">

                            <a href="#CompetitorsUs">
                                لماذا نحن
                            </a>
                        </li>
                        <li @click="toggleSidebar">
                            <a href="#location">
                                الموقع
                            </a>
                        </li>
                    </ul>
                </nav>
                <LanguageSwitcher class="z-30 relative" />
            </div>
        </transition>
    </header>

</template>

<script setup lang="ts">
import { X, AlignLeft } from 'lucide-vue-next';

// import AOS from "aos";
// import "aos/dist/aos.css";
// onMounted(() => {
//   AOS.init({
//     duration: 600,
//     once: true,
//   })
// })
import { useDebounceFn } from "@vueuse/core";
const { locale } = useI18n();
const isSideBar = ref<boolean>(false);
const transitionName = computed(() =>
    locale.value === "ar" ? "sidebar-ar" : "sidebar-en",
);
const route = useRoute();

// Optimize sidebar toggle function
const toggleSidebar = () => {
    isSideBar.value = !isSideBar.value;
};

// Add scroll lock functionality with debounce
const debouncedScrollLock = useDebounceFn((value: boolean) => {
    document.body.style.overflow = value ? "hidden" : "";
}, 100);

watch(isSideBar, (newValue) => {
    debouncedScrollLock(newValue);
});

// Close sidebar on scroll with debounce
const debouncedScrollHandler = useDebounceFn(() => {
    if (isSideBar.value) {
        isSideBar.value = false;
    }
}, 100);

onMounted(() => {
    window.addEventListener("scroll", debouncedScrollHandler);
});

onUnmounted(() => {
    window.removeEventListener("scroll", debouncedScrollHandler);
});

// const getPathWithoutLocale = (path: string) => {
//     const segments = path.split("/");
//     if (segments[1] && segments[1].length === 2) {
//         return `/${segments.slice(2).join("/")}`;
//     }
//     return path;
// };

// const adjustedPath = computed(() => getPathWithoutLocale(route.path));
</script>

<style scoped>
button ul li {
    color: #0F3537;
    font-size: 16px;
    margin-bottom: 2px;
}

nav ul li a {
    color: #1A1A1A;
    font-size: 16px;
    font-weight: 400;
    transition: 0.3s ease-in-out;
}

nav ul li:hover a {
    color: #AF99FF;
}

@media (max-width:768px) {
    nav ul li a {
        font-size: 14px;
    }
}


.shadow {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.16);
    transition: .2s ease-in-out;
    cursor: pointer;
}

.shadow:hover {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1)
}

@media (max-width:768px) {
    ul li {
        font-size: 12px;
    }
}

/* start sidebar animaiton */
.sidebar-en-enter-active,
.sidebar-en-leave-active,
.sidebar-ar-enter-active,
.sidebar-ar-leave-active {
    transition: all 0.3s ease;
    will-change: transform, opacity;
}

.sidebar-en-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}

.sidebar-en-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.sidebar-ar-enter-from {
    transform: translateX(100%);
    opacity: 0;
}


.sidebar-ar-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

/* end sidebar animaiton */
</style>
