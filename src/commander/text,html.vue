<template>
    <div class = 'v-text'>
        <!-- This is v-show commander -->
        <div class= 'text' v-text ='text'></div>
        <div class= 'text' v-text ='html'></div>

        <div class= 'html' v-html ="text"></div>
        <div class= 'html' v-html ="html"></div>
        <div class='note'>
          <p>v-text:用于给元素绑定文本值</p>
          <p>v-html:用于给元素绑定文本值或者子元素及文本值</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            text:'This is text content',
            html:'<p>This is p1</p><p>This is p2</p>'
        }
    }
}
</script>
<style lang = 'less'>
    .v-text{
        width:500px;
        height: 300px;
        background: #333;
        margin:0 auto;
        color:white;
        .text{
            background:red;
        }
        .html{
            background:blue;
        }
        .note{
            margin-top:100px;
            line-height:20px;
        }
    }
</style>