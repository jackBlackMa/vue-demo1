<template>
  <div class="daily">
    <div class="menu">
      <div class="item" 
          :class="{on:type === 'recommend'}">每日推荐</div>
      <div class="item"
          :class="{on:type==='daily'}"
          @click="showThemes = !showThemes">主题日报</div>
      <ul v-show='showThemes'>
        <li v-for='item in themes' :key='item.id'>
          <a href="javascript:void(0)" ::class="{on: item.id===themeId&&type==='daily'}">{{item.name}}</a>
        </li>
      </ul>

    </div>
    <div class="list">
      <!-- <Item></Item> -->
    </div>
    <!-- <daily-article></daily-article> -->
  </div>
</template>

<script>
import $ from './lib/utils'
import moment from 'moment'
export default {
  data() {
    return {
     type: 'recommend',
     showThemes: false,
     themes: [],
     themeId: 0,
     isLoading: false,
    };
  },
  methods: {
    getThemes(){
      $.ajax.get('themes').then( res => {
        console.log(res)
      })
    },
    getRecommendList(){
      this.isLoading = true;
      const prevDay = '20190418'
      // const prevDay = moment("YYYY-MM-DD").format();
      $.ajax.get(`news/before/${prevDay}`).then(res=> {
        console.log(res);
      });
    }

  },
  mounted(){
    this.getThemes();
    this.getRecommendList();
  },
};
</script>
