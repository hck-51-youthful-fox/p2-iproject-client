import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import vue3GoogleLogin from "vue3-google-login";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.$router = markRaw(router);
});

app.use(router);
app.use(pinia);

app.use(vue3GoogleLogin, {
  clientId:
    "491868229988-efgdboh24mingjaec2nj6e7vrm37n2ji.apps.googleusercontent.com",
});
app.mount("#app");
