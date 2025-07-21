<template>
  <section id="OurLocation">
    <SectionsTitle title="موقعنا يخدمك قبل أن تبدأ"
      description="نقع في أفضل مناطق جدة... وصول سهل، خدمات قريبة، ومواقف مجانية." withButton
      buttonTitle="الوصول السهل يصنع الفرق" />
    <div class="grid grid-cols-2 gap-7 lg:gap-14 justify-center max-xl:grid-cols-1 items-center">
      <div class="relative rounded-3xl md:max-w-[664px] h-full min-h-[500px]  mx-auto group overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full z-10 bg-[#000000] bg-opacity-50 rounded-3xl"></div>
        <img src="~/assets/img/location/OurLocation.png" alt="OurLocation"
          class="w-full h-full object-cover rounded-3xl cursor-pointer group-hover:scale-110 transition duration-500" />
        <span class="absolute top-[40%] left-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer z-20">
          <a href="https://maps.app.goo.gl/3b18QciPyWcb6o2N7" target="_blank">
            <img src="~/assets/img/location/Location.svg" alt="OurLocation" class=" object-contain">
          </a>
        </span>
        <div class="absolute bottom-0 left-0 p-4 md:p-8 w-full z-20">
          <div
            class="bg-background p-4 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-6 rounded-3xl justify-center items-center">
            <div class="space-y-2 text-center">
              <h1 class="font-bold text-xl text-TextD">مساحة العمل الذكي</h1>
              <p class="font-normal text-base text-TextD">اﻟﺤﻤﺮاء ‪ -‬ﻣﺮﻛﺰ ﻓﻠﺴﻄﻴﻦ اﻟﺘﺠﺎري ‪ -‬اﻟﺪور اﻷول ﻣﻜﺘﺐ ‪١٢‬‬</p>
            </div>
            <ContactButton title="احصل علي الاتجاهات" background="#AF99FF" border="#6D4DD1"
              link="https://maps.app.goo.gl/3b18QciPyWcb6o2N7" class="w-full sm:max-w-[255px]">
              <img src="~/assets/img/location/directions.svg" alt="directions" class="max-w-5 max-h-5" width="20px"
                height="20px" loading="lazy">
            </ContactButton>
          </div>
        </div>
      </div>
      <div class="py-7 md:py-14 mx-auto">
        <div class="mb-6 md:mb-12">
          <div class="space-y-4 max-md:text-center">
            <h1 class="font-bold text-2xl md:text-4xl text-TextD">لماذا هذا الموقع مميز؟</h1>
            <p class="font-normal text-base md:text-lg text-TextD">اخترنا موقعًا يجمع بين سهولة الوصول والخدمات ليمنحك
              تجربة عمل
              مريحة ومنتجة.</p>
          </div>
        </div>
        <div class="flex gap-4 md:gap-6 flex-col">
          <div v-for="card in OptionsCards" :key="card.id"
            class="shadowM flex gap-6 justify-start items-center rounded-3xl border border-borderPrimary bg-background px-4 md:px-8 py-4 md:py-5">
            <img :src="card.img" :alt="card.title" class="w-12 h-12" width="48px" height="48px">
            <div class="space-y-1">
              <p class="text-base font-bold  text-TextD">{{ card.title }}</p>
              <p class="text-base font-normal  text-paragraph">{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import icon1 from "../assets/img/location/Icon1.svg"
import icon2 from "../assets/img/location/Icon2.svg"
import icon3 from "../assets/img/location/Icon3.svg"
import icon4 from "../assets/img/location/Icon4.svg"

const OptionsCards = [{
  id: 1,
  title: "قريب من كورنيش الحمراء",
  description: "5 دقائق سيرًا من كورنيش الحمراء",
  img: icon1
},

{
  id: 2,
  title: "مواقف مجانية",
  description: "أكثر من 100 موقف متاح للعملاء",
  img: icon2
},
{
  id: 3,
  title: "مفتوح خلال الدوام",
  description: "نرحّب بك يوميًا خلال مواعيد الدوام",
  img: icon3
},
{
  id: 4,
  title: " خدمات محيطة",
  description: "مطاعم، مقاهي، وخدمات قريبة في المنطقة",
  img: icon4
},
]

</script>

<style scoped></style>