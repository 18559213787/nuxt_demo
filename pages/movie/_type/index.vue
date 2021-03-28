<template>
  <div class="movie-type">
    <NuxtLink 
      v-for="item in list" 
      :key="item.id" 
      :to="`/movie/${$route.params.type}/${item.id}`"
      class="movie-list">
      <img 
        :src="item.img" 
        :alt="item.title" >
      <h3>电影名称: {{item.title}}</h3>
      <p>电影评分: {{item.rating || '暂无评分'}}</p>
    </NuxtLink>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  // layout属性设置后默认从layout文件夹中找到对应的组件进行布局
  layout: 'movie',
  // `asyncData`方法会在组件（**限于页面组件**）每次加载之前被调用。它可以在服务端或路由更新之前被调用
  //这个函数中**不能**使用`this`
  async asyncData({route, params}, callback) {
    const res = await axios.get(`/${route.params.type}`)
    console.log(res);
    callback(null, {list: res.data})
  }


}
</script>

<style  scoped>
.movie-type {
  padding-top: 60px;
}
.movie-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.movie-list img {
  width: 500px;
  height: 500px;
  background-color: #ccc;
}
.movie-list p {
  padding: 5px 0;
}
</style>
