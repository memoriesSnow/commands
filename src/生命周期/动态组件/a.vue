<template>
    <div class = 'a'>
        动态组件a
        {{ num }}
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:10
        }
    },
    methods:{
        addNum:function(){
            this.num++
        }
    },
    activated() {
        console.log("激活生命周期函数");
        this.timer = setInterval(this.addNum,500);
    },
    deactivated() {
        console.log("非激活生命周期函数");
        clearInterval(this.timer);
    }
}
</script>