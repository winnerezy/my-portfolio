<script lang="ts">
import { OhVueIcon } from "oh-vue-icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Project",
  components: {
    "v-icon": OhVueIcon,
  },
  props: {
    title: String,
    description: String,
    githubUrl: String,
    liveUrl: String,
  },
});
</script>

<template>
  <article
    class="relative flex flex-col gap-2 pt-8 px-2 pb-4 items-center rounded-md shadow-sm bg-primary hover:bg-hover cursor-pointer"
    id="projects"
  >
    <div class="flex items-center gap-3 px-2">
      <!-- <img alt="photo" /> -->
      <section>
        <h5 class="text-xl font-bold">{{ title }}</h5>
        <span class="text-sm">{{ description }}</span>
      </section>
    </div>
    <v-icon name="BiGithub" class="text-white" />
    <div class="self-end justify-self-end gap-4">
      <div
        class="border border-border rounded-lg p-1 grid grid-cols-2 divide-x-2 gap-x-2"
      >
        <a class="flex items-center gap-2" :href="githubUrl">
          <v-icon name="bi-github" class="size-8" />
          <p class="text-md">Github</p>
        </a>
        <a class="flex items-center gap-2" :href="liveUrl">
          <v-icon name="ri-link-m" />
          <p class="text-md">Live Url</p>
        </a>
      </div>
    </div>
  </article>
</template>
