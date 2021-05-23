<template>
  <div class="container">
    <!-- 导航栏 -->
    <van-nav-bar title="" >
      <template #left>
        <van-icon name="envelop-o" size="26" />
      </template>
      <van-image slot="title" class="title-img" fit="contain" :src="require('@/images/logo.png')" />
      <template #right>
         <!-- <van-button icon="search" type="primary" to="/search" /> -->
        <van-icon name="search" size="26" @click="goSearch"/>
      </template>
    </van-nav-bar>
    <!-- 导航栏 -->
    <!-- 频道列表 -->
    <van-tabs v-model="active" >
      <van-tab :title="item.category" v-for="(item,index) in channels" :key="index">
        <article-list :index="index" />
      </van-tab>
    </van-tabs>
    <!-- 频道列表 -->
  </div>
</template>
<script>
import ArticleList from '../../views/home/components/article-list'

export default {
  name: 'index',
  components: {
    ArticleList
  },
  data () {
    return {
      active: 0,
      channels: [{
        id: 0,
        category: '头条'
      },
      {
        id: 1,
        category: '社会'
      },
      {
        id: 2,
        category: '国内'
      },
      {
        id: 3,
        category: '国际'
      },
      {
        id: 4,
        category: '娱乐'
      },
      {
        id: 5,
        category: '体育'
      },
      {
        id: 6,
        category: '科技'
      }]
    }
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
  },
  methods: {
    goSearch () {
      // 通过push进行跳转
      this.$router.push('/search')
    }
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
