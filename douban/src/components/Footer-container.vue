<template>
    <div id="footer">
        <slot></slot>
    </div>
</template>
<script>
    import FooterItem from './Footer-item'
    export default{
        props:['value']
    }
</script>
<style lang="scss">
    #footer{
        display: flex;
        flex-direction: row;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        overflow: hidden;
        height: 50px;
        background: #fff;
        border-top: 1px solid #e4e4e4; 
    }   
</style>