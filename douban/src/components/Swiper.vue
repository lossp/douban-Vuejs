<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
      <slot name="swiper-con"></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
  import '../assets/lib/swiper/js/swiper.js'
  export default {
    props: {
      swipeid: {
        type: String,
        default: ''
      },
      effect: {
        type: String,
        default: 'slide'
      },
      loop: {
        type: Boolean,
        default: true
      },
      direction: {
        type: String,
        default: 'horizontal'
      },
      
      autoplay: {
        type: Number,
        default: 5000,
      },
      paginationType: {
        type: String,
        default: 'bullets'
      },
      pagination: {
        type: Boolean,
        default: true
      },
      paginationDirection:{
        type:String,
        default:'center'
      }
    },
    mounted() {
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay: 5000,
            pagination : '.swiper-pagination',
            paginationClickable :true

            
            // // 如果需要前进后退按钮
            // nextButton: '.swiper-button-next',
            // prevButton: '.swiper-button-prev',
            
            // // 如果需要滚动条
            // scrollbar: '.swiper-scrollbar',
        })   
    }
  }

</script>
<style>
  @import '../assets/lib/swiper/css/swiper.css';
    .swiper-container{
        width: 100%;
        height: 300px;
        overflow:hidden
    }
  .swiper-container img{
    width: 100%;
  }
  .swiper-pagination-bullet-active {
    background: #fff;
  }

  .swiper-slide:nth-of-type(1){
      background-color: yellow;
  }
  .swiper-slide:nth-of-type(2){
      background-color: pink;
  }
  .swiper-slide:nth-of-type(3){
      background-color: brown;
  }

</style>
