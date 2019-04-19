<template>
  <div class="comments" v-show="comments.length">
    <span>评论{{comments.length}}</span>
    <div class="comment" v-for="comment in comments" :key="comment.id">
      <div class="avatar">
          <img :src="comment.avatar" >
      </div>
      <div class="content">
        <div class="name">{{comment.author}}</div>
        <div class="time">{{comment.time}}</div>
        <div class="text">{{comment.content}}</div>
      </div>
    </div>
  </div>
</template>


<script>
import $ from "../lib/utils";
export default {
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.getComments();
  },
  data() {
    return {
      comments: []
    };
  },
  methods: {
    getComments() {
        this.comments = [];
        $.ajax.get('story/'+this.id+'/short-comments').then( res => {
            this.comments = res.comments.map( comment => {
                comment.avatar = $.imgPath+comment.avatar;
                return comment
            })
        })
    }
  },
  watch: {
    id(val) {
      this.getComments();
    }
  }
};
</script>
