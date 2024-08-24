<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import AboutMe from "./components/AboutMe.vue";
import Project from "./components/Project.vue";
import Indicator from "./components/Indicator.vue";
</script>

<template>
  <main
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 1.2 } }"
    :delay="200"
    :duration="1200"
    class="p-8 flex flex-col gap-8 mx-auto items-center max-w-7xl w-full min-h-screen"
  >
    <Navbar />
    <Hero />
    <AboutMe />
    <div class="flex flex-col gap-4 w-full">
      <Indicator title="Projects"/>
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Project title="Quikdek" description="A flash card application for students to learn easier"/>
      <Project />
      <Project />
      <Project />
      <Project />
    </section>
    </div>
  </main>
</template>
