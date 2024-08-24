<script lang="ts">
import { OhVueIcon } from 'oh-vue-icons';
import { defineComponent } from 'vue';


export default defineComponent({
    name: "Project",
    components: { 
        "v-icon": OhVueIcon
     },
     props: {
        title: String,
        description: String,
        githubUrl: String,
        liveUrl: String
     }
})
</script>

<template>
    <article class="relative flex flex-col gap-2 pt-8 px-2 items-center rounded-md shadow-sm bg-primary w-full max-w-[400px] aspect-square hover:bg-zinc-950 cursor-pointer">
        <div class="flex items-center gap-3">
            <img alt="photo"/>
            <section>
                <h5 class="text-xl font-bold">{{ title }}</h5>
                <span class="text-sm text-zinc-300">{{ description }}</span>
            </section>
        </div>
        <v-icon name="BiGithub" class="text-white"/>
        <div class="absolute bottom-4 right-4 flex gap-4">
            <a class="text-md ">Github</a>
            <a class="text-md ">Live Url</a>
        </div>
    </article>
</template>