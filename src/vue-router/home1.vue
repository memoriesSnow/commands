<template>
    <div class='home1'>
        <router-link :to="{path:`details/1`,query:{goodsId:1}}">商品1</router-link>
        <router-link :to="{path:`details/2`,query:{goodsId:2}}">商品2</router-link>

        <!-- <div @click="goods1">商品1</div>
        <div @click="goods2">商品2</div> -->
        <router-view/>
    </div>
</template>
<script>
export default {
    name:'home1',
    data(){
        return{
          params:this.$route.params
        }
    }
    // methods:{
    // goods1(){
    //   // http://localhost:8080/details/34?goodsId=1
    //   // http://localhost:8080/details/34
    //   this.$router.push({
    //     name:'details',
    //     params:{info:1},
    //     query:{goodsId:1}
    //   })
    // },
    // goods2(){
    //   this.$router.push({
    //     name:'details',
    //     params:{info:2},
    //     query:{goodsId:2}
    //   })
    // }
  //}
}
</script>
<style lang = 'less'>
    .home1{
        width:300px;
        height: 100px;
        margin:0 auto;
        border:solid 1px;
        div{
            text-align: center;
        }
    }
</style>