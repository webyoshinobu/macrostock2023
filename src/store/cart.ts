import { defineStore } from 'pinia'

export const cartCounter = defineStore('cart', {
    //保持したいデータ
    state: () => ({
        items: [] as any[],
        // items: {
        //     product_img1: {
        //         index: 1,
        //         src: "/images/product_imgs/dummy_img_horizontal1.jpg",
        //         alt: "サンプル画像"
        //     },
        //     product_img2: {
        //         index: 2,
        //         src: "/images/product_imgs/dummy_img_vertical1.jpg",
        //         alt: "サンプル画像"
        //     },
        //     product_img3: {
        //         index: 3,
        //         src: "/images/product_imgs/dummy_img_horizontal2.jpg",
        //         alt: "サンプル画像"
        //     },
        //     product_img4: {
        //         index: 4,
        //         src: "/images/product_imgs/dummy_img_horizontal2.jpg",
        //         alt: "サンプル画像"
        //     },
        //     product_img5: {
        //         index: 5,
        //         src: "/images/product_imgs/dummy_img_vertical2.jpg",
        //         alt: "サンプル画像"
        //     },
        //     product_img6: {
        //         index: 6,
        //         src: "/images/product_imgs/dummy_img_horizontal3.jpg",
        //         alt: "サンプル画像"
        //     },
        // }
    }),
    getters: ({

    }),
    actions: {
        addCart(image:any) {
            this.items.push(image);
            // this.items = image;
            console.log('action this.items', this.items);
        },
    },
  })
