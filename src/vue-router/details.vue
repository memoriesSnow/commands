<template>
    <div class='details'>
        <div v-if='param==1'>商品1 --的params为：{{ param }}--的query为：{{ quer }}</div>
        <div v-else> 商品2 --的params为：{{ param }}--的query为：{{ quer }} </div>
    </div>
</template>
<script>
import { detailsApi } from '../server/api'
    export default {
        name:'detailsa',
        data(){
            return{
                param:this.$route.params.info,
                quer:this.$route.query.goodsId
            }
        },
        mounted(){
            // this.$http.get(`http://localhost:3001/page?page=${this.quer}`).then(res=>{
            //     console.log(res.data.glist)
            // })
            // this.$http.get('http://api.cms.liulongbin.top/api/getnewslist').then(res=>{
            //     console.log(res.data.message)
            // })
            detailsApi.getnewsList().then(res =>{
                console.log(res,'000')
            })
        }
    }
</script>
<style lang = 'less'>

</style>