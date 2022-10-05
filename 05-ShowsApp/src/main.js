import { createApp } from 'vue'
import App from './App.vue'
import naive from "naive-ui"

import './assets/main.css'

const app = createApp(App)

app.use(naive)

app.mount('#app')
