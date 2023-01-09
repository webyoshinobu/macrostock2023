<template>
  <header class="header">

    <h1 class="header_logo">
        <a href="#">
            <img src="../../../public/images/logo_transparent.png" alt="macrostock">
        </a>
    </h1>

    <nav class="header_nav">
        <ul class="header_nav_menu">
            <li class="header_nav_menu_item wd_color_white">Gallery</li>
            <li class="header_nav_menu_item wd_color_white">Contact</li>
            <li class="header_nav_menu_item bg-white">Login</li>
            <li class="header_nav_menu_item bg-black">Register</li>
        </ul>
    </nav>

  </header>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue";
    export default defineComponent({
    components: {
    }
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

                &:nth-child(3){
                    margin-right: 61px;
                }
            }
        }
    }
}

//共通
.bg-white {
    background-color: #ffffff;
    color: #000000;
    font-weight: bold;
}

.bg-black {
    background-color: #000000;
    color: #ffffff;
    font-weight: bold;
}

.wd_color_white {
    color: #ffffff;
    font-weight: bold;
}

</style>
