<template>
  <div id="app" class="container">
    <!-- <router-view/> -->
    <!-- 导航栏 -->
    <van-nav-bar title="" >
      <template #left>
        <van-icon name="envelop-o" size="26" />
      </template>
      <van-image slot="title" class="title-img" fit="contain" :src="require('./images/logo.png')" />
      <template #right>
        <van-icon name="search" size="26" />
      </template>
    </van-nav-bar>
    <!-- 导航栏 -->
    <!-- 频道列表 -->
    <!-- <van-sticky :container="container"> -->
    <van-tabs v-model="active" >
      <van-tab :title="item.category" v-for="(item,index) in channels" :key="index">
        <article-list :channels="channels" />
      </van-tab>
      <!-- <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab> -->
    </van-tabs>
    <!-- </van-sticky> -->
    <!-- 频道列表 -->
  </div>
</template>
<script>
// import { getUserChannels } from '@/api/article'
import ArticleList from './views/home/components/article-list'
export default {
  name: 'App',
  components: {
    ArticleList
  },
  data () {
    return {
      active: 2,
      //  container: null,
      channels: [{
        category: '头条'
      },
      {
        category: '社会'
      },
      {
        category: '国内'
      },
      {
        category: '国际'
      },
      {
        category: '娱乐'
      },
      {
        category: '体育'
      },
      {
        category: '科技'
      }]
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
