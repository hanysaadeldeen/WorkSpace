<template>

    <section
        class="HeroSection relative min-h-[calc(100dvh-76px)] lg:min-h-[calc(100dvh-112px)] flex justify-centere  items-center ">
        <div
            class=" absolute left-0 w-full h-[calc(100%+76px)] lg:h-[calc(100%+112px)] -top-[76px] lg:-top-[112px] z-10 bg-white opacity-80">
        </div>
        <div
            class="bgImg absolute left-0 w-full h-[calc(100%+76px)] lg:h-[calc(100%+112px)] -top-[76px] lg:-top-[112px] -z-40  ">
        </div>
        <div class="max-w-[1383px] mx-auto relative px-5 z-20">
            <div class="max-w-[904px] mx-auto ">
                <div class="flex flex-col justify-center items-center ">
                    <button class="shadow flex justify-center items-center gap-2 rounded-full py-3 px-6 mb-6 bg-white ">
                        <span class="rounded-full bg-primary w-[10px] h-[10px]" />
                        <span class="inline-block text-buttonText font-bold text-sm">
                            ابدأ عملك بثقة
                        </span>

                    </button>
                    <div class="TitleAndDescription">
                        <h1 class="text-center font-bold text-3xl md:text-4xl mb-4 ">كل شيء جاهز... لا ينقصه إلا أن
                            تبدأ.
                        </h1>
                        <p class="text-paragraphTwo font-normal text-sm md:text-base md:max-w-[664px] text-center">منذ
                            اللحظة
                            الأولى، تجد مكتبك
                            مُعدًّا،
                            والإنترنت
                            يعمل، والبيئة مهيّأة لمساعدتك على التركيز. نوفر لك كل ما تحتاج، لتبدأ عملك فورًا.</p>
                    </div>
                    <div class="Service mt-7 md:mt-14  flex justify-center items-center md:gap-x-20 gap-10  flex-wrap">
                        <div class="flex justify-center items-end gap-2">
                            <img src="~/assets/img/heroSection/pin 1.svg" alt="Location" class="max-w-5 max-h-5"
                                width="20px" height="20px" loading="lazy">
                            <p class="text-base font-normal text-paragraph">خدمات محيطة</p>
                        </div>
                        <div class="flex justify-center items-end gap-2">
                            <img src="~/assets/img/heroSection/parking-area 2.svg" alt="parking-area"
                                class="max-w-5 max-h-5" width="20px" height="20px" loading="lazy">
                            <p class="text-base font-normal text-paragraph">مواقف مجانية</p>
                        </div>
                        <div class="flex justify-center items-end gap-2">
                            <img src="~/assets/img/heroSection/fingerprint.svg" alt="fingerprint"
                                class="max-w-5 max-h-5" width="20px" height="20px" loading="lazy">
                            <p class="text-base font-normal text-paragraph"> دخول آمن</p>
                        </div>
                        <div class="flex justify-center items-end gap-2">
                            <img src="~/assets/img/heroSection/wifi.svg" alt="wifi" class="max-w-5 max-h-5" width="20px"
                                height="20px" loading="lazy">
                            <p class="text-base font-normal text-paragraph">إنترنت سريع</p>
                        </div>

                    </div>
                    <div class="flex mt-16 gap-4 md:gap-14 flex-wrap justify-center items-center">

                        <ContactButton title="راسلنا على واتساب" background="#FFF422" border="#C6B900"
                            link="https://wa.me/966502765770">
                            <img src="~/assets/img/heroSection/whatsapp (5) 1.svg" alt="whatsapp"
                                class="max-w-5 max-h-5" width="20px" height="20px" loading="lazy">
                        </ContactButton>
                        <ContactButton title="تواصل معنا هاتفيًا" background="#AF99FF" border="#6D4DD1"
                            link="tel:+966502765770">
                            <img src="~/assets/img/heroSection/phone-call (2) 1.svg" alt="phone-call"
                                class="max-w-5 max-h-5" width="20px" height="20px" loading="lazy">
                        </ContactButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>


</script>

<style scoped>
.bgImg {
    background-image: url(../assets/img/heroSection/workSpace.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>