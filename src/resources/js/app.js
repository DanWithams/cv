import './bootstrap';
import '../css/app.css';
import { createApp } from 'vue/dist/vue.esm-bundler';
import router from "./routing/router.js";
import { createPinia } from "pinia";
import App from "./vue/App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(router)
    .use(pinia)
    .mount('#app');
