<template>
    <div class="cell-media-wrap">
        <a href="javascript:;">
        <div class="cell-media-top">
            <div class="cell-media">
                <div class="cell-title">
                    <slot name="title"></slot>
                </div>
                <div class="cell-detail">
                    <slot name='describe'></slot>
                </div>
            </div>
            <div class="pull-right right-img" :style="{'background-image':'url('+img+')'}">
            </div>
        </div>
        <div class="cell-media-bottom">
            <p v-if="author">作者：{{author}}</p>
            <p v-if="column">{{column}}</p>
        </div>
        </a>
    </div>
</template>

<script>
    export default{
        props:['author', 'column', 'img']
    }
</script>

<style lang="scss">
    .cell-media-wrap{
        display: flex;
        flex-direction: column;
        padding: 18px;
        position: relative;
        >a{
            text-decoration: none;
        }
        &:after{
            content:'';
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            height: 1px;
            background: #eee;
            transform: scaleY(0.5);
        }
        .cell-media-top{
            display: flex;
            flex-direction: row;
            .cell-media{
                flex: 1;
                padding-right: 45px;
            }
            .cell-title{
                font-size: 16px;
                line-height: 24px;
                color:#333;
                font-weight: bold;
                text-align: left;
            }
            .cell-detail{
                font-size: 12px;
                padding-top: 12px;
                color: #939393;
                text-align: left;
            }
            .pull-right{
                width: 94px;
                height: 94px;
                overflow: hidden;
                background-position: center center;
                background-size: cover;
                img{
                    width: 100%;
                }
            }
        }
        .cell-media-bottom{
            display: flex;
            justify-content: space-between;
            padding-top: 20px;
            margin-top: 12px;
            color: #bfbfbf;
            position: relative;
            &:before{
                content:'';
                position: absolute;
                top: 0;
                left: 0;
                width: 20px;
                height: 1px;
                background: #eee;
            }
        }
    }
</style>