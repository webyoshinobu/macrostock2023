import { createRouter,createWebHistory } from 'vue-router';
import top from "./components/Top.vue";

const routes = [
    { path: '/', name: 'top', component: top },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
