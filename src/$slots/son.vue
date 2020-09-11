<template>
    <div class = 'son' v-if="this.$slots.default.length">
        如果父组件内有内容才显示这个子组件哦
        <slot>
        </slot>
    </div>
</template>
<style lang = 'less'>
    .son{
        width:300px;
        height: 100px;
        margin:0 auto;
        border:solid 1px;
        div{
            text-align: center;
        }
    }
</style>