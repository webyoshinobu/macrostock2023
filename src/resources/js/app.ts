import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faInstagram);

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.component('fa', FontAwesomeIcon )
app.mount("#app")
