<template>
    <div class = 'v-show'>
        <!-- This is v-show commander -->
        <div v-show ='true'>This is v-show = true div</div>
        <div v-show ="false"></div>

        <div class='note'>
            v-show的值也是布尔值(true,false)，与v-if不同的是，v-show是使得div的display属性为block或none，
            而v-if是一个判断语法
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
           
            
        }
    }
}
</script>
<style lang = 'less'>
    .v-show{
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