<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Indicator",
    props: {
        title: String
    }
})

</script>

<template>
    <p class="flex self-start px-4 rounded-full dark:text-white text-sm font-semibold border-2 border-border">
        {{ title }}
    </p>
</template>