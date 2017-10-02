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
                hitMusics : []
            }
        },
        created(){
            this.fetchMusic()
        },
        methods:{
            fetchMusic(){
                let url = 'api/music/search?q=jasonmraz&count=15';
                let musicData = [];
                this.axios.get(url).then((response)=>{
                    let data = response.data.musics;
                    for(var i in data){
                        musicData.push(data[i])
                    }
                    this.hitMusics = musicData;
                    console.log(musicData)
                })
            }
        }
 
    }
</script>

