<template>
  <section id="gallary">
    <SectionsTitle title="لقطات من داخل المساحة"
      description="مشاهد من المكاتب، القاعات، والمرافق التي تشكّل بيئة عملنا اليومية." withButton
      buttonTitle="استكشف المكان عن قرب" />
    <div class="flex max-md:flex-col gap-7 lg:gap-14">
      <div class="h-[400px] lg:w-[780px] lg:h-[520px]  rounded-3xl group overflow-hidden ">
        <img src="~/assets/img/gallery/two.jpg" alt="Gallery" loading="lazy"
          class="object-cover  h-full w-full rounded-3xl group-hover:scale-110 transition-all duration-300 ease-in-out">
      </div>
      <div class="h-[400px] lg:w-[540px] lg:h-[520px] group overflow-hidden  rounded-3xl ">
        <img src="~/assets/img/gallery/one.png" loading="lazy" alt="Gallery"
          class=" object-cover h-full rounded-3xl  w-full group-hover:scale-110 transition-all duration-300 ease-in-out">
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-14 max-lg:mt-7  mt-14">
      <div class="overflow-hidden group rounded-3xl ">
        <img src="~/assets/img/gallery/three.png" loading="lazy" alt="Gallery"
          class=" object-cover  max-h-[400px] lg:max-h-[520px] rounded-3xl  w-full  group-hover:scale-110 transition-all duration-300 ease-in-out">
      </div>
      <div class="overflow-hidden group rounded-3xl ">

        <img src="~/assets/img/gallery/four.png" loading="lazy" alt="Gallery"
          class=" object-cover  max-h-[400px] lg:max-h-[520px] rounded-3xl  w-full  group-hover:scale-110 transition-all duration-300 ease-in-out">
      </div>
      <div class="overflow-hidden group rounded-3xl ">

        <img src="~/assets/img/gallery/five.png" loading="lazy" alt="Gallery"
          class=" object-cover  max-h-[400px] lg:max-h-[520px] rounded-3xl  w-full group-hover:scale-110 transition-all duration-300 ease-in-out ">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>v