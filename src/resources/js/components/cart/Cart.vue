<template>
  <section class="cart">
    <h2 class="cart_title">Cart</h2>
    <div class="cart_wrap">
        <div class="cart_wrap_list">
            <div class="cart_wrap_list_title">0個の素材がカートに入っています。</div>
        </div>
        <aside class="cart_wrap_aside">
            <div class="cart_wrap_aside_amount">
                <p class="cart_wrap_aside_amount_title">合計金額：</p>
                <p class="cart_wrap_aside_amount_price"><span>￥</span>00000</p>
            </div>
        </aside>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ButtonOrange from "../common/ButtonOrange.vue";
export default defineComponent({
    name: 'Cart',
    components: {
        ButtonOrange,
    },

    setup() {
        // data

        // methods

        return {  }
    },

});
</script>

<style lang="scss" scoped>
.cart {
    width: 80%;
    padding: 170px 10% 0 10%;

    &_title {
        font-size: 70px;
        margin-bottom: 20px;
    }

    &_wrap{
        display: flex;
        justify-content: space-between;

        &_list {
            width: 60%;

            &_title {
                background-color: #000000;
                color: #ffffff;
                font-size: 18px;
                padding: 18.5px 0 18.5px 10px;
            }
        }

        &_aside {
            width: 35%;
            padding: 0 0 0 5%;

            &_amount{
                width: 100%;
                display: flex;
                justify-content: space-between;
                font-weight: bold;
                border-bottom: 2px solid #000000;

                &_title {
                    width: 30%;
                    font-size: 24px;
                    display: flex;
                    align-items: center;
                }

                &_price {
                    width: 70%;
                    font-size: 48px;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                }
            }
        }
    }

}

</style>
