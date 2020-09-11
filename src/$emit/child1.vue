<template>
    <div class='child1'>
        来自child的name：{{ name2 }}
    </div>
</template>
<script>
export default {
    data(){
        return{
            names:'zimo',
            arr:[1,2,3],
            name2:''
        }
    },
    beforeMount(){
        this.$bus.$on('sendBusData',(a)=>{
            console.log(a);
            this.name2 = a;
        })
    }
}

</script>
