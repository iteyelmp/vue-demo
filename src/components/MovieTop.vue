<template>
  <div class="movie-top-list">
    <div class="movie-top-bar">
      <div class="movie-top-bar-name">热门电影</div>
      <router-link class="movie-top-bar-more-router" to="/more/hot">
        <div class="movie-top-bar-more">查看更多></div>
      </router-link>
    </div>
    <div class="movie-banner">
      <MovieCard v-for="(item,index) in movies" :movie="item" :key="index" />
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard";

export default {
  props: ["movies"],
  components: {
    MovieCard
  }
};
</script>

<style scoped>
.movie-top-list {
  margin-top: 25px;
}

.movie-top-bar {
  display: flex;
  justify-content: space-between;
}

.movie-top-bar-name {
  width: 30%;
  height: 18px;
  line-height: 18px;
  color: #333333;
  font-weight: bold;
  font-size: 16px;
  text-align: left;
  padding-left: 10px;
  border-left: 3px solid #42bd56;
}
.movie-top-bar-more-router {
  width: 30%;
}
.movie-top-bar-more {
  height: 18px;
  line-height: 18px;
  color: #42bd56;
  font-size: 14px;
  text-align: right;
}

.movie-banner {
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  width: 100%;
  overflow-x: scroll;
  justify-content: flex-start;
}
</style>
