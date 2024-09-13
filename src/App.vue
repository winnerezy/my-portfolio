<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import AboutMe from "./components/AboutMe.vue";
import Project from "./components/Project.vue";
import Indicator from "./components/Indicator.vue";
import TechStack from "./components/TechStack.vue";
import ContactMe from "./components/ContactMe.vue";
</script>

<template>
  <main
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 1.2 } }"
    :delay="200"
    :duration="1200"
    class="px-8 flex flex-col gap-8 mx-auto items-center max-w-6xl w-full min-h-screen mb-16"
  >
    <Navbar />
    <Hero />
    <AboutMe />
    <div class="flex flex-col gap-4 w-full">
      <Indicator title="Projects" />
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Project
          title="Aora"
          description="An AI PDF chat application where users can work with PDF's with the assistance of AI."
          github-url="https://github.com/winnerezy/aora"
          live-url="https://aora-ai.vercel.app/"
        />
        <Project
          title="Quikdek"
          description="A user-friendly flashcard website for making and studying flash card decks."
          github-url="https://github.com/winnerezy/quikdek"
          live-url="https://quikdek.vercel.app/"
        />
        <Project
          title="Brainstorm"
          description="A platform where users can create and join topics, share and discuss about topic content."
          github-url="https://github.com/winnerezy/brainstorm"
          live-url="#"
        />
      </section>
    </div>
    <TechStack />
    <ContactMe />
  </main>
</template>
