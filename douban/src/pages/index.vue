
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

        <CellMedia :author="item.target.author.name" :column="item.source_cn" :img="item.target.cover_url" v-for="(item,index) in hotData" :key="item.id" :url="item.target.uri">
            <span slot="title">{{item.title}}</span>
            <span slot="describe">{{item.target.desc}}</span>
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
        },
        data(){
            return{
                recommendData:[],
                hotData:[]
            }
        },
        created(){
            this.fetchData();
        },
        methods:{
            fetchData() {
                this.axios.get('/api/homeData').then((response) => {
                let data = response.data.data.recommend_feeds;
                let recommend = [];
                let hot = [];
                for (var i in data) {
                    if (data[i].card && data[i].card.name == '为你推荐') {
                    recommend.push(data[i]);
                    } else {
                    hot.push(data[i]);
                    }
                }

                this.recommendData = recommend;
                this.hotData = hot;
                console.log(1122)
                console.log(hot)
                })
            }
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