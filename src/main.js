import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import BaseCard from './components/UI/BaseCard.vue'
const app = createApp(App)
app.use(store)
app.component('base-card', BaseCard)

app.mount('#app')
