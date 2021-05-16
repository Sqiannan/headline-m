<template>
  <div class="article-list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <article-item v-for="(article,index) in list" :key="index" :article="article" />
    </van-list>
  </div>
</template>

<script>
import { getArticles1 } from '@/api/article'
import ArticleItem from './article-item'
export default {
  name: 'articleList',
  components: {
    ArticleItem
  },
  // components:{},
  props: {
    channels: {
      type: Array,
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
      finished: false
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
        const { data } = await getArticles1(
          {
            // uniquekey,
            // title,
            // category
            // categosry:this.channels.category,

            // date,
            // author_name,
            // thumbnail_pic_s,
            // thumbnail_pic_s02,
            // thumbnail_pic_s03
          }
        )
        // for (let i = 0; i < data.length; i++) {

        // //   this.list.push(this.list.length + 1);
        // }
        // console.log("category",category)

        console.log('123', data)
        const result = data
        //   2.把数据放入list数组
        this.list.push(...result)
        //   3.本次数据加载完成把加载状态设置为结束
        this.loading = false
        // console.log("成功",channels)

        // console.log("成功",result.length)
        console.log('成功', this.list.length)

        //   4.判断数据是否全加载完成
        // if(this.list.length>=this.list.length){
        if (this.list.length >= result.length) {
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
