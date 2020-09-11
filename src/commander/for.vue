<template>
    <div class = 'v-for'>
        <!-- This is v-for commander -->
        <ul class = 'list'>
            <li v-for="(item,index) in arr" v-bind:key="index">value:{{ item }} --- index:{{ index }}</li>
        </ul>
       <div v-for="(item,index) in obj" v-bind:key='index'>{{ item }}</div>

       <div class='note'>
            v-for:循环，用于循环DOM结构，用在template,数据的多少决定了循环的次数，循环自身及所有子元素
            循环的元素必须要添加key值，为了安全性、性能（不让已经循环过的元素再次循环，再次加载）
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            arr:[1,2,3,4,'a','b','c'],
            obj:[
                {
                    name:'tiger',
                    arrgessive:10
                },
                {
                    name:'lion',
                    arrgessive:12
                },
                {
                    name:'bull',
                    arrgessive:6
                },
                {
                    name:'dog',
                    arrgessive:5
                },
            ]
        }
    }
}
</script>
<style lang = 'less'>
    .v-for{
        width:500px;
        height: 300px;
        background: #333;
        margin:0 auto;
        .list{
            width: 50%;
            height:50%;
            background:yellow;
            list-style:none;
        }
        .note{
            margin-top:100px;
            line-height:20px;
            background:#333;
            color:white;
            height:100px;
        }
    }
</style>