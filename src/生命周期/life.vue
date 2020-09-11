<template>
    <div class = 'life'>
        <div>{{ num }}</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            num:100
        }
    },
    methods:{
        addNum(){
            this.num++
        }
    },
    beforeMount(){
        console.log('挂载前');
    },
    mounted(){
        console.log('挂载后');
        this.timer = setInterval(this.addNum,500)
    },
    beforeCreate(){
        console.log('创建前');
    },
    created(){
        console.log('创建后');
    },
    beforeUpdate(){
        console.log('更新前');
    },
    updated(){
        console.log('更新后');
    },
    beforeDestroy(){
        console.log('销毁前');
    },
    destroyed(){
        console.log('销毁后');
    }
}
//先创建，在挂载内容，数据更新时触发更新，页面切换或关闭时触发销毁
</script>
<style lang = 'less'>
    .life{
        width:300px;
        height: 100px;
        margin:0 auto;
        border:solid 1px;
    }
</style>