<template>
    <button class="shadowM flex justify-center items-center gap-4 border-1 rounded-full py-3 px-10"
        :style="{ backgroundColor: background, border: border }">
        {{ title }}
        <slot />
    </button>
</template>

<script setup lang="ts">

interface Props {
    title: string,
    background: string,
    border: string
}

defineProps<Props>()
</script>

<style scoped></style>