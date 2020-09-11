<template>
    <div class='parent'>
        parent:{{ arr }}---{{ name }}
        <child @sendData="getData"></child>
    </div>
</template>
<script>
import child from "./child"
export default {
    name:'parent',
    data(){
        return{
            name:'',
            arr:''
        }
    },
    components:{child},
    methods:{
        getData(a,b){
            this.arr = a;
            this.name = b;
        }
    }
}
</script>
<style lang ='less' scoped>
    .parent{
        width:300px;
        height: 100px;
        margin:0 auto;
        border:solid 1px;
    }
</style>