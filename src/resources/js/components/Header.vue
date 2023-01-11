<template>
  <header class="header">

    <h1 class="header_logo">
        <a href="#">
            <img src="../../../public/images/logo_transparent.png" alt="macrostock">
        </a>
    </h1>

    <nav class="header_nav">
        <ul class="header_nav_menu">
            <router-link to="/gallery" class="header_nav_menu_item wd_color_white" :class="{change_header: isChange}">Gallery</router-link>
            <router-link to="/contact" class="header_nav_menu_item wd_color_white" :class="{change_header: isChange}">Contact</router-link>
            <li class="header_nav_menu_item button-white">Login</li>
            <li class="header_nav_menu_item button-black">Register</li>
        </ul>
    </nav>

  </header>
</template>

<script lang="ts">
    import { defineComponent, ref, onMounted } from "vue";
    import { useRoute, useRouter } from 'vue-router';
    import router from '../router'
    export default defineComponent({
        name: 'Header',
        components: {

        },

        setup() {
            // data
            const router = useRouter();
            const route = useRoute();
            // let isChange = false;
            let isChange = ref(false);

            // methods
            const addClass = () => {
                console.log('addClass()');
                // const test = getCurrentPath();
                // console.log('test', test);
                router.afterEach((to) => {
                    const current_path = to.path;
                    console.log('現在のページ', current_path);
                    if (current_path != '/') {
                        console.log('トップじゃない');
                        isChange.value = true;
                    }else{
                        console.log('トップ');
                        isChange.value = false;
                    }
                });
            };

            // computed

            // lifecycle hooks
            onMounted(() => {
                addClass();
            });

            return { router, addClass, isChange };
        },
    });
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}
.header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 999;

    &_logo {
        width: 170px;
        margin-left: 27px;

        a {
            width: 100%;
            height: 100%;

            img {
                width: 100%;
            }
        }
    }


    &_nav{
        height: 170px;
        margin-right: 27px;
        display: flex;
        align-items: center;
        font-size: 24px;

        &_menu {
            display: flex;
            justify-content: space-between;
            list-style-type: none;

            &_item {
                padding: 22px 68px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 20px;
                text-decoration: none;

                &:nth-child(3){
                    margin-right: 61px;
                }
            }
        }
    }
}

//共通
.button-white {
    background-color: #ffffff;
    color: #000000;
    font-weight: bold;
    border: 1px solid #000000;
}

.button-black {
    background-color: #000000;
    color: #ffffff;
    font-weight: bold;
}

.wd_color_white {
    color: #ffffff;
    font-weight: bold;
}

.change_header {
    color: #000000;
}

</style>
