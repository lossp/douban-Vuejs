<template>
    <div>
        <FooterContainer>
            <FooterItem>
                    <svg class="icon" aria-hidden="true" slot="icon-normal">
                            <use xlink:href="#icon-zhuye"></use>
                    </svg> 
                    首页
            </FooterItem>
        

            <FooterItem>
                    <svg class="icon" aria-hidden="true" slot="icon-normal">
                            <use xlink:href="#icon-book"></use>
                    </svg> 
                    书影音
            </FooterItem>

            <FooterItem>
                    <svg class="icon" aria-hidden="true" slot="icon-normal">
                            <use xlink:href="#icon-guangbo"></use>
                    </svg> 
                    广播
            </FooterItem>

            <FooterItem>
                    <svg class="icon" aria-hidden="true" slot="icon-normal">
                            <use xlink:href="#icon-xiaozu"></use>
                    </svg> 
                    小组
            </FooterItem>

            <FooterItem>
                    <svg class="icon" aria-hidden="true" slot="icon-normal">
                            <use xlink:href="#icon-wode-copy"></use>
                    </svg> 
                    我的
            </FooterItem>
        </FooterContainer>
    </div>
</template>



<script>
    import FooterContainer from './Footer-container'
    import FooterItem from './Footer-item'

    export default{
        name:'index',
        components:{
            FooterContainer,
            FooterItem
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
        >.item{
            margin: auto;
            flex: 1;
            text-align: center;
            justify-content: center;
            >.item-icon{
                display:block;
                padding: 2px;
                font-size: 16px;
            }
            >.item-text{
                display: block;
                font-size: 8px;
                color: #949494;
            }
        }
    }
</style>