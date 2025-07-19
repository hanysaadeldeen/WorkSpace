<template>
    <div class="flex flex-col justify-center items-center gap-4 mb-10 lg:mb-14">
        <h1 class="text-center font-bold text-4xl mb-4">{{ title }}</h1>
        <p class="text-center text-paragraphTwo font-normal text-base">{{ description }}</p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string
    description: string
}
defineProps<Props>()

</script>

<style scoped></style>