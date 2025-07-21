<template>
  <section>
    <SectionsTitle title="كل ما تحتاج معرفته… بإجابة واحدة"
      description="جمعنا أكثر الأسئلة شيوعًا لتكون الصورة واضحة من أول خطوة." withButton
      buttonTitle="نحن نجيب قبل أن تسأل" />
    <div>
      <div class="max-w-[904px] mx-auto space-y-4 md:space-y-6 lg:space-y-8">

        <div
          class="question rounded-3xl border border-borderPrimary  px-6 py-4 md:px-10 md:py-6 space-y-4   bg-background"
          v-for="(question, idx) in questions" :key="question.id">
          <div class="flex justify-between items-center gap-4 ">
            <div class="flex justify-start items-center gap-6">
              <img :src="question.img" :alt="question.alt" class="w-10 h-10" width="40px" height="40px">
              <p class="text-base lg:text-lg font-bold text-TextD">
                {{ question.title }}
              </p>
            </div>
            <p class="cursor-pointer text-3xl text-paragraph" v-if="question.open" @click="toggleQuestion(idx)"><svg
                width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.7133 0.801251C10.3247 0.412604 9.67534 0.412604 9.28569 0.801251L0.295223 9.76872C-0.0984076 10.1623 -0.0984076 10.8007 0.295223 11.1933C0.688853 11.587 1.32821 11.587 1.72184 11.1933L9.99996 2.93823L18.2771 11.1943C18.6717 11.588 19.3101 11.588 19.7047 11.1943C20.0983 10.8007 20.0983 10.1623 19.7047 9.76972L10.7133 0.801251Z"
                  fill="#5A5F6A" />
              </svg>
            </p>
            <p class="cursor-pointer text-5xl text-paragraph" v-if="!question.open" @click="toggleQuestion(idx)">
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.7133 11.1987C10.3247 11.5874 9.67534 11.5874 9.28569 11.1987L0.295223 2.23128C-0.0984076 1.83765 -0.0984076 1.19929 0.295223 0.806656C0.688853 0.413026 1.32821 0.413026 1.72184 0.806656L9.99996 9.06177L18.2771 0.805659C18.6717 0.412028 19.3101 0.412028 19.7047 0.805659C20.0983 1.19929 20.0983 1.83765 19.7047 2.23028L10.7133 11.1987Z"
                  fill="#5A5F6A" />
              </svg>
            </p>
          </div>
          <div class="text-paragraph text-sm md:text-base pr-16" v-if="question.open">
            {{ question.answer }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="gradient max-w-[904px] mx-auto  mt-16 md:mt-[160px] px-4 py-8 md:py-12 lg:py-16 rounded-3xl border border-[#E2E2E2] w-full flex flex-col gap-8 md:gap-10">
      <div class="flex flex-col justify-center items-center gap-4 ">
        <h1 class="text-center font-bold text-2xl md:text-3xl ">هل لا يزال لديك سؤال؟</h1>
        <p class="text-center text-paragraphTwo font-normal text-sm md:text-lg">لا تتردد في التواصل معنا — فريقنا
          مستعد للإجابة ومساعدتك في أي وقت.</p>
      </div>
      <div class="flex  gap-4 md:gap-14 flex-wrap justify-center items-center">
        <ContactButton title="راسلنا على واتساب" background="#FFF422" border="#C6B900"
          link="https://wa.me/966502765770">
          <img src="~/assets/img/heroSection/whatsapp (5) 1.svg" alt="whatsapp" class="max-w-5 max-h-5" width="20px"
            height="20px" loading="lazy">
        </ContactButton>
        <ContactButton title="تواصل معنا هاتفيًا" background="#AF99FF" border="#6D4DD1" link="tel:+966502765770">
          <img src="~/assets/img/heroSection/phone-call (2) 1.svg" alt="phone-call" class="max-w-5 max-h-5" width="20px"
            height="20px" loading="lazy">
        </ContactButton>
      </div>
    </div>
  </section>
</template>



<script setup lang="ts">
import { ref } from 'vue';
import location from "../assets/img/faq/Icon1.svg"
import wifi from "../assets/img/faq/Icon2.svg"
import time from "../assets/img/faq/Icon3.svg"
import Chatpeople from "../assets/img/faq/Icon4.svg"
import cancel from "../assets/img/faq/Icon5.svg"
import coffie from "../assets/img/faq/Icon6.svg"
const questions = ref([
  {
    id: 1,
    title: 'هل تتوفر مواقف سيارات مجانية للعملاء؟',
    answer: 'بالتأكيد، يضم الموقع أكثر من 100 موقف مخصص',
    open: false,
    img: location,
    alt: "location"
  },
  {
    id: 2,
    title: 'هل الإنترنت في المساحة سريع ومستقر؟',
    answer: 'نوفّر إنترنت فائق السرعة عبر الألياف الضوئية، مع دعم فني مستمر.',
    open: false,
    img: wifi,
    alt: "wifi"

  },
  {
    id: 3,
    title: 'هل يمكنني استخدام مساحة العمل في وقت متأخر من اليوم؟',
    answer: 'نحن نرحّب بك خلال ساعات العمل الرسمية فقط، لضمان توفير أفضل خدمة وتجربة ممكنة.',
    open: false,
    img: time,
    alt: "time"
  },
  {
    id: 4,
    title: 'هل يمكن إجراء مكالمات أو اجتماعات عبر الإنترنت؟',
    answer: 'نعم، نوفر غرف خاصة ومناطق هادئة تضمن لك الخصوصية والتركيز.',
    open: false,
    img: Chatpeople,
    alt: "Chatpeople"
  },
  {
    id: 5,
    title: 'ماذا يحدث إذا لم تعجبني التجربة؟',
    answer: 'نقدّم ضمان رضا يشمل استرداد كامل للمبلغ خلال 7 أيام.',
    open: false,
    img: cancel,
    alt: "cancel"
  },
  {
    id: 6,
    title: 'هل القهوة والمشروبات ضمن الاشتراك؟',
    answer: 'نعم، جميع الباقات تتضمن ضيافة يومية تشمل القهوة، الشاي والمياه.',
    open: false,
    img: coffie,
    alt: "coffie"
  },
]);

function toggleQuestion(idx: number) {
  questions.value[idx].open = !questions.value[idx].open;
}

</script>

<style scoped></style>