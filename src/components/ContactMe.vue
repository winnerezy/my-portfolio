<script lang="ts">
import { defineComponent } from "vue";
import Indicator from "./Indicator.vue";
import { OhVueIcon } from "oh-vue-icons";

export default defineComponent({
  name: "ContactMe",
  components: {
    Indicator,
    "v-icon": OhVueIcon,
  },
});
</script>

<template>
  <Indicator title="Contact Me" />

  <section
    class="flex flex-col justify-center gap-4 w-full p-2"
    id="contactme"
  >
    <div
      class="row-span-2 bg-primary w-full p-6 flex flex-col gap-4 shadow-sm text-center"
    >
      <span class="text-3xl">Get in touch with me</span>
      <a
        href="mailto:eromoigbeagbonikpeya@gmail.com"
        class="text-blue-500 text-lg tracking-wide"
        >Mail Me</a
      >
    </div>
    <div class="grid grid-rows-2 grid-cols-2 w-full gap-4 h-full">
      <a
        href="https://github.com/winnerezy"
        class="bg-primary flex items-center justify-center px-16 gap-6 max-md:py-2 border border-transparent hover:border-border rounded-xl duration-200 shadow-sm"
      >
        <v-icon name="bi-github" class="size-8" />
        <p class="font-semibold">Github</p>
      </a>
      <a
        href="https://www.linkedin.com/in/eromoigbe-agbonikpeya-12409b2a8/"
        class="bg-primary flex items-center justify-center px-16 gap-6 max-md:py-2 border border-transparent hover:border-border rounded-xl duration-200 shadow-sm"
      >
        <v-icon name="bi-linkedin" class="size-8" />
        <p class="font-semibold">LinkedIn</p>
      </a>
      <a
        href="https://x.com/winnerezy"
        class="bg-primary flex items-center justify-center px-16 gap-6 max-md:py-2 border border-transparent hover:border-border rounded-xl duration-200 shadow-sm"
      >
        <v-icon name="bi-twitter" class="size-8" />
        <p class="font-semibold">Twitter</p>
      </a>
      <a
        href="https://www.instagram.com/winnerezy"
        class="bg-primary flex items-center justify-center px-16 gap-6 max-md:py-2 border border-transparent hover:border-border rounded-xl duration-200 shadow-sm"
      >
        <v-icon name="bi-instagram" class="size-8" />
        <p class="font-semibold">Instagram</p>
      </a>
    </div>
  </section>
</template>
