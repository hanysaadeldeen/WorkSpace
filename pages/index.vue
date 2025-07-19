<template>
  <main>
    <div :dir="locale === 'ar' ? 'rtl' : 'ltr'">
      <HeroSection />
      <div class="max-w-[1384px] mx-auto max-2xl:px-5">
        <AboutUsSection />
        <GallerySection />
      </div>
    </div>
    <ClientsSection />
    <div class="max-w-[1384px] mx-auto max-2xl:px-5" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
      <AudienceSections />
      <ServicesSection />
      <FeaturesSection />
      <CompetitorsUsSection />
    </div>
  </main>
</template>
<script setup>
const { locale } = useI18n();
</script>
