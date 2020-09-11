<template functional>
    <div class = 'exhibition'>
        函数式组件：展示用
        <div>父组件prop来的num：{{ props.num }}</div>
        <div>父组件prop来的name：{{ props.name }}</div>
    </div>
</template>
<style lang = 'less'>
    .exhibition{
        width:300px;
        height: 100px;
        margin:0 auto;
        border:solid 1px;
        background:#333;
        color:white;
        div{
            text-align: center;
        }
    }
</style>