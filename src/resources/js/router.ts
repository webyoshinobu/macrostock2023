import { createRouter,createWebHistory } from 'vue-router';
import top from "./components/Top.vue";
import contact from "./components/contact/Contact.vue";

const routes = [
    { path: '/', name: 'top', component: top },
    { path: '/contact/contact', name: 'contact', component: contact },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
