import VueSweetalert2 from 'vue-sweetalert2';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/bootstrap.min.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import '../node_modules/nprogress/nprogress.css'

createApp(App).use(store).use(router).use(VueSweetalert2).mount('#app')
