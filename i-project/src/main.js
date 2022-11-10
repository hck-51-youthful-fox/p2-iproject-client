import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import VueSocialSharing from "vue-social-sharing";
import EmojiPicker from "vue3-emoji-picker";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(EmojiPicker);
app.use(VueSocialSharing);
app.use(pinia);
app.use(router);

app.mount("#app");
