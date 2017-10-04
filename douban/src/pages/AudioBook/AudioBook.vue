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
                bookData:[],
                count:10,
                start:0
            }
        },
        components:{
            Topbar,
            CellMedia,
            Cell
        },
        mounted(){
            this.fetchBook()
            let Vue = this;
            window.addEventListener('scroll',function(){
                let windowHeight = document.documentElement.clientHeight;
                let wholeHeight = document.body.clientHeight;
                let scrollTop = document.documentElement.scrollTop;
                if( windowHeight + scrollTop >= wholeHeight){
                    Vue.fetchBook();
                    console.log(213)
                }
            })
        },
        methods:{
            fetchBook(){
                const Vue = this;
                let url = `api/book/search?q=JavaScript&fields=all&count=${Vue.count}&start=${Vue.start}`;
                this.axios.get(url).then((response) => {
                    console.log(response)
                let data = response.data.books
                for( let i in data){
                    Vue.bookData.push(data[i])
                }
                Vue.start += Vue.count
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
