import '@/app/styles/main.css'

import { createApp } from 'vue'
import App from '@/pages/App.vue'

import { router, i18n } from '@/app/provider'

const app = createApp(App)

app.use(i18n)

app.use(router)

app.mount('#app')
