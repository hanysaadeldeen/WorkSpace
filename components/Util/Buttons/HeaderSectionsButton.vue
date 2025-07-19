<template>
    <button class="flex justify-center items-center gap-2 rounded-full py-3 px-10 gradient ">
        <span class="rounded-full bg-primary w-[10px] h-[10px]" />
        <span class="inline-block text-buttonText font-bold text-sm">
            {{ title }}
        </span>
    </button>
</template>

<script setup lang="ts">

interface Props {
    title?: string,
}

defineProps<Props>()
</script>

<style scoped></style>