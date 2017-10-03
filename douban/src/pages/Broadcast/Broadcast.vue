<template>
    <div>
        <Topbar title="豆瓣app" :bg="true" :fixed="true">
            <!-- <a href="javascript:;" slot="left">&lt 返回</a>
            <a href="javascript:;" slot="right">分享</a> -->
        </Topbar>
        <div id='container'>
        <div>{{ movieData.length }}</div>
        <CellMedia :director="item.directors.name" :column="item.genres.toString()" :img="item.images.large" v-for="(item,index) in movieData" :key="item.index" :url="item.alt">
            <span slot="title">{{item.title}}</span>
            <span slot="describe">{{item.year}}</span>
        </CellMedia>
        </div>
        <!-- <button @click="more" class="more">more</button> -->
    </div>
</template>

<script>
    import Topbar from '../../components/Header'
    import CellMedia from '../../components/Cell-media'
    export default{
        name:'Moive',
        components:{
            Topbar,
            CellMedia
        },
        data(){
            return{
                movieData:[],
                start: 0,
                count: 20
            }
        },
        created(){
            this.fetchMovie()
            let Vue = this;
            window.addEventListener('scroll',function(){
                let windowHeight = document.documentElement.clientHeight;
                let wholeHeight = document.body.clientHeight;
                let scrollTop = document.documentElement.scrollTop;
                if( windowHeight + scrollTop >= wholeHeight){
                    Vue.fetchMovie();
                }
            })
        },
        methods:{
            fetchMovie(){
                const Vue = this;
                let url = `api/movie/top250?count=${Vue.count}&start=${Vue.start}`;
                Vue.axios.get(url).then((response)=>{
                    let data = response.data.subjects;
                    for(let i in data){
                        Vue.movieData.push(data[i]);
                    }
                    Vue.start += Vue.count;
                })
            }
            // more() {
            //     this.fetchMovie();
            // }
        }
    }


</script>
<style lang="scss" scoped>
    #container{
        margin-top: 49px;
    }
    .more {
        width: 100px;
        height: 10px;
        bottom: 40px;
        position: relative;
        top: -100px;
    }
</style>