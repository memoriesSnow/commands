<template>
  <div class="newpage">
      <!-- <myslots></myslots> -->
      <!-- <myslots class='nameSlot'>
          <template v-slot:header>
                
          </template>
          <template v-slot:body>
                
          </template>
      </myslots> -->

    <!-- <myslots>
        <template v-slot:header>
            <div>发发发111</div>
        </template>
        <template v-slot:footer>
            <div>发发发222</div>
        </template>
        <div>我是大牛🐂1</div>
        <div>我是大牛🐂2</div>
    </myslots> -->
    <myslots>
        <div slot-scope='content'>
            <div v-for="(item,index) in content.arr" :key="index">{{ item }}</div>
        </div>
    </myslots>

    <myslots>
        <template slot-scope='content'>
            <span v-for="(item,index) in content.arr" :key="index">{{ item }}</span>
        </template>
    </myslots>
    </div>
</template>
<script>
import myslots from './myslot'
export default {
    data(){
        return{
            num:100,
            list:'list'
        }
    },
    components:{
        myslots
    },
}
</script>
<style lang="less">
    .newpage{
        width:500px;
        height: 300px;
        background: #333;
        margin:0 auto;
        color:white;
        myslot{
            text-align: center;
        }
    }
</style>

