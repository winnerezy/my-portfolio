<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Navbar"
})

</script>

<template>
  <nav class="w-full h-14 bg-primary rounded-full p-2 flex items-center justify-center shadow-sm">
    <ul class="text-md md:text-xl dark:text-white flex items-center justify-between sm:gap-8 md:gap-16">
      <li>Home</li>
      <li>Projects</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
</template>

<style>
    
</style>
