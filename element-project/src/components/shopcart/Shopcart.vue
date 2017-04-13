<template>
    <div class="shopcart">
        <div class="content">
            <div class="content-left">
                <div class="logo-wrapper">
                    <div class="logo">
                        <span class="icon-shopping_cart"></span>
                    </div>
                </div>
                <div class="price">

                </div>
                <div class="desc"></div>
            </div>
            <div class="content-right"></div>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {

            }
        },
        components : {

        }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">
.shopcart
    position:fixed
    left:0
    bottom:0
    z-index:50
    width:100%
    height:48px
    .content
        display:flex
        background:#131d27
        font-size:0
        .content-left
            flex:1
            .logo-wrapper
                display:inline-block
                position:relative
                top:-10px
                width:56px
                height:56px
                box-sizing:border-box
                margin: 0 12px
                padding:6px
            .price
                display:inline-block
            .desc
                display:inline-block
        .content-right
            flex:0 0 105px


</style>
