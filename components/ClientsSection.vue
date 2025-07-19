<template>
    <section class="bg-background py-16 px-5" id="Clients">
        <SectionTItleTwo title="شركات نعتز بثقتها"
            description="نفخر بثقة هذه الشركات التي اختارت مساحاتنا لتبدأ وتنجز في بيئة احترافية وملهمة." />
        <Vue3Marquee duration=100 :direction="locale === 'en' ? 'reverse' : ''" :pause-on-hover="true">
            <img v-for="item in Clients.slice(0, 18)" :src="item.logo" :key="item.id" class="max-w-[100px]" />
        </Vue3Marquee>
        <Vue3Marquee duration=100 :direction="locale === 'ar' ? 'reverse' : ''" :pause-on-hover="true">
            <img v-for="item in Clients.slice(18)" :src="item.logo" :key="item.id" class="max-w-[100px]" />
        </Vue3Marquee>
    </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
import Clients1 from "../assets/img/Clinets/Clients 1.svg"
import Clients2 from "../assets/img/Clinets/Clients 2.svg"
import Clients3 from "../assets/img/Clinets/Clients 3.svg"
import Clients4 from "../assets/img/Clinets/Clients 4.svg"
import Clients5 from "../assets/img/Clinets/Clients 5.svg"
import Clients6 from "../assets/img/Clinets/Clients 6.svg"
import Clients7 from "../assets/img/Clinets/Clients 7.svg"
import Clients8 from "../assets/img/Clinets/Clients 8.svg"
import Clients9 from "../assets/img/Clinets/Clients 9.svg"
import Clients10 from "../assets/img/Clinets/Clients 10.svg"
import Clients11 from "../assets/img/Clinets/Clients 11.svg"
import Clients12 from "../assets/img/Clinets/Clients 12.svg"
import Clients13 from "../assets/img/Clinets/Clients 13.svg"
import Clients14 from "../assets/img/Clinets/Clients 14.svg"
import Clients15 from "../assets/img/Clinets/Clients 15.svg"
import Clients16 from "../assets/img/Clinets/Clients 16.svg"
import Clients17 from "../assets/img/Clinets/Clients 17.svg"
import Clients18 from "../assets/img/Clinets/Clients 18.svg"
import Clients19 from "../assets/img/Clinets/Clients 19.svg"
import Clients20 from "../assets/img/Clinets/Clients 20.svg"
import Clients21 from "../assets/img/Clinets/Clients 21.svg"
import Clients22 from "../assets/img/Clinets/Clients 22.svg"
import Clients23 from "../assets/img/Clinets/Clients 23.svg"
import Clients24 from "../assets/img/Clinets/Clients 24.svg"
import Clients25 from "../assets/img/Clinets/Clients 25.svg"
import Clients26 from "../assets/img/Clinets/Clients 26.svg"
import Clients27 from "../assets/img/Clinets/Clients 27.svg"
import Clients28 from "../assets/img/Clinets/Clients 28.svg"
import Clients29 from "../assets/img/Clinets/Clients 29.svg"
import Clients30 from "../assets/img/Clinets/Clients 30.svg"
import Clients31 from "../assets/img/Clinets/Clients 31.svg"
import Clients32 from "../assets/img/Clinets/Clients 32.svg"
import Clients33 from "../assets/img/Clinets/Clients 33.svg"
import Clients34 from "../assets/img/Clinets/Clients 34.svg"
import Clients35 from "../assets/img/Clinets/Clients 35.svg"
import Clients36 from "../assets/img/Clinets/Clients 36.svg"
const Clients = [
    { id: 1, logo: Clients1 },
    { id: 2, logo: Clients2 },
    { id: 3, logo: Clients3 },
    { id: 4, logo: Clients4 },
    { id: 5, logo: Clients5 },
    { id: 6, logo: Clients6 },
    { id: 7, logo: Clients7 },
    { id: 8, logo: Clients8 },
    { id: 9, logo: Clients9 },
    { id: 10, logo: Clients10 },
    { id: 11, logo: Clients11 },
    { id: 12, logo: Clients12 },
    { id: 13, logo: Clients13 },
    { id: 14, logo: Clients14 },
    { id: 15, logo: Clients15 },
    { id: 16, logo: Clients16 },
    { id: 17, logo: Clients17 },
    { id: 18, logo: Clients18 },
    { id: 19, logo: Clients19 },
    { id: 20, logo: Clients20 },
    { id: 21, logo: Clients21 },
    { id: 22, logo: Clients22 },
    { id: 23, logo: Clients23 },
    { id: 24, logo: Clients24 },
    { id: 25, logo: Clients25 },
    { id: 26, logo: Clients26 },
    { id: 27, logo: Clients27 },
    { id: 28, logo: Clients28 },
    { id: 29, logo: Clients29 },
    { id: 30, logo: Clients30 },
    { id: 31, logo: Clients31 },
    { id: 32, logo: Clients32 },
    { id: 33, logo: Clients33 },
    { id: 34, logo: Clients34 },
    { id: 35, logo: Clients35 },
    { id: 36, logo: Clients36 }
];

</script>

<style scoped></style>