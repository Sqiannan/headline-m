<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
// import { getUserChannels } from '@/api/article'
// import ArticleList from './views/home/components/article-list'
export default {
  name: 'App',
  components: {
    // ArticleList
  },
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  created () {
    // this.loadChannels ()
  },
  mounted () {
    // this.container = this.$refs.container;
  },
  methods: {
    // async loadChannels () {
    //   // try {
    //   const { data } = await getUserChannels()
    //   // console.log(data)
    //   // } catch {err) {
    //   //   this.$toast('获取失败')
    //   //   // this.channels = data.data
    //   // }
    // }
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
  .van-tabs {
    // padding-top: 92px;
}
}
.title-img{
  width: 182px;
  height: 56px;
}
.van-tabs__wrap{
   position: -webkit-sticky;
  position: sticky;
  // position: fixed;
  top: 0;
  z-index: 1;
  .van-tabs__nav{
  background: #f4f5f6;

  }
  .van-tab{
    width: 160px;
    height: 92px;
  }
  .van-tab--active {
    color: #466de2;
    font-weight: 500;
}
.van-tabs__line{
  background-color: #466de2;
}
}

</style>
