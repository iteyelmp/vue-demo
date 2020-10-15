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
  </div>
</template>

<script>
import { ref } from "vue";
import { NavBar } from "vant";
import { Toast } from "vant";

export default {
  components: {
    [NavBar.name]: NavBar
  },
  setup() {
    const leftText = ref("返回");
    const leftArrow = ref(true);

    const onClickLeft = () => {
      leftText.value = "";
      leftArrow.value = false;

      Toast.success("返回");
    };
    const onClickRight = () => {
      Toast.fail("按钮");
    };

    return { leftText, leftArrow, onClickLeft, onClickRight };
  }
};
</script>