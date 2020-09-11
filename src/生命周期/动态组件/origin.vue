<template>
    <div class = 'origin'>
        <button @click="selection('A')">comA</button>
        <button @click="selection('B')">comB</button>
        <button @click="selection('C')">comC</button>
        <keep-alive :include="/comA|comC/">
            <component :is="selected"></component>
        </keep-alive>
    </div>
</template>
<script>
import comA from './a'
import comB from './b'
import comC from './c'

export default {
    data(){
        return{
            selected:comA
        }
    },
    methods:{
        selection:function(word){
            this.selected = "com"+ word
        }
    },
    components:{
        comA,comB,comC
    }
}
</script>
<style lang='less'>
    .origin{
        width:300px;
        height: 100px;
        margin:0 auto;
        border:solid 1px;
        div{
            text-align: center;
        }
    }
</style>