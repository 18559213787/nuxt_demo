<template>
  <div class="movie-index">
    这里是豆瓣电影首页
  </div>
</template>

<script>
export default {
  layout: 'movie',
  // 页面设置seo头部的head
  head() {
    return {
      title: '豆瓣电影',
      meta: [
        {name: 'keywords', content: '电影、经典电影、热映、电视剧、美剧、影评、电影院、电影票、排行、推荐'}
      ]
    }
  }
}
</script>

<style scoped>
.movie-index {
  padding-top: 60px;
}
</style>
