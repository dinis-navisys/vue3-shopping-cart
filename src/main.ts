import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store/store'

createApp(App).use(store).use(router).mount('#app')
