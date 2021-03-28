<template>
  <div class="movie-detail">
    <img
      :src="detail.img"
      :alt="detail.title">
    <h3>{{detail.title}}</h3>
    <p>电影类型: {{detail.genres.join(',')}}</p>
    <p>上映时间: {{detail.details[0].year}}</p>
    <p>上映时间: {{detail.details[0].summary}}</p>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  layout: 'movie',
  async asyncData({ route }, callback) {
    const params = route.params;
    const res = await axios.get(`/${params.type}/${params.id}?_embed=details`);
    console.log(res);
    callback(null, {detail: res.data})
  },
  
}
</script>

<style  scoped>
.movie-detail {
  width: 40%;
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0 0 10px #bbb;
}
.movie-detail img{
  width: 100%;
}
.movie-detail:hover {
  box-shadow: 0 0 60px #aaa;
}
</style>
