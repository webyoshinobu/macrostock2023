<template>
  <footer class="footer">
    <fa :icon="{ prefix: 'fab', iconName: 'instagram' }" style="color:white;" class="sns_logo fa-5x" />
    <p class="footer_admin wd_color_white">Administrator Login</p>
  </footer>
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

.footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 999;
    display: flex;
    justify-content: space-between;
}

.sns_logo {
    margin: 0 0 20px 27px;
}

.footer_admin {
    display: flex;
    align-items: center;
    margin: 0 27px 20px 0;
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
