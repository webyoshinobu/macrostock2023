import { createApp } from 'vue';
import 'normalize.css';
import router from './router';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import '../css/swiper.css'; //swiper専用スタイル

library.add(faInstagram);

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router, VueAwesomeSwiper);
app.component('fa', FontAwesomeIcon );
// app.use(VueAwesomeSwiper, /* { default options with global component } */);
app.mount("#app")
