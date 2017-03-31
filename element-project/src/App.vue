<!--suppress ALL -->
<template>
  <div >
      <v-header :seller="seller"></v-header>
      <div class="tab">
          <div class="tab-item">
              <a v-link="{path:'/goods'}">商品</a>
          </div>
          <div class="tab-item">
              <a v-link="{path:'/ratings'}">评论</a>
          </div>
          <div class="tab-item">
              <a v-link="{path:'/sellers'}">商家</a>
          </div>
      </div>
      <div class="content">
          <router-view :seller="seller" keep-alive></router-view>
      </div>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'

const ERRNO = 0;

export default {
    components: {
      'v-header': Header
    },
    data(){
        return {
            seller: {}
        }
    },
    created(){
        //console.log(123);
        this.$http.get('/api/seller').then((response) => {
            if(response.body.errno == ERRNO ){
                this.seller = response.body.data;
            }
        }, (response) => {
            // error callback
        })
    }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.tab
    display:flex
    width:100%
    height: 40px
    line-height:40px
    .tab-item
        flex:1
        text-align center

        & > a
            display:block
            text-decoration:none
            font-size:14px
            color:rgb(77, 85, 93)
            &.active
                color:rgb(240, 20, 20)
        & > .v-link-active
            color:rgb(240, 20, 20)

</style>
