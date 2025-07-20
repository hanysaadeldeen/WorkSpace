<template>
  <section id="CompetitorsUs"
    class="bg-background border border-borderPrimary p-8 md:p-12 lg:p-16 xl:p-[120px] rounded-3xl">
    <div class=" md:pb-6">
      <SectionTItleTwo title="ما يميزنا عن الحلول التقليدية"
        description="التجربة مختلفة تمامًا حين تعمل من مكان مصمّم لراحتك." />
    </div>
    <div class="mb-10 md:mb-20 ">
      <div class="flex gap-7 md:gap-14 max-lg:flex-col">
        <div class="flex-grow">
          <div
            class="gradientTwo shadowTwo md:py-8 p-4 md:px-10 w-full mb-6 md:mb-12 border border-borderPrimary rounded-3xl">
            <h2 class="font-bold text-xl md:text-2xl text-center">مساحة العمل الذكية</h2>
            <p class="text-TextD font-normal text-sm md:text-base text-center">الخيار الأمثل</p>
          </div>
          <div class="flex flex-col gap-4 md:gap-6">
            <div v-for="strength in Strengths"
              class=" bg-StatusesBG py-3  rounded-full flex justify-start px-4 md:pr-8 items-center gap-3 w-full">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.5951 13.6081C5.39409 13.6081 5.19308 13.5311 5.03995 13.378L0.230343 8.56826C-0.0767811 8.26128 -0.0767811 7.76493 0.230343 7.45795C0.537324 7.15097 1.03353 7.15097 1.34065 7.45795L5.5951 11.7124L14.6594 2.6482C14.9664 2.34122 15.4626 2.34122 15.7697 2.6482C16.0767 2.95533 16.0767 3.45153 15.7697 3.75865L6.1504 13.378C5.99726 13.5311 5.79611 13.6081 5.5951 13.6081Z"
                  fill="#3B7A57" />
              </svg>
              <span class="text-StatusesTG font-normal text-base">{{ strength }}</span>
            </div>
          </div>
        </div>

        <div class="flex gap-7 xl:gap-14 justify-center max-sm:flex-wrap">
          <div class="bg-white p-6 md:p-10 border border-[#E2E2E2] rounded-3xl w-full xl:w-[304px]">
            <div class="bg-background border border-[#E2E2E2] p-4 mb-6 md:mb-8 rounded-2xl">
              <h2 class="text-center font-bold text-lg text-paragraph">المكتب التقليدي</h2>
            </div>
            <div class="flex flex-col gap-4 md:gap-6">
              <div v-for="office in Office"
                class=" bg-StatusesBR py-3  rounded-full flex justify-start px-4 md:pr-8 items-center gap-3 w-full">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.09938 8.00009L13.7719 3.32729C14.076 3.02334 14.076 2.53191 13.7719 2.22796C13.468 1.92401 12.9766 1.92401 12.6726 2.22796L7.99993 6.90076L3.32737 2.22796C3.02329 1.92401 2.532 1.92401 2.22806 2.22796C1.92398 2.53191 1.92398 3.02334 2.22806 3.32729L6.90062 8.00009L2.22806 12.6729C1.92398 12.9768 1.92398 13.4683 2.22806 13.7722C2.37953 13.9238 2.5787 14 2.77772 14C2.97674 14 3.17576 13.9238 3.32737 13.7722L7.99993 9.09942L12.6726 13.7722C12.8242 13.9238 13.0233 14 13.2223 14C13.4213 14 13.6203 13.9238 13.7719 13.7722C14.076 13.4683 14.076 12.9768 13.7719 12.6729L9.09938 8.00009Z"
                    fill="#C0392B" />
                </svg>
                <span class="text-StatusesTR font-normal text-base">{{ office }}</span>
              </div>
            </div>
          </div>
          <div class="bg-white p-6 md:p-10 border border-[#E2E2E2] rounded-3xl w-full xl:w-[304px]">
            <div class="bg-background border border-[#E2E2E2] p-4  mb-6 md:mb-8 rounded-2xl">
              <h2 class="text-center font-bold text-lg text-paragraph">العمل من المقهى</h2>
            </div>
            <div class="flex flex-col gap-4 md:gap-6">
              <div v-for="cafe in Cafe"
                class=" bg-StatusesBR py-3 rounded-full flex justify-start px-4 md:pr-8 items-center gap-3 w-full">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.09938 8.00009L13.7719 3.32729C14.076 3.02334 14.076 2.53191 13.7719 2.22796C13.468 1.92401 12.9766 1.92401 12.6726 2.22796L7.99993 6.90076L3.32737 2.22796C3.02329 1.92401 2.532 1.92401 2.22806 2.22796C1.92398 2.53191 1.92398 3.02334 2.22806 3.32729L6.90062 8.00009L2.22806 12.6729C1.92398 12.9768 1.92398 13.4683 2.22806 13.7722C2.37953 13.9238 2.5787 14 2.77772 14C2.97674 14 3.17576 13.9238 3.32737 13.7722L7.99993 9.09942L12.6726 13.7722C12.8242 13.9238 13.0233 14 13.2223 14C13.4213 14 13.6203 13.9238 13.7719 13.7722C14.076 13.4683 14.076 12.9768 13.7719 12.6729L9.09938 8.00009Z"
                    fill="#C0392B" />
                </svg>
                <span class="text-StatusesTR font-normal text-base">{{ cafe }}</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="gradient px-4 py-8 md:py-12 lg:py-16 rounded-3xl border border-[#E2E2E2] w-full flex flex-col gap-4 md:gap-10">
      <div class="flex flex-col justify-center items-center gap-4 ">
        <h1 class="text-center font-bold text-2xl md:text-4xl ">الفرق واضح... اختر الأفضل</h1>
        <p class="text-center text-paragraphTwo font-normal text-sm md:text-base">الآن بعد أن عرفت الفرق، خُذ خطوتك نحو
          مساحة عمل تدعم نجاحك.</p>
      </div>
      <div class="md:max-w-[255px] mx-auto">
        <ContactButton title="احجز مكانك اليوم" background="#FFF422" border="#C6B900" link="tel:+966502765770">
          <img src="~/assets/img/Util/calendar (3) 1.svg" alt="whatsapp" class="max-w-5 max-h-5" width="20px"
            height="20px" loading="lazy">
        </ContactButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const Strengths = ["مرونة كاملة في الحجز", "تكلفة اقتصادية", "بيئة مهنية محفزة", "شبكة مهنية واسعة"]
const Office = ["تكلفة عالية", "التزام طويل المدى", "تكاليف إضافية مخفية", "عزلة مهنية"]
const Cafe = ["بيئة مشتتة", "إنترنت غير مستقر", "عدم الخصوصية", "غير مهني"]
</script>

<style scoped>
.gradientTwo {
  background: linear-gradient(to right, #CBBEFF, #FFF98C);
}

.shadowTwo {
  box-shadow: 0 0 20px #FFF42229;
  transition: .2s ease-in-out;
  cursor: pointer;
}

.shadowTwo:hover {
  box-shadow: 0 0 16px #FFF42266
}
</style>