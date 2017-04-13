<template>
    <div class="cartcontrol">
        <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click="decreaseCart" transition="move">
            <span class="inner"></span>
        </div>
        <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
        <div class="cart-add icon-add_circle" @click="addCart"></div>
    </div>
</template>

<script>

import Vue from 'vue';

export default {
    props : {
        food : {
            type : Object
        }
    },
    methods : {
        addCart(event){
            
            // 阻止点击两次
            if(!event._constructed){
                return;
            }
            // 第一次点击。 count 是否存在
            if(!this.food.count){
                Vue.set(this.food, 'count', 1);
            }else{
                this.food.count++;
            }
        },
        decreaseCart(event){
            
            // 阻止点击两次
            if(!event._constructed){
                return;
            }
            
            if(this.food.count){
                this.food.count--;
            }
        }
    },
    created() {
        
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .cartcontrol
        font-size:0
        .cart-decrease, .cart-add
            display:inline-block
            padding:6px
            line-height:24px
            font-size:24px
            color:rgb(0, 160, 220)
        .cart-decrease
            display:inline-block
        .cart-count
            display:inline-block
            width:12px
            font-size:10px
            line-height:24px
            vertical-align:top
            padding-top:6px;
            color:rgb(147, 153, 159)
        .cart-add
            display:inline-block
</style>