<template>
  <div class="bg-black py-16 md:py-[120px]" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <div
      class="flex flex-col justify-center items-center gap-4 md:gap-6  border-b border-TextD pb-12 lg:pb-24 max-w-[904px] mx-auto px-5 ">
      <button class="flex justify-center items-center gap-2 rounded-full py-3 px-10 gradientT ">
        <span class="rounded-full bg-secondary w-[10px] h-[10px]" />
        <span class="inline-block text-white font-bold text-sm">
          عرض خاص لفترة محدودة
        </span>
      </button>
      <div class="flex flex-col justify-center">
        <h1 class="text-center text-white font-bold text-2xl md:text-4xl mb-2 md:mb-4 !leading-[50.4px]">ابدأ الآن…
          واحصل
          على شهر
          مجاني
        </h1>
        <p class="text-center text-[#E2E2E2] font-normal text-sm md:text-base mb-7 md:mb-14 !leading-[25.6px]">انضم إلى
          بيئة عمل
          احترافية،
          مصمّمة لدعم إنتاجيتك منذ اللحظة الأولى .<br>استفد من عرض الشهر المجاني — دون شروط أو التزامات.</p>
        <ContactButton title="احجز شهرك المجاني الآن" background="#FFF422" border="#C6B900"
          link="https://wa.me/966502765770" class="w-full sm:w-fit mx-auto">
          <img src="~/assets/img/Util/calendar (3) 1.svg" alt="whatsapp" class="max-w-5 max-h-5" width="20px"
            height="20px" loading="lazy">
        </ContactButton>
      </div>
    </div>
    <div class="my-6 md:my-12 flex justify-center items-center  sm:gap-14 flex-wrap">
      <div class="flex justify-center items-center gap-4 py-4 px-6">
        <img src="~/assets/img/ctaOffer/Icon.svg" alt="clock">
        <div class="space-y-2">
          <p class="text-white font-bold text-sm  ">ساعات العمل</p>
          <p class="font-normal text-sm text-[#E2E2E2]   ">نرحّب بك يوميًا خلال مواعيد الدوام</p>
        </div>
      </div>

      <div class="flex justify-center items-center gap-4 py-4 px-6">
        <img src="~/assets/img/ctaOffer/Icon (1).svg" alt="location">
        <div class="space-y-2">
          <p class="text-white font-bold text-sm  ">موقعنا</p>
          <p class="font-normal text-sm text-[#E2E2E2]   ">وسط المدينة – سهل الوصول</p>
        </div>
      </div>

    </div>
    <div class="rounded-3xl border border-paragraphTwo  py-6 md:py-10 space-y-2 max-w-[664px] mx-auto bg-white/10">
      <div class="flex justify-center items-center gap-2">
        <img src="~/assets/img/ctaOffer/gift.svg" alt="gift">
        <h1 class="text-white font-bold !leading-[32px] text-xl text-center">عرض محدود ينتهي قريبًا</h1>
      </div>
      <p class="text-[#A1A1A1] font-normal text-base text-center">استمتع بشهر مجاني كامل — دون التزام أو شروط مسبقة</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

</script>

<style scoped>
.gradientT {
  background: linear-gradient(to right, rgba(203, 190, 255, 0.1), rgba(255, 249, 140, 0.1));
}
</style>