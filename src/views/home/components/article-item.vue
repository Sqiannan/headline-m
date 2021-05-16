<template>
  <!-- <div class="article-item">文章列表项</div> -->
  <div class="article-item">
    <div class="title">{{article.title}}</div>
    <!-- <div class="image" slot="img"> -->
    <van-image slot="icon" width="100" height="100" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
    <!-- </div> -->
    <div class="label">
      <div>
        <span>时间：{{article.date}}</span>
        <span>作者：{{article.author_name}}</span>

      </div>
    </div>
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
            font-size: 32px;
            color: #323233;
        width: 100%;
        text-align: left;

    }

}
</style>
