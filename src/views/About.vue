<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button @click="goMovie">电影入口</Button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { Button } from "vant";
export default {
  components: {
    [Button.name]: Button
  },
  setup() {
    const router = useRouter()

    const goMovie = () => {
      router.push('/movie');
    };
    return { goMovie };
  }
};
</script>