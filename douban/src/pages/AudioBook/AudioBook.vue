<template>
    <div>
        <Topbar title="豆瓣app" :bg="true" :fixed="true">
            <a href="javascript:;" slot="left">&lt 返回</a>
            <a href="javascript:;" slot="right">分享</a>
        </Topbar>
        <Cell title="提醒" icon>
                <a href="javascript:;" slot="cell-right"><img src="../../assets/images/ic_arrow_gray_small.png" alt="提醒"></a>
        </Cell>
        <Cell title="设置">
                <a href="javascript:;" slot="cell-right"><img src="../../assets/images/ic_arrow_gray_small.png" alt="设置"></a>
        </Cell>
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