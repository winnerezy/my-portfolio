<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>

<template>
  <nav
    class="sticky top-4 z-50 w-full h-14 bg-primary rounded-full p-2 flex items-center justify-center shadow-sm"
  >
    <ul
      class="text-sm sm:text-md md:text-xl dark:text-white flex items-center justify-between gap-6 sm:gap-8 md:gap-16"
    >
      <li><a href="#home">Home</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#teckstack">Tech Stack</a></li>
      <li><a href="#contactme">Contact</a></li>
    </ul>
  </nav>
</template>

<style></style>
