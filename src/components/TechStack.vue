<script lang="ts">
import { defineComponent } from "vue";
import { OhVueIcon } from "oh-vue-icons";
import Indicator from "./Indicator.vue";

export default defineComponent({
  name: "TechStack",
  components: {
    "v-icon": OhVueIcon,
    "Indicator": Indicator
  }
});
</script>

<template>
  <Indicator title="Tech Stack" />
  
  <section class="w-full bg-primary shadow-sm h-full p-4 rounded-md flex gap-1.5 items-center justify-between relative" id="teckstack">
    <v-icon class="size-8 sm:size-10 lg:size-16" name="si-javascript" fill="yellow"/>
    <v-icon class="size-8 sm:size-10 lg:size-16" name="vi-file-type-typescript-official" />
    <v-icon class="size-8 sm:size-10 lg:size-16" name="vi-file-type-reactjs" />
    <v-icon class="size-8 sm:size-10 lg:size-16" name="vi-file-type-next" fill="white" />
    <v-icon class="size-8 sm:size-10 lg:size-16" name="vi-file-type-vue" />
    <v-icon class="size-8 sm:size-10 lg:size-16" name="co-postgresql" fill="lightblue" />
    <v-icon class="size-8 sm:size-10 lg:size-16" name="vi-file-type-mongo" />
    <v-icon class="size-8 sm:size-10 lg:size-16" name="co-mysql" />
    <v-icon class="size-8 sm:size-10 lg:size-16" name="vi-file-type-prisma" fill="black" />
  </section>
</template>
