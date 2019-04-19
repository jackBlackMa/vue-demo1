<template>
  <a href="javascript:void(0)" class="daily-item">
    <div class="img" v-if="data.images">
      <img :src="imgPath+data.images[0]">
    </div>
    <div class="title" :class="{noImg: !data.images}">{{data.title}}</div>
  </a>
</template>

<script>
import $ from "../lib/utils";

export default {
  props: {
    data: {
      type: Object
    }
  },

  data() {
    return {
      imgPath: $.imgPath
    };
  }
};
</script>


