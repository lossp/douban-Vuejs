<template>
    <div>
        <Topbar title="豆瓣app" :bg="true" :fixed="true">
            <!-- <a href="javascript:;" slot="left">&lt 返回</a>
            <a href="javascript:;" slot="right">分享</a> -->
        </Topbar>
        <div id='container'>
            <CellMedia :singer="item.author[0].name" :sty="item.tags[1].name" :img="item.image" v-for="(item,index) in hitMusics" :key="item.index" :url="item.alt">
                <span slot="sty">{{item.tags[1].name}}</span>
                <span slot="title">{{item.title}}</span>
                <span slot="describe">{{item.year}}</span>
            </CellMedia>
        </div>
    </div>
</template>

<script>
    import Topbar from '../../components/Header'
    import CellMedia from '../../components/Cell-media'
    export default{
        name:'music',
        components:{
            Topbar,
            CellMedia
        },
        data(){
            return{
                hitMusics : [],
                start:0,
                count: 10
            }
        },
        created(){
            this.fetchMusic()
            let Vue = this;
            window.addEventListener('scroll',function(){
                let windowHeight = document.documentElement.clientHeight;
                let wholeHeight = document.body.clientHeight;
                let scrollTop = document.documentElement.scrollTop;
                if( windowHeight + scrollTop >= wholeHeight){
                    Vue.fetchMusic();
                }
            })
        },
        methods:{
            fetchMusic(){
                const Vue = this;
                let url = `api/music/search?q=jasonmraz&count=${Vue.count}&start=${Vue.start}`;
                this.axios.get(url).then((response)=>{
                    let data = response.data.musics;
                    for(var i in data){
                        Vue.hitMusics.push(data[i])
                    }
                    Vue.start += Vue.count
                })
            }
        }
 
    }
</script>

