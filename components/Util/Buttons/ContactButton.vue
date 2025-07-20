<template>

    <a :href="link" target="_blank">
        <div class="shadowM flex justify-center items-center gap-4  rounded-full py-3 px-10"
            :class="background === '#FFF422' ? 'yellow' : 'blue'"
            :style="{ backgroundColor: background, border: '1px solid ' + border }">
            {{ title }}
            <slot />
        </div>
    </a>

</template>

<script setup lang="ts">

interface Props {
    title: string,
    background: string,
    border: string,
    link: string
}

defineProps<Props>()
</script>

<style scoped>
.yellow {
    box-shadow: 0 0 3px rgba(255, 244, 34, 1);
}

.blue {
    box-shadow: 0 0 3px rgba(175, 153, 255, 1);
}

.shadowM {
    transition: .2s ease-in-out;
    cursor: pointer;
}

.yellow:hover {
    box-shadow: 0 0 20px rgba(255, 244, 34, 0.6)
}

.blue:hover {
    box-shadow: 0 0 20px rgba(175, 153, 255, 0.6)
}
</style>