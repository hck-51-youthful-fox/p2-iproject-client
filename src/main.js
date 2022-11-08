import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
const pinia = createPinia()

import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp(App)

app.use(pinia)
pinia.use(({ store }) => {
	store.route = markRaw(router)
})

app.use(router)

app.mount('#app')
