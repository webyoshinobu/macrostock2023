import { createRouter,createWebHistory } from 'vue-router';
import top from "./components/Top.vue";
import contact from "./components/contact/Contact.vue";
import gallery from "./components/gallery/Gallery.vue";
import photo from "./components/gallery/Photo.vue";

const routes = [
    { path: '/', name: 'top', component: top },
    { path: '/gallery', name: 'gallery', component: gallery },
    { path: '/gallery/photo', name: 'photo', component: photo },
    { path: '/contact', name: 'contact', component: contact },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
