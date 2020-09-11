<template>
  <div id="app">
    <div id="nav">
      <h2 class = 'a'>Vue指令</h2><br/>
      <router-link to="/model">v-model</router-link><br/>
      <router-link to="/for">v-for</router-link><br/>
      <router-link to="/pre">v-pre</router-link><br/>
      <router-link to="/if">v-if</router-link><br/>
      <router-link to="/show">v-show</router-link><br/>
      <router-link to="/text,html">v-text/html</router-link><br/>
      <router-link to="/slots">v-slot</router-link><br/> 

      <h2 class = 'a'>router</h2><br/>
       <router-link to="/home">app-router</router-link><br/>
       <router-link to="/life">生命周期</router-link><br/>
       <router-link to="/origin">动态组件</router-link><br/>
       <router-link to="/home1">动态路由</router-link><br/>
       <router-link to="/$emit">$emit</router-link><br/>
       <router-link to="/$dad">$slots</router-link><br/>
       <router-link to="/filter">$filter</router-link><br/>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
*{
  margin:0;
  padding:0
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px 70px 30px 30px;
  width:100px;
  border:solid 1px;
  float:left;
  .a{
    margin-bottom:0px;
    color:#afc;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration:none;
    line-height:25px;
    margin-left:10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// .router{
//   padding: 0px 30px 30px 30px;
//   width:100px;
//   border:solid 1px;
//   float:right;
//   font-weight: bold;
//   color: #2c3e50;
//   text-decoration:none;
//   line-height:30px;
// }
</style>
