<template>
  <section class="top">
    <p class="top_site_title wd_color_white">MacroStock</p>
    <p class="top_sub_site_title wd_color_white">マクロ写真専門ストックフォトサイト</p>
    <button class="top_what_macro_photo wd_color_white">マクロ写真とは？</button>
  </section>
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

.top {
    width: 100%;
    height: 100vh;
    background-image: url('../../../public/images/top_slide1.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-flow: column;
}

.top_site_title {
    font-size: 144px;
}

.top_sub_site_title {
    font-size: 48px;
}

.top_what_macro_photo {
    background-color: #F87D09;
    border-radius: 20px;
    border: none;
    outline: none;
    padding: 13px 50px;
    margin-top: 50px;
    font-size: 36px;
}

// 共通
.wd_color_white {
    color: #ffffff;
    font-weight: bold;
}
</style>
