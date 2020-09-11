<template>
    <div class='myslot'>
        <!-- 匿名插槽 -->
        <!-- <slot>这里是匿名插槽的默认数据<br/></slot> -->

        <!-- 具名插槽 -->
        <!-- <slot name='header'>默认数据111</slot>
        <slot name="footer">默认数据222</slot> -->

        <!-- 作用域插槽 -->
        <!-- <slot v-bind:obj='obj'></slot> -->
         <slot v-bind:arr='arr'></slot>
    </div>
</template>
<script>
export default {
    data(){
        return{
            obj:{
                name:'zimo',
                age:20
            },
            arr:[1,2,3,4,5]
        }
    }
}
</script>
<style>
   
</style>