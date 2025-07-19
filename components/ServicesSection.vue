<template>
  <section id="services">
    <SectionsTitle title="خدمات مصممة لراحتك"
      description="نوفر مجموعة متكاملة من الخدمات اليومية التي تسهل يومك وتزيد إنتاجيتك." withButton
      buttonTitle="مساحتك... بخدمات تستحقها" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-14">
      <div v-for="service in services" :key="service.id"
        class="shadowM flex flex-col w-full lg:max-w-[304px] justify-center items-center mx-auto border border-borderPrimary bg-background rounded-3xl p-4 md:p-10">
        <img :src="service.img" :alt="service.title" class="size-12" loading="lazy">
        <div class="mt-8 flex flex-col justify-center items-center">
          <p class="text-xl mb-2 font-bold  text-center text-TextD">{{ service.title }}</p>
          <p class="text-base font-normal  text-center text-paragraph">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import servicesIco1 from "../assets/img/Services/Icon1.svg"
import servicesIco2 from "../assets/img/Services/Icon2.svg"
import servicesIco3 from "../assets/img/Services/Icon3.svg"
import servicesIco4 from "../assets/img/Services/Icon4.svg"


const services = [
  {
    id: 1,
    img: servicesIco1,
    title: "خدمات تقنية",
    description: "إنترنت فايبر عالي السرعة – نظام حماية – دخول بالبصمة – صيانة وتجهيز الحاسب الآلي"
  },
  {
    id: 2,
    img: servicesIco2,
    title: "قاعة اجتماعات",
    description: "يُتاح مجانًا استخدام قاعات الاجتماعات عند استئجار أي من باقات المكاتب"
  },

  {
    id: 3,
    img: servicesIco3,
    title: " خدمات إدارية مساندة",
    description: "العنوان الوطني – إصدار التراخيص التجارية – التسويق – محاسبة – شؤون الموظفين"
  },
  {
    id: 4,
    img: servicesIco4,
    title: "خدمات يومية متكاملة",
    description: "ضيافة يومية: القهوة – الشاي – المياه، نظافة شاملة للمرافق والمكاتب يوميًا"
  },
]

</script>

<style scoped></style>