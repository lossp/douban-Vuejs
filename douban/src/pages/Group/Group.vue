<template>
    <div>
        <Topbar title="豆瓣app" :bg="true" :fixed="true">
            <a href="javascript:;" slot="left">&lt 返回</a>
            <a href="javascript:;" slot="right">分享</a>
        </Topbar>
    </div>
</template>

<script>
    import Topbar from '../../components/Header'
    export default{
        name:'music',
        components:{
            Topbar
        },
 
    }
</script>

