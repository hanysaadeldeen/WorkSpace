<template>
  <section id="features">
    <SectionsTitle title="نقدّم لك أكثر من مجرد مكتب"
      description="صُمّمت كل تفصيلة هنا لتمنحك بيئة عمل تدعم تركيزك وتزيد إنتاجيتك." withButton
      buttonTitle="مزايا تجعل التجربة مختلفة" />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-14">
      <div v-for="features in Features" :key="features.id"
        class="shadowM flex flex-col w-full lg:max-w-[424px] justify-center items-center mx-auto border border-borderPrimary bg-background rounded-3xl p-4 md:p-10">
        <img :src="features.img" :alt="features.title" class="size-12" loading="lazy">
        <div class="mt-8 flex flex-col justify-center items-center">
          <p class="text-xl mb-2 font-bold  text-center text-TextD">{{ features.title }}</p>
          <p class="text-base font-normal  text-center text-paragraph">{{ features.description }}</p>
        </div>
        <div class="mt-6 bg-StatusesBG py-2 px-6 rounded-full flex justify-center items-center gap-3">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.5951 13.6081C5.39409 13.6081 5.19308 13.5311 5.03995 13.378L0.230343 8.56826C-0.0767811 8.26128 -0.0767811 7.76493 0.230343 7.45795C0.537324 7.15097 1.03353 7.15097 1.34065 7.45795L5.5951 11.7124L14.6594 2.6482C14.9664 2.34122 15.4626 2.34122 15.7697 2.6482C16.0767 2.95533 16.0767 3.45153 15.7697 3.75865L6.1504 13.378C5.99726 13.5311 5.79611 13.6081 5.5951 13.6081Z"
              fill="#3B7A57" />
          </svg>
          <span class="text-StatusesTG font-normal text-base">{{ features.Result }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import featuressIco1 from "../assets/img/features/Icon.svg"
import featuressIco2 from "../assets/img/features/Icon (1).svg"
import featuressIco3 from "../assets/img/features/Icon (2).svg"
import featuressIco4 from "../assets/img/features/Icon (3).svg"
import featuressIco5 from "../assets/img/features/Icon (4).svg"
import featuressIco6 from "../assets/img/features/Icon (5).svg"


const Features = [
  {
    id: 1,
    img: featuressIco1,
    title: "بيئة محفزة للإنتاجية",
    description: "مساحة مصممة خصيصاً لتعزيز التركيز والإبداع",
    Result: "تزيد الإنتاجية بنسبة 40%"
  },
  {
    id: 2,
    img: featuressIco2,
    title: "مجتمع مهني متميز",
    description: "شبكة واسعة من رواد الأعمال والمهنيين المبدعين",
    Result: "أكثر من 200 عضو نشط"
  },

  {
    id: 3,
    img: featuressIco3,
    title: "مرونة لا مثيل لها",
    description: "حلول متنوعة تناسب جميع الاحتياجات والميزانيات",
    Result: "من يوم واحد إلى عضوية دائمة"
  },
  {
    id: 4,
    img: featuressIco4,
    title: "تقنية متقدمة",
    description: "إنترنت فائق السرعة وأحدث التقنيات المكتبية",
    Result: "سرعة 1GB مضمونة"
  },
  {
    id: 5,
    img: featuressIco5,
    title: "خدمات شاملة",
    description: "كل ما تحتاجه متوفر: قهوة، طباعة، غرف اجتماعات",
    Result: "خدمة 24/7"
  },
  {
    id: 6,
    img: featuressIco6,
    title: "قيمة استثنائية",
    description: "أفضل سعر مقابل خدمات متميزة في السوق",
    Result: "توفير يصل إلى 60%"
  },
] 
</script>

<style scoped></style>