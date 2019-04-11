<template>
  <div>
    <div>{{$route.params.id}}</div>
    <div @click="handelClick">123</div>
  </div>
</template>

<script>
export default {
  methods: {
    handelClick() {
      this.$router.push("/about");
    }
  },

  mounted() {}
};
</script>
