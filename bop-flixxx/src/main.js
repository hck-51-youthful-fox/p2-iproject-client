import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import vue3GoogleLogin from "vue3-google-login";

import App from "./App.vue";
import router from "./router";


const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
const app = createApp(App);

app.use(pinia);
app.use(router);
// app.use(vue3GoogleLogin, {
//   clientId:
//     "324258371367-tc0ie689pjs5eu97e7esj4o7m2hincqv.apps.googleusercontent.com",
// });
app.mount("#app");
