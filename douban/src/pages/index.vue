
<template>
    <div>
        <Topbar title="豆瓣app" :bg="true" :fixed="true">
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