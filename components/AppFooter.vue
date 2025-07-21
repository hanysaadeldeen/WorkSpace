<template>
  <footer :dir="locale === 'ar' ? 'rtl' : 'ltr'"
    class="relative mx-auto  max-w-[1384px]  py-8  max-2xl:px-5 md:pt-16  lg:pt-20">
    <div class="container relative mx-auto ">
      <div class="flex justify-between gap-10 flex-wrap border-b border-[#777777] pb-6 md:pb-14 ">
        <div class="flex-grow">
          <nuxt-link :to="localePath('index')">
            <img src="~/assets/img/Logo.svg" class="mb-6 inline-block object-contain" alt="DO logo" width="132px"
              height="56px" />
          </nuxt-link>
          <div class="content max-w-[304px]">
            <p class="text-base font-normal text-TextD">
              مساحة العمل – أحد حلول <span class="font-bold underline cursor-pointer"> DO</span> <br>
              لتبدأ عملك في
              بيئة تواكب طموحك.
            </p>
            <div class="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-10">
              <div class="flex h-10 w-10 items-center justify-center rounded-full border border-TextD "
                v-for="social in SocialMedia" :key="social.id">
                <a :href="social.link" target="_blank" rel="noopener noreferrer" class="text-base text-white"
                  :aria-label="`Visit our ${social.socialName} page`" v-html="social.icon"></a>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:w-[304px] ">
          <h2 class="footer_title">روابط سريعة</h2>
          <nav>
            <ul class="flex flex-col gap-2 text-lg font-medium">
              <li class="
                                text-paragraph transition-all duration-200 ease-in-out hover:text-primary cursor-pointer
                            ">
                <a href="#">
                  الخدمات
                </a>
              </li>
              <li class="
                                text-paragraph transition-all duration-200 ease-in-out hover:text-primary cursor-pointer
                            ">
                <a href="#">
                  الموقع
                </a>
              </li>
              <li class="
                                text-paragraph transition-all duration-200 ease-in-out hover:text-primary cursor-pointer
                            ">
                <a href="#">
                  سياسة الخصوصية
                </a>
              </li>
              <li class="
                                text-paragraph transition-all duration-200 ease-in-out hover:text-primary cursor-pointer
                            ">
                <a href="#">
                  الشروط والأحكام
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="sm:w-[424px]">
          <div class="">
            <h2 class="footer_title">تواصل معنا</h2>
            <div class="flex justify-start items-center gap-4 mb-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00001 3.43945C6.36213 3.43945 5.0296 4.77198 5.0296 6.40986C5.0296 8.04773 6.36213 9.38027 8.00001 9.38027C9.63788 9.38027 10.9704 8.04773 10.9704 6.40986C10.9704 4.77198 9.63791 3.43945 8.00001 3.43945ZM8.00001 8.12958C7.05176 8.12958 6.28029 7.35811 6.28029 6.40986C6.28029 5.46161 7.05176 4.69014 8.00001 4.69014C8.94826 4.69014 9.71973 5.46161 9.71973 6.40986C9.71973 7.35811 8.94826 8.12958 8.00001 8.12958Z"
                  fill="#5A5F6A" />
                <path
                  d="M7.99999 0C4.46559 0 1.59015 2.87547 1.59015 6.40984V6.58703C1.59015 8.37453 2.61496 10.4575 4.63621 12.7781C6.10146 14.4603 7.54624 15.6333 7.60699 15.6824L7.99999 16L8.39299 15.6825C8.45377 15.6333 9.89855 14.4603 11.3638 12.7781C13.385 10.4575 14.4098 8.37456 14.4098 6.58706V6.40987C14.4098 2.87547 11.5344 0 7.99999 0ZM13.1591 6.58706C13.1591 9.60784 9.26693 13.2646 7.99999 14.3746C6.73271 13.2642 2.84084 9.60763 2.84084 6.58706V6.40987C2.84084 3.56512 5.15524 1.25072 7.99999 1.25072C10.8447 1.25072 13.1591 3.56512 13.1591 6.40987V6.58706Z"
                  fill="#5A5F6A" />
              </svg>



              <p class=" text-paragraph transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
                اﻟﺤﻤﺮاء ‪ -‬ﻣﺮﻛﺰ ﻓﻠﺴﻄﻴﻦ اﻟﺘﺠﺎري ‪ -‬اﻟﺪور اﻷول ﻣﻜﺘﺐ ‪١٢‬‬
              </p>
            </div>
            <div class="flex justify-start items-center gap-4 mb-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.3 3.00098C14.771 3.00098 15.1429 3.34939 15.2199 3.7959L15.2394 3.89648L15.2404 3.89941C15.2405 3.90082 15.2405 3.90277 15.2433 3.91211C15.2456 3.91958 15.2502 3.93438 15.2502 3.95117V12.0508C15.2502 12.0674 15.2456 12.0822 15.2433 12.0898C15.242 12.0943 15.241 12.0972 15.2404 12.0996C15.24 12.1014 15.2404 12.1025 15.2404 12.1025L15.2394 12.1055C15.236 12.1344 15.2305 12.1639 15.2209 12.1953L15.2219 12.1963C15.149 12.6468 14.7739 13.001 14.3 13.001H1.70038C1.22653 13.001 0.851395 12.6469 0.778503 12.1973L0.77948 12.1963C0.769858 12.1649 0.763364 12.1354 0.759949 12.1064V12.1025C0.759811 12.101 0.759522 12.0984 0.757019 12.0898C0.754807 12.0823 0.750183 12.0674 0.750183 12.0508V3.95117C0.750183 3.93437 0.754778 3.91958 0.757019 3.91211C0.759796 3.90285 0.759875 3.90081 0.759949 3.89941V3.89648C0.763641 3.8651 0.768881 3.83062 0.780457 3.7959C0.857469 3.34942 1.2294 3.00098 1.70038 3.00098H14.3ZM8.29608 9.30371C8.208 9.36877 8.10397 9.40035 8.00018 9.40039C7.92232 9.40039 7.84396 9.38311 7.77264 9.34668L7.70428 9.30371L6.77362 8.62109L2.16425 12.001H13.8361L9.22577 8.62109L8.29608 9.30371ZM10.0715 8.00098L14.2502 11.0645V4.9375L10.0715 8.00098ZM1.75018 11.0635L5.92792 8.00098L1.75018 4.93848V11.0635ZM7.03632 7.57324L7.03729 7.57422L7.99921 8.28027L8.96405 7.57324L13.8351 4.00098H2.16522L7.03632 7.57324Z"
                  fill="#5A5F6A" stroke="#5A5F6A" stroke-width="0.1" />
              </svg>


              <p class="  text-paragraph transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
                <a href="https://mail.google.com/mail/?view=cm&to=info@do.com.sa" target="_blank">info@do.com.sa</a>
              </p>
            </div>
            <div class="flex justify-start items-center gap-4">

              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.085 10.96C13.001 10.861 11.946 10.585 10.95 10.14C10.459 9.921 9.886 10.12 9.646 10.596L8.659 12.557C6.445 11.382 4.617 9.554 3.442 7.341L5.403 6.354C5.878 6.115 6.079 5.542 5.859 5.05C5.414 4.054 5.138 3 5.04 1.916C4.992 1.394 4.567 1 4.05 1H1.5C1.224 1 1 1.224 1 1.5C1 3.536 1.444 5.499 2.319 7.337C3.648 10.099 5.901 12.352 8.665 13.681C10.501 14.556 12.464 15 14.5 15C14.776 15 15 14.776 15 14.5V11.95C15 11.433 14.606 11.008 14.085 10.96ZM2.01 2.001L4.043 2.006C4.152 3.2 4.456 4.362 4.953 5.46L3.011 6.439C2.405 5.026 2.069 3.538 2.01 2.001ZM14 13.99C12.463 13.93 10.974 13.594 9.562 12.99L10.542 11.054C11.638 11.544 12.8 11.848 14 11.95V13.99Z"
                  fill="#5A5F6A" />
              </svg>

              <p class="text-paragraph transition-all   ">
                <span class="mx-1">
                  <a href="tel:+966502765770" target="_blank"
                    class="cursor-pointer duration-200 ease-in-out hover:text-primary">
                    0502765770
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 class="px-4 mb-4 mt-6  text-center text-sm font-normal text-paragraph   ">
        جميع الحقوق محفوظة 2025 © شركة DO . بواسطة <a href="https://do.com.sa/"
          class=" font-bold text-lg mx-1 underline" target="_blank">DO</a>
      </h1>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const localePath = useLocalePath();
const route = useRoute();

const SocialMedia = [
  {
    id: 1,
    icon: '<i class="fa-brands fa-instagram text-TextD"></i>',
    socialName: "Instagram",
    link: "https://www.instagram.com/do.sa225/?igsh=MXhyYW11Y3JrZjEzNw%3D%3D#",
  },
  {
    id: 2,
    icon: '<i class="fa-brands fa-linkedin-in text-TextD"></i>',
    socialName: "linkedin",
    link: "https://www.linkedin.com/in/do-sa-b3682a362/",
  },
  {
    id: 3,
    icon: '<i class="fa-brands fa-whatsapp text-TextD"></i>',
    socialName: "whatsapp",
    link: "https://wa.me/966502765770",
  },
  {
    id: 4,
    icon: '<i class="fa-brands fa-tiktok text-TextD"></i>',
    socialName: "tiktok",
    link: "https://",
  },
];


const getPathWithoutLocale = (path: string) => {
  const segments = path.split("/");
  if (segments[1] && segments[1].length === 2) {
    return `/${segments.slice(2).join("/")}`;
  }
  return path;
};

const adjustedPath = computed(() => getPathWithoutLocale(route.path));
</script>

<style scoped>
.footer_title {
  @apply mb-6 text-base font-bold capitalize text-[#1A1A1A];
}

@media (max-width: 768px) {
  .footer_title {
    @apply mb-3;
  }
}

nav ul li {
  font-size: 16px;
}
</style>
