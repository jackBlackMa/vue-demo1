<template>
  <div class="daily-article">
    <div class="title">{{data.title}}</div>
    <div class="content" v-html="data.body"></div>
    <comment :id="id"></comment>
  </div>
</template>

<script>
import $ from "../lib/utils";
import comment from "./comment.vue";
export default {
  components: {
    comment
  },
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      data: {}
    };
  },
  methods: {
    getArticle() {
      $.ajax.get("news/" + this.id).then(res => {
        res.body = res.body.replace(/src="http/g, 'src="' + $.imgPath + "http");
        res.body = res.body.replace(
          /src="https/g,
          'src="' + $.imgPath + "https"
        );
        this.data = res;
        window.scrollTo(0, 0);
      });
    }
  },
  watch: {
    id(val) {
      if (val) this.getArticle();
    }
  }
};
</script>

