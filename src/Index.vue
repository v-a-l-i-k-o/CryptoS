<template>
  <router-view></router-view>
</template>

<script>

  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" src="./styles/_reset.scss"></style>

<style lang="scss">
  html, body {
    font-family: Roboto, sans-serif;
  }

  body {
    position: relative;
    width: 100%;
    min-height: 100%;
    background-image: url(./assets/img/body-blur-bg.jpg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-attachment: fixed;
    background-size: cover;
  }
</style>