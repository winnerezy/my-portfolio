import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { MotionPlugin } from '@vueuse/motion'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiGithub } from "oh-vue-icons/icons";

addIcons(BiGithub);


const app = createApp(App)

app.component("v-icon", OhVueIcon)

app.use(MotionPlugin)

app.mount('#app')
