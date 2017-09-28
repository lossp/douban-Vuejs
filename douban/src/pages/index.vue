
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
        <Cell title="提醒" icon>
                <a href="javascript:;" slot="cell-right"><img src="../assets/images/ic_arrow_gray_small.png" alt="提醒"></a>
        </Cell>
        <Cell title="设置">
                <a href="javascript:;" slot="cell-right"><img src="../assets/images/ic_arrow_gray_small.png" alt="提醒"></a>
        </Cell>

        <CellMedia author="作者:大象公会" column="来自栏目:广播精选" img="https://qnmob2.doubanio.com/img/files/file-1489047494.jpg">
            <span slot="title">个人意见：为什么中国没有鲍勃·迪伦这样的民谣歌手</span>
            <span slot="describe">我们这一代人的成长年代，真正的诗歌课从来都是缺席的。</span>
        </CellMedia>
    </div>
</template>



<script>
    import FooterContainer from '../components/Footer-container'
    import FooterItem from '../components/Footer-item'
    import Topbar from '../components/Header'
    import Swiper from '../components/Swiper'
    import Cell from '../components/Cell'
    import CellMedia from '../components/Cell-media'
    export default{
        name:'index',
        components:{
            FooterContainer,
            FooterItem,
            Topbar,
            Swiper,
            Cell,
            CellMedia
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