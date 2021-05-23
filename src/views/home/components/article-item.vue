<template>
  <!-- <div class="article-item">文章列表项</div> -->
  <div class="article-item">
    <div class="title">{{article.title}}</div>
    <!-- <div class="image" slot="img"> -->
    <van-image class="img" v-if="article.thumbnail_pic_s02"  width="150" height="120" :src="article.thumbnail_pic_s02" />
    <van-image class="img" v-if="article.thumbnail_pic_s03" width="150" height="120"  :src="article.thumbnail_pic_s03" />
    <!-- </div> -->
    <div class="label">
      <div>
        <span>时间：{{article.date}}</span>
        <span>作者：{{article.author_name}}</span>

      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.article-item{
    padding: 0 32px;
        .title{
            margin: 20px 0;
            font-size: 36px;
            color: #323233;
        width: 100%;
        text-align: left;

    }
    .img{
      margin: 0 28px;
    }
    .label{
      font-size: 28px;
      display: flex;
      justify-content: flex-start;
      span{
        color: #bfbfbf;
        text-align: left;
        margin-right: 20px;
      }
    }
    .line{
      margin: 20px 0;
      height: 1px;
      width: 100%;
      background: #f5f6f8;
    }

}
</style>
