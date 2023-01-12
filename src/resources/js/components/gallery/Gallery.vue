<template>
  <section class="gallery">
    <h2 class="gallery_title">Gallery</h2>
    <ul class="gallery_list">
        <li v-for="image in images" :key="image.index" class="gallery_list_item">
            <router-link to="/gallery/photo">
                <img :src="image.src" :alt="image.alt">
            </router-link>
        </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    name: 'Gallery',
    components: {
    },

    data() {
        return {
            images: [
                { index: 1,
                src: "/images/product_imgs/dummy_img_horizontal1.jpg",
                alt: "サンプル画像"
                },
                { index: 2,
                src: "/images/product_imgs/dummy_img_vertical1.jpg",
                alt: "サンプル画像"
                },
                { index: 3,
                src: "/images/product_imgs/dummy_img_horizontal2.jpg",
                alt: "サンプル画像"
                },
                { index: 1,
                src: "/images/product_imgs/dummy_img_horizontal2.jpg",
                alt: "サンプル画像"
                },
                { index: 2,
                src: "/images/product_imgs/dummy_img_vertical2.jpg",
                alt: "サンプル画像"
                },
                { index: 3,
                src: "/images/product_imgs/dummy_img_horizontal3.jpg",
                alt: "サンプル画像"
                },
            ]
        };
    },
});
</script>

<style lang="scss" scoped>
.gallery {
    width: 80%;
    padding: 170px 10% 0 10%;

    &_title {
        font-size: 70px;
        margin-bottom: 20px;
    }

    &_list {
        columns: 3;/*段組みの数*/
        list-style-type: none;

        &_item{
            margin-bottom: 20px;/*各画像下に余白をつける*/

            img {
                width:100%;
                height:auto;
                vertical-align: bottom;/*画像の下にできる余白を削除*/
            }
        }
    }
}

</style>
