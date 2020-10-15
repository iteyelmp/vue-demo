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
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      background="#75c6f5"
      shape="round"
      clearable
      clear-trigger="always"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { Toast, NavBar, Search } from "vant";
import { useRouter } from "vue-router";

export default {
  components: {
    [NavBar.name]: NavBar,
    [Search.name]: Search
  },
  setup() {
    const router = useRouter();
    const leftText = ref("返回");
    const leftArrow = ref(true);

    const onClickLeft = () => {
      Toast.success("返回");
      router.go(-1);
    };
    const onClickRight = () => {
      leftText.value = "";
      leftArrow.value = false;
      Toast.fail("按钮");
    };

    return { leftText, leftArrow, onClickLeft, onClickRight };
  }
};
</script>