<template>
<div class="search">
 <van-search v-model="value" show-action  placeholder="请输入搜索关键词" @search="onSearch()">
    <template #action>
      <div @click="onSearch()">搜索</div>
    </template>
  </van-search>
  <div class="like">
    <p class="like-title">猜你喜欢</p>
    <div class="like-list">
      <p>前端课程2019版更新</p>
      <p>博学谷</p>
      <p>前端公开课</p>
      <p>院校帮</p>
      <p>前端提升课程</p>
      <p>前端</p>
      <p>传智播客</p>
      <p>黑马程序员</p>
      <p>酷丁鱼</p>
    </div>
  </div>
</div>

</template>

<script>
import { Toast } from 'vant'
export default {
  components: {},
  props: {
    // article: {
    //   type: Object,
    //   required: true
    // }
  },
  data () {
    return {
      value: ''
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onSearch (val) {
      Toast('您点击了搜索按钮')
    },
    onCancel () {
      Toast('取消')
    }
  }
}
</script>

<style scoped lang="less">
.van-search__content{
  border-radius: 30px;
}
.like{
  padding: 0 20px;
  .like-title{
    font-size: 28px;
  }
  .like-list{
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    p{
      font-size: 32px;
      margin-right: 40px;
    }
  }
}
</style>
