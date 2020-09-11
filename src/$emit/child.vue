<template>
    <div class='child'>
        <!-- 子组件内的数据：{{ names }}--{{ arr }}--{{ obj }} -->
        <button @click="postData">动态获取一波子数据</button>
        <router-link to="/child1">去child1</router-link>
        <router-view/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            names:'zimo',
            arr:[1,2,3],
            name2:'memories',
            obj:{
                name:'zimodd',
                age:'66'
            }
        }
    },
    methods:{
        postData(){
            this.$emit('sendData',this.arr,this.names)
        }
    },
    destroyed(){
        this.$bus.$emit('sendBusData',this.name2)
    }
}

</script>
