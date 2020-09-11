<template>
    <div class='filter'>
      <div>{{ name | zimogod | zimodd }}</div>
      <div>{{ name1 | memoriesSnow }}</div>
      <div v-paint ='color'>时间：{{ time | timer }}</div>
      <div v-size ='size' v-myshow ="true"> 就这？ </div>
    </div>
</template>
<script>
export default {
  name:'filter',
  data(){
    return{
      name:'zimo',
      name1:'memories',
      time:new Date(),
      color:'red',
      size:150
    }
  },
  filters:{
    zimogod(v){
      return v + 'god'
    },
    zimodd(v){
      return v + 'dd'
    },
    memoriesSnow(v){
      return v + "Snow"
    },
    timer(v){
      let year = v.getFullYear();
      let month = v.getMonth()+1
      let date = v.getDate()
      return `${year}${'-'}${month}${'-'}${date}`
    },
  },
  directives:{
    paint(el,binding){
      el.style.backgroundColor = binding.value
    },
    size(el,binding){
      el.style.height = binding.value+'px'
      el.style.width = binding.value+'px'
      el.style.backgroundColor = 'green'
    },
    myshow(el,binding){
      if(binding.value){
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  }
}
</script>
<style lang = 'less'>
  .filter{
    width:600px;
    height: 400px;
    background: #666;
    margin:0 auto;
    text-align:center;
    color:white;
  }
</style>