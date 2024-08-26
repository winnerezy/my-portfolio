import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { MotionPlugin } from "@vueuse/motion";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiLinkedin,
  BiTwitter,
  BiInstagram,
  BiGithub,
  RiLinkM,
  SiJavascript,
  ViFileTypeTypescriptOfficial,
  ViFileTypeReactjs,
  ViFileTypeNext,
  ViFileTypeVue,
  CoPostgresql,
  ViFileTypeMongo,
  CoMysql,
  ViFileTypePrisma,
} from "oh-vue-icons/icons";

addIcons(
  BiLinkedin,
  BiTwitter,
  BiInstagram,
  BiGithub,
  RiLinkM,
  SiJavascript,
  ViFileTypeTypescriptOfficial,
  ViFileTypeReactjs,
  ViFileTypeNext,
  ViFileTypeVue,
  CoPostgresql,
  ViFileTypeMongo,
  CoMysql,
  ViFileTypePrisma
);

const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.use(MotionPlugin);

app.mount("#app");
