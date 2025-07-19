<template>
  <section id="Audience">
    <SectionsTitle title="مساحات تُلائم الجميع"
      description="سواء كنت تعمل وحدك أو مع فريق، لدينا المساحة التي تناسبك تمامًا." withButton
      buttonTitle="لكل فئة مساحة تناسبها" />
    <div class="grid grid-cols-1 gap-7 sm:grid-cols-2 md:gap-14">
      <div class="shadowM rounded-3xl bg-background" v-for="Audience in Audiences">
        <img :src="Audience.img" :alt="Audience.title" loading="lazy" class="object-contain">
        <div class="p-8 md:p-12">
          <div class="mb-4 md:mb-8">
            <h1 class="font-bold text-2xl md:text-3xl mb-2">{{ Audience.title }}</h1>
            <p class="text-sm md:text-lg font-normal">{{ Audience.description }}</p>
          </div>
          <div class="space-y-2 md:space-y-4 ">
            <div class="relative flex gap-4  " v-for="feature in Audience.features">
              <span class="rounded-full bg-primary w-[10px] h-[10px] mt-2" />
              <h2 class="font-normal text-sm md:text-base text-paragraph">{{ feature }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AudienceCard from '../assets/img/audience/Audience1.png'


const Audiences = [{
  id: 1,
  title: "المستقلون",
  description: "بيئة هادئة تساعدك على التركيز، والعمل بكل خصوصية وراحة.",
  img: AudienceCard,
  features: ["إنترنت سريع ومستقر", "أجواء هادئة بعيدًا عن الإزعاج", "تجهيزات متوفرة دائمًا"]
},

{
  id: 2,
  title: "رواد الأعمال",
  description: "مساحة تساعدك على الانطلاق وبناء مشروعك بثقة ومرونة.",
  img: AudienceCard,
  features: ["مكاتب مرنة قابلة للتوسّع", "خدمات إدارية وتشغيلية متوفرة", 'لا حاجة لتكاليف تأسيس']
},

{
  id: 3,
  title: "الفرق الصغيرة",
  description: "مساحات مجهّزة تدعم العمل الجماعي واللقاءات اليومية بسلاسة.",
  img: AudienceCard,
  features: ["غرف عمل خاصة أو مشتركة", "تجهيزات متكاملة للاجتماعات", "مرونة في الحجز والاستخدام"]
},

{
  id: 4,
  title: "الشركات الناشئة",
  description: "حلول ذكية لدعم النمو اليومي والإدارة بمرونة وكفاءة.",
  img: AudienceCard,
  features: ["مكاتب مخصصة للفرق المتوسعة", "دعم إداري وتقني متكامل", "أجواء احترافية تعزز الإنتاجية"]
},
]


</script>

<style scoped></style>