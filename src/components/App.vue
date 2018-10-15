<template>
  <div id="app" class="app">
    <header>
      <ThePortfolioStatusComponent></ThePortfolioStatusComponent>
    </header>

    <TheNavigationListComponent v-once></TheNavigationListComponent>

    <main class="main">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>

  </div>
</template>

<script>
  import ThePortfolioStatusComponent from './ThePortfolioStatusComponent.vue';
  import TheNavigationListComponent from './TheNavigationListComponent.vue';

  export default {
    name: 'App',
    data() {
      return {

      }
    },
    components: {
      ThePortfolioStatusComponent,
      TheNavigationListComponent
    }
  }
</script>

<style lang="scss">
  table {
    margin: 0;
    width: 100%;
  }

  .container {
    width: 100%;
    padding: 0 1.5rem;

    &:before,
    &:after {
       content: '';
       display: table;
     }

    &:after {
       clear: both;
     }
  }

  .theme-color {
    color: #209e91;
  }

  .row {
    margin: 0 -1.5rem;

    &:before,
    &:after {
       content: '';
       display: table;
     }

    &:after {
       clear: both;
     }
  }

  .main {
    padding: 1.5rem 0;
  }

  @media screen and (max-width: 699px) {
    .hidden-sm {
      display: none !important;
    }
  }
</style>
