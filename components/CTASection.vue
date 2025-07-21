<template>
  <section>
    <div class="shadowB px-4 py-8 md:py-12 lg:py-16 rounded-3xl border border-[#E6D800] w-full">
      <div class="py-2 px-6 text-sm font-bold text-paragraphTwo rounded-full bg-secondary w-fit mx-auto mb-8">عرض
        محدود
      </div>
      <div class="flex flex-col justify-center items-center gap-4 ">
        <h1 class="text-center font-bold text-2xl md:text-4xl ">تجربة مجانية لمدة شهر كامل</h1>
        <p class="text-center text-paragraphTwo font-normal text-sm md:text-lg">مساحة عمل مجهّزة بالكامل، بدون
          التزامات أو شروط مسبقة<br> نحن واثقون أن التجربة وحدها كفيلة بإقناعك.</p>
      </div>
      <div class="md:max-w-[255px] mx-auto w-fit mt-6 md:mt-8">
        <ContactButton title="احجز مكانك اليوم" background="#FFF422" border="#C6B900" link="https://wa.me/966502765770">
          <img src="~/assets/img/Util/calendar (3) 1.svg" alt="whatsapp" class="max-w-5 max-h-5" width="20px"
            height="20px" loading="lazy">
        </ContactButton>
      </div>
    </div>
    <div class="mt-7 md:mt-14 flex justify-center items-center flex-wrap">
      <div class="px-8 py-3 flex justify-center items-center gap-3 " v-for="card in TestCards" :key="card.id">
        <img :src="card.img" :alt="card.title" width="20px" height="20px">
        <p class="text-base font-normal text-paragraphTwo">{{ card.title }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


import shield from "../assets/img/cta/shield 1.svg"
import checkmark from "../assets/img/cta/checkmark.svg"
import badge from "../assets/img/cta/badge.svg"

const TestCards = [
  {
    id: 1,
    title: "تجربة آمنة ومضمونة",
    img: shield
  },
  {
    id: 2,
    title: " أكثر من 500 عميل راضٍ",
    img: checkmark
  },
  {
    id: 3,
    title: "تقييم 4.9 من 5 نجوم",
    img: badge
  },
]


</script>


<style scoped>
.shadowB {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  transition: .2s ease-in-out;
  cursor: pointer;
}

.shadowB:hover {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2)
}
</style>