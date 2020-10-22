<template>
  <div>
    <van-nav-bar
      title="标题"
      :left-arrow="leftArrow"
      :left-text="leftText"
      right-text="按钮"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
<!--    <van-search-->
<!--      v-model="value"-->
<!--      placeholder="请输入搜索关键词"-->
<!--      background="#75c6f5"-->
<!--      shape="round"-->
<!--      clearable-->
<!--      clear-trigger="always"-->
<!--    />-->
    <MovieTop :movies="movies" />
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Toast, NavBar, Search } from "vant";
import MovieTop from "../components/MovieTop";
import { getMovieSection } from "../utils/movie";

export default {
  components: {
    [NavBar.name]: NavBar,
    [Search.name]: Search,
    MovieTop
  },
  setup() {
    const router = useRouter();
    const leftText = ref("返回");
    const leftArrow = ref(true);

    const movies = ref([]);
    getMovieSection("coming_soon").then(res => {
      movies.value = res.movies;
    });

    const onClickLeft = () => {
      Toast.success("返回");
      router.go(-1);
    };
    const onClickRight = () => {
      Toast.fail("按钮");
      leftText.value = "";
      leftArrow.value = false;
    };

    return { leftText, leftArrow, movies, onClickLeft, onClickRight };
  }
};
</script>
