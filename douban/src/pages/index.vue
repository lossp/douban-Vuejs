
<template>
    <div>
        <Topbar title="豆瓣app" :bg="true" :fixed="true">
            <a href="javascript:;" slot="left">&lt 返回</a>
            <a href="javascript:;" slot="right">分享</a>
        </Topbar>
    </div>
</template>



<script>
    import FooterContainer from '../components/Footer-container'
    import FooterItem from '../components/Footer-item'
    import Topbar from '../components/Header'

    export default{
        name:'index',
        components:{
            FooterContainer,
            FooterItem,
            Topbar
        }
    }
</script>



<style lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
</style>