<template>
    <div class = 'v-model'>
        <!-- This is v-model commander -->
        <input placeholder = 'input your text message' v-model ='message' @change="onchanges"/>
        <div id = 'box'>{{ message }}</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            message:''
        }
    },
    methods:{
        onchanges(){
            console.log(this.message)
        }
    }
}
</script>
<style lang = 'less'>
    .v-model{
        width:300px;
        height: 100px;
        background: #333;
        margin:0 auto;
        input{
            color:red;
        }
        #box{
            width: 100%;
            height:100%;
            color:white
        }
    }
</style>