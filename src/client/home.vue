<template>
    <div class='home'>
        This is home square!
            <div v-for ="(item1,index1) in routes" :key="index1">
                <router-link v-for ="(item2,index2) in item1.children" :to="{path:item2.path}" :key='index2'>
                    {{ item2.alias }}
                </router-link>
            </div>
        <router-view/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            routes:this.$router.options.routes
        }
    }
}
</script>
<style lang = 'less'>
    .home{
        width:300px;
        height: 100px;
        margin:0 auto;
        border:solid 1px;
    }
</style>