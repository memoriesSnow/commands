<template>
    <div class = 'v-if'>
        <!-- This is v-if commander -->
       <div v-if='flag'>v-if's div</div>
       <div v-else-if='info'>v-if-else's div  {{ info }}</div>
       <div v-else>v-else's div</div>

       <div class= 'note'>note:v-if,v-else-if,v-else与js中的if-else判断条件相似，返回的布尔值为true则显示,顺序不能错</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            flag:false,
            info:'infomation'
        }
    }
}
</script>
<style lang = 'less'>
    .v-if{
        width:500px;
        height: 300px;
        background: #333;
        margin:0 auto;
        color:white;
        .note{
            margin-top:100px;
            line-height:20px;
        }
    }
</style>