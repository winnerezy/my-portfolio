<script lang="ts">
import { defineComponent } from 'vue';
import Indicator from "./Indicator.vue";

export default defineComponent({
    name: "AboutMe",
    components: { Indicator }
})
</script>

<template>
    <Indicator title="About Me"/>
    <div
    class="w-full bg-primary shadow-sm h-full p-4 rounded-md flex flex-col gap-1.5 items-center justify-center relative"
    >
    <p class="text-sm tracking-wide font-light">Hello, I'm Eromoigbe Winner Agbonikpeya, a 17-year-old full-stack web developer with a strong passion for crafting innovative digital solutions. With expertise spanning frontend, backend, and UI/UX design, I excel in creating seamless and user-centric web experiences. My dedication to staying up-to-date with industry trends and best practices enables me to deliver high-quality projects that meet and exceed expectations</p>
    </div>
</template>