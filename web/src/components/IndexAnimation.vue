<template>
<canvas class="index-canvas" ref="canvas">
</canvas>
</template>

<script>
import { index_fullScreenAnimation } from "@/utils";
export default {
  mounted() {
    index_fullScreenAnimation(this.$refs.canvas)
   }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .index-canvas{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }
</style>
