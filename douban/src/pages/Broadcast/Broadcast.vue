<template>
    <div>
        <Topbar title="豆瓣app" :bg="true" :fixed="true">
            <a href="javascript:;" slot="left">&lt 返回</a>
            <a href="javascript:;" slot="right">分享</a>
        </Topbar>
        
        <CellMedia :director="item.directors.name" :column="item.genres.toString()" :img="item.images.large" v-for="(item,index) in movieData" :key="item.index" :url="item.alt">
            <span slot="title">{{item.title}}</span>
            <span slot="describe">{{item.year}}</span>
        </CellMedia>
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
                movieData:[]
            }
        },
        created(){
            this.fetchMovie()
        },
        methods:{
            fetchMovie(){
                let url = 'api/movie/top250?count=20';
                this.axios.get(url).then((response)=>{
                    let movies = [];
                    let data = response.data.subjects;
                    for(let i in data){
                        movies.push(data[i]);
                    }
                    this.movieData = movies;
                    console.log(this.movieData)
                })
            }
        }
    }


</script>