<template>
  <div class="article-list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <article-item v-for="(article,index) in list" :key="index" :article="article" />
    </van-list>
  </div>
</template>

<script>
import { getArticles1, getArticles2, getArticles3, getArticles4, getArticles5, getArticles6, getArticles7 } from '@/api/article'
import ArticleItem from './article-item'
export default {
  name: 'articleList',
  components: {
    ArticleItem
  },
  // components:{},
  props: {
    index: {
      type: Number,
      require: true
    },
    article: {
      type: Object,
      require: true
    }

  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      result: ''
    }
  },
  methods: {
    // onLoad() {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1);
    //     }

    //     // 加载状态结束
    //     this.loading = false;

    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true;
    //     }
    //   }, 1000);
    // },
    async onLoad () {
      try {
        //   1.请求获取数据
        // const { data:res1 } = await getArticles1()
        // const { data:res2 } = await getArticles2()
        // const { data:res3 } = await getArticles3()
        // const { data:res4 } = await getArticles4()
        // const { data:res5 } = await getArticles5()
        // const { data:res6 } = await getArticles6()
        // const { data:res7 } = await getArticles7()

        // console.log('123', res1)
        // console.log('res2', res2)
        // console.log('res3', res3)
        // console.log('res4', res4)
        // console.log('res5', res5)
        // console.log('res6', res6)
        // console.log('res7', res7)
        console.log('index', this.index)
        if (this.index == 0) {
          const { data } = await getArticles1()
          this.result = data
        } else if (this.index == 1) {
          const { data } = await getArticles2()
          this.result = data
        } else if (this.index == 2) {
          const { data } = await getArticles3()
          this.result = data
        } else if (this.index == 3) {
          const { data } = await getArticles4()
          this.result = data
        } else if (this.index == 4) {
          const { data } = await getArticles5()
          this.result = data
        } else if (this.index == 5) {
          const { data } = await getArticles6()
          this.result = data
        } else {
          const { data } = await getArticles7()
          this.result = data
        }
        // const { data } = await getArticles1()
        //       const { data} = await getArticles2()
        //       const { data } = await getArticles3()
        //       const { data } = await getArticles4()
        //       const { data } = await getArticles5()
        //       const { data } = await getArticles6()
        //       const { data } = await getArticles7()
        // const result = data
        //   2.把数据放入list数组
        this.list.push(...this.result)
        //   3.本次数据加载完成把加载状态设置为结束
        this.loading = false

        // console.log("成功",result.length)
        console.log('成功', this.list.length)

        //   4.判断数据是否全加载完成
        // if(this.list.length>=this.list.length){
        if (this.list.length >= this.result.length) {
        // }else{
          this.finished = true
        }
      } catch (err) {
        console.log('请求失败', err)
      }
    }
  }

}
</script>

<style scope>
.article-list{
    height: 79vh;
    overflow-y: auto;
}
</style>
