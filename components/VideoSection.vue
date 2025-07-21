<template>
  <section>
    <SectionsTitle title="جولة مرئية داخل Work Space ديجتال اوردر"
      description="استعرض تفاصيل المكان في دقيقة واحدة، من لحظة الدخول وحتى بداية يوم العمل." withButton
      buttonTitle="شاهد التجربة بنفسك" />

    <div class="relative max-w-[904px] mx-auto">
      <div class="absolute top-0 left-0 w-full h-full bg-[#000000] bg-opacity-50 rounded-3xl"></div>
      <img src="~/assets/img/Util/video.png" alt="OurLocation"
        class="w-full h-full object-cover rounded-3xl cursor-pointer">
      <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer">
        <img src="~/assets/img/Util/Play.svg" alt="Play" class="object-contain">
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>