<template>
  <div>
     <router-link to="/index">Go to Foo</router-link>
    <router-link to="/about">Go to Bar</router-link>
    <div>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello Vue"
    };
  }
};
</script>
