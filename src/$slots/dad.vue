<template>
    <div class = 'dad'>
        <son>
            <div> </div>
        </son>
        <exhibition :num="num" :name="name"></exhibition>
    </div>
</template>
<script>
import son from './son'
import exhibition from './exhibition'

export default {
    data(){
        return{
            num:100,
            name:'zimo'
        }
    },
    components:{son,exhibition}
}
</script>
<style lang = 'less'>
    .dad{
        width:300px;
        height: 100px;
        margin:0 auto;
        border:solid 1px;
        div{
            text-align: center;
        }
    }
</style>