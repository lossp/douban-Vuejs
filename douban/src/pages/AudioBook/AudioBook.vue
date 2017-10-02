<template>
    <div>
        <Topbar title="豆瓣app" :bg="true" :fixed="true">
            <!-- <a href="javascript:;" slot="left">&lt 返回</a>
            <a href="javascript:;" slot="right">分享</a> -->
        </Topbar>
        <div id="container"></div>
        <CellMedia :author="item.author.toString()" :column="item.publisher" :img="item.images.large" v-for="(item,index) in bookData" :key="item.index" :url="item.alt">
            <span slot="title">{{item.title}}</span>
            <span slot="describe">{{item.summary}}</span>
        </CellMedia>
    </div>

</template>

<script>
    import Topbar from '../../components/Header'
    import CellMedia from '../../components/Cell-media'
    import Cell from '../../components/Cell'
    export default{
        name:'audioBook',
        data(){
            return{
                bookData:[]
            }
        },
        components:{
            Topbar,
            CellMedia,
            Cell
        },
        created(){
            this.fetchBook()
        },
        methods:{
            fetchBook(){
                let url = 'api/book/search?q=JavaScript&fields=all';
                this.axios.get(url).then((response) => {
                    console.log(response)
                let books =[]
                let data = response.data.books
                for( var i in data){
                    books.push(data[i])
                }
                this.bookData = books
                })
            }
        }
    }
</script>

<style lang="scss">
    #container{
        margin-top: 49px;
    }
</style>
