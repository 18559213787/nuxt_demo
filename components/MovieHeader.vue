<template>
  <div class="movie-header">
    <ul class="movie-wrapper">
      <li v-for="item in movieMenuList" :key="item.path">
        <NuxtLink :to="`/movie/${item.path}`">{{item.title}}</NuxtLink>
      </li>
    </ul>    
  </div>
</template>

<script>
export default {
  data(){
    return {
      movieMenuList: [
        {title: '正在热映', path: 'in_theaters'},
        {title: '即将热映', path: 'coming_soon'},
        {title: 'top250', path: 'top250'},
      ]
    }
  }

}
</script>

<style  scoped>
.movie-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.movie-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #32363f;
  font-size: 20px;
}
.movie-wrapper li a {
  color: white;
}
.movie-wrapper li a:hover {
  color: red;
}

</style>
