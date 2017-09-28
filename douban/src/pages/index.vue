
<template>
    <div id='first'>
        <Topbar title="豆瓣app" :bg="true" :fixed="true">
        </Topbar>
        <div class="page-content">
            <Swiper>
                    <div class="swiper-slide" slot="swiper-con">Slide 1</div>
                    <div class="swiper-slide" slot="swiper-con">Slide 2</div>
                    <div class="swiper-slide" slot="swiper-con">Slide 3</div>
            </Swiper>
        </div>
    </div>
</template>



<script>
    import FooterContainer from '../components/Footer-container'
    import FooterItem from '../components/Footer-item'
    import Topbar from '../components/Header'
    import Swiper from '../components/Swiper'
    export default{
        name:'index',
        components:{
            FooterContainer,
            FooterItem,
            Topbar,
            Swiper
        }
    }
</script>



<style lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    .page-content{
        margin-top: 48px;
    }

</style>