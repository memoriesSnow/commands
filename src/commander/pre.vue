<template>
    <div class = 'v-pre'>
        <!-- This is v-pre commander -->
        <div class='pre' v-pre>父容器有v-pre命令
            <div id='box'>{{ message }}</div>
            <div>{{ 5+5 }}</div>
        </div>
        <div class='nopre'>父容器没有v-pre命令
            <div id='box'>{{ message }}</div>
            <div>{{ 5+5 }}</div>
        </div>
        <div class='note'>
            note:v-pre打破了Mustache语法，不编译解析花括号
        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            message:'v-pre message'
        }
    }
}
</script>
<style lang = 'less'>
    .v-pre{
        width:500px;
        height: 100px;
        background: #333;
        margin:0 auto;
        .pre{
            width: 100%;
            height:100%;
            background:blue
        }
        .nopre{
            width: 100%;
            height:100%;
            background:red
        }
        .note{
            line-height:20px;
            height:50px;
            background:#333;
            color:white;
        }
    }
</style>
