
<template>
    <div>
        <Topbar title="豆瓣app" :bg="true" :fixed="true">
            <a href="javascript:;" slot="left">&lt 返回</a>
            <a href="javascript:;" slot="right">分享</a>
        </Topbar>
        <FooterContainer v-model="select">
            <FooterItem id="tab1">
                    <svg class="icon" aria-hidden="true" slot="icon-normal">
                            <use xlink:href="#icon-zhuye"></use>
                    </svg> 
                    首页
            </FooterItem>
        

            <FooterItem id="tab2">
                    <svg class="icon" aria-hidden="true" slot="icon-normal">
                            <use xlink:href="#icon-book"></use>
                    </svg> 
                    书影音
            </FooterItem>

            <FooterItem id="tab3">
                    <svg class="icon" aria-hidden="true" slot="icon-normal">
                            <use xlink:href="#icon-guangbo"></use>
                    </svg> 
                    广播
            </FooterItem>

            <FooterItem id="tab4">
                    <svg class="icon" aria-hidden="true" slot="icon-normal">
                            <use xlink:href="#icon-xiaozu"></use>
                    </svg> 
                    小组
            </FooterItem>

            <FooterItem id="tab5">
                    <svg class="icon" aria-hidden="true" slot="icon-normal">
                            <use xlink:href="#icon-wode-copy"></use>
                    </svg> 
                    我的
            </FooterItem>
        </FooterContainer>
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
        },
        data(){
            return{
                select:'tab1'
            }
        }
    }
</script>



<style lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>