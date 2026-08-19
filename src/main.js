import { createApp } from 'vue'
import App from './App.vue'
import { applyStoredSkin } from './composables/useSkin'
import router from './router'
import './style.css'

applyStoredSkin()

createApp(App).use(router).mount('#app')
