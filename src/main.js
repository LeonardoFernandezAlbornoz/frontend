import './assets/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@fontsource/lato';
import '../node_modules/hamburgers/dist/hamburgers.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import Navbar from './components/navegacion/Navbar.vue';
import SideBar from './components/navegacion/SideBar.vue';
import FooterVue from './components/navegacion/FooterVue.vue';
import 'notivue/notification.css';
import 'notivue/animations.css';
import { createNotivue } from 'notivue';

const notivue = createNotivue(/* Options */);

library.add(fas, far, fab);

const app = createApp(App);

app.component('Navbar', Navbar);
app.use(notivue);
app.component('SideBar', SideBar);
app.component('FooterVue', FooterVue);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount('#app');
