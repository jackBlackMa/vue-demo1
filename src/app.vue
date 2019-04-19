<template>
  <div class="daily">
    <div class="menu">
      <div class="item" @click="this.handelToRecommend" :class="{on:type === 'recommend'}">每日推荐</div>
      <div class="item" :class="{on:type==='daily'}" @click="this.handleToDaily">主题日报</div>
      <ul v-show="showThemes">
        <li v-for="item in themes" :key="item.id">
          <a
            href="javascript:void(0)"
            ::class="{on: item.id===themeId&&type==='daily'}"
          >{{item.name}}</a>
        </li>
      </ul>
    </div>
    <div class="list" ref="list">
      <template v-if="type==='recommend'">
        <div v-for="list in recommendList" :key="list.date">
          <div class="date">{{list.date}}</div>
          <Item v-for="item in list.stories" 
          :key="item.id" :data="item"
          @click.native='handleClick(item.id)' ></Item>
        </div>
      </template>
    </div>
    <daily-article :id="articleId"></daily-article>
  </div>
</template>

<script>
import $ from "./lib/utils";
import Item from "./components/item.vue";
import dailyArticle from "./components/daily-article.vue";
import moment from "moment";
export default {
  components: {
    Item,
    dailyArticle,
  },
   mounted() {
     const $list  = this.$refs.list;
     $list.addEventListener('scroll',() => {
       if(this.type === 'daily' || this.isLoading) return
       if(($list.scrollTop+document.body.clientHeight)  >=$list.scrollHeight){
         this.dailyTime =  this.dailyTime-(1000*60*60*24);
         this.getRecommendList(this.dailyTime);
       }
     })
    this.getThemes();
    this.getRecommendList();

  },
  data() {
    return {
      type: "recommend",
      showThemes: false,
      themes: [],
      recommendList: [],
      themeId: 0,
      isLoading: false,
      articleId: 0,
      dailyTime: new Date().getTime(),
    };
  },
  methods: {
    handleClick(id){
      this.articleId = id;
    },
    getThemes() {
      $.ajax.get("themes").then(res => {
        console.log(res);
      });
    },
    handelToRecommend() {
      this.type = "recommend";
      this.recommendList = [];
      this.getRecommendList();
    },
    handleToDaily(){
        this.type = "daily";
      showThemes = !showThemes
    },
    getRecommendList(time = this.dailyTime) {
      this.isLoading = true;
      // const prevDay = "20190418";
      const prevDay = moment(time).format("YYYYMMDD");
      $.ajax.get(`news/before/${prevDay}`).then(res => {
        this.isLoading = false;
        this.recommendList.push(res);
      });
    }
  },
 
};
</script>
