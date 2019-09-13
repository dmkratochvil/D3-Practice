<template>
  <div class="row">
    <div class="col-12 col-sm-12 col-md-12 col-md-6 col-xl-6 h-max">
      <div class="ml-2 pl-4 pt-5 mt-5 pr-3">
        <h1 class="display-5">{{ title }}</h1>
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <router-link class="btn btn-danger btn-lg rounded-pill mb-5" to="/introduction">Continue</router-link>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-md-6 col-xl-6 pattern"></div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  components: {},
  data() {
    return {
      title: "Pharmerit Starter App"
    };
  }
};
</script>

<style lang="scss">

</style>