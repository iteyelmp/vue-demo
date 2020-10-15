<template>
  <div class="movie-box">
    <van-image class="cover-image" :src="movie.image" radius="5px">
      <template v-slot:error>
        <img
          class="cover-image"
          src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2452075545.jpg"
        />
      </template>
    </van-image>
    <div class="title">{{movie.title}}</div>
    <van-rate v-model="rate" allow-half :readonly="true" />
  </div>
</template>

<script>
import { Image } from "vant";
import { Rate } from "vant";
import { ref } from "vue";
export default {
  components: {
    [Image.name]: Image,
    [Rate.name]: Rate
  },
  props: ["movie"],
  setup(props) {
    const rate = ref(props.movie.rating);
    return { rate };
  }
};
</script>

<style scoped>
.movie-box {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 205px;
  margin-left: 10px;
}
.cover-image {
  width: 100px;
  height: 145px;
}
.title {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 15px;
  text-align: left;
  font-weight: bold;
}
</style>
