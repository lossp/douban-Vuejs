<template>
  <div id="app">
    <router-view></router-view>
        <FooterContainer v-model="select">
            <FooterItem id="Index" isRouter>
                    <svg class="icon" aria-hidden="true" slot="icon-normal">
                            <use xlink:href="#icon-zhuye"></use>
                    </svg> 
                    首页
            </FooterItem>
        

            <FooterItem id="AudioBook" isRouter>
                    <svg class="icon" aria-hidden="true" slot="icon-normal">
                            <use xlink:href="#icon-book"></use>
                    </svg> 
                    书影音
            </FooterItem>

            <FooterItem id="Broadcast" isRouter>
                    <svg class="icon" aria-hidden="true" slot="icon-normal">
                            <use xlink:href="#icon-guangbo"></use>
                    </svg> 
                    广播
            </FooterItem>

            <FooterItem id="Group" isRouter>
                    <svg class="icon" aria-hidden="true" slot="icon-normal">
                            <use xlink:href="#icon-xiaozu"></use>
                    </svg> 
                    小组
            </FooterItem>

            <FooterItem id="Mine" isRouter>
                    <svg class="icon" aria-hidden="true" slot="icon-normal">
                            <use xlink:href="#icon-wode-copy"></use>
                    </svg> 
                    我的
            </FooterItem>
        </FooterContainer>
  </div>
</template>

<script>
import FooterContainer from './components/Footer-container'
import FooterItem from './components/Footer-item'
export default {
  name: 'app',
  components:{
    FooterContainer,
    FooterItem
  },
  data(){
    return{
      select: "Index"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
