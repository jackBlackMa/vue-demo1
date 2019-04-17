<template>
  <div>
    <div>
      <button @click='handleAdd'>++</button>
      <button @click='handleMin'>--</button>
    </div>
    <div>{{count}}</div>
    <div>{{list}}</div>
    <div>{{listCount}}</div>
  </div>
</template>

<script>
export default {
  methods: {
    handleAdd() {
        this.$store.commit('increment')
    },
    handleMin(){
         this.$store.commit('decrease')
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    list(){
      return this.$store.getters.filteredList
    },
    listCount(){
      return this.$store.getters.listCount
    },
  }
};
</script>

