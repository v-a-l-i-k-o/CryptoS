<template>
  <div id="app">
    <header>
      <ThePortfolioStatus></ThePortfolioStatus>
    </header>

    <TheNavigationList v-once></TheNavigationList>

    <main class="main">
      <div class="container">
        <div class="row">
          <div class="col">
            <PanelComponentCurrencies
              :title="titleList[0]"
              :dataForFilter="apiDataCurrencies"
            >
              <DataTableCurrencies slot-scope="scope"
                                   :filteredDataList="scope.filteredCurrencyData"
                                   :requireSymbols="scope.requireSymbols"
              ></DataTableCurrencies>

            </PanelComponentCurrencies>

            <PanelComponentCurrencies
              :title="titleList[1]"
              :dataForFilter="apiDataCurrencies"
            >
              <DataTableCurrencies slot-scope="scope"
                                   :filteredDataList="scope.filteredCurrencyData"
                                   :requireSymbols="scope.requireSymbols"
              ></DataTableCurrencies>

            </PanelComponentCurrencies>
          </div>

          <div class="col">
            <PanelComponentToDo
                    :title="titleList[3]"
            >

            </PanelComponentToDo>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
  import ThePortfolioStatus from './components/ThePortfolioStatus.vue';
  import TheNavigationList from './components/TheNavigationList.vue';
  import PanelComponentCurrencies from './components/PanelComponentCurrencies.vue';
  import DataTableCurrencies from './components/DataTableCurrencies.vue';
  import PanelComponentToDo from './components/PanelComponentToDo.vue';

  export default {
    name: 'app',
    data() {
      return {
        apiDataCurrencies: [],
        titleList: ['Торговля', 'Инвестирование', 'Статистика', 'To do']
      }
    },
    components: {
      ThePortfolioStatus,
      TheNavigationList,
      PanelComponentCurrencies,
      DataTableCurrencies,
      PanelComponentToDo
    },
    methods: {
      loadData() {
        this.$http
          .get('https://api.coinmarketcap.com/v1/ticker/?limit=0')
          .then(function(response) {
            this.apiDataCurrencies = response.data;
          })
          .catch(function(error) {
            console.log('We got some error: ' + error.data);
          });
      }
    },
    created() {
      this.loadData();

      setInterval(function() {
        this.loadData();
      }.bind(this), 5000);
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

  .col {
    float: left;
    width: 50%;
    padding: 0 1.5rem;
  }

  .main {
    padding: 1.5rem 0;
  }

  @media screen and (max-width: 1279px) {
    .col {
      width: 100%;
    }
  }

  @media screen and (max-width: 699px) {
    .hidden-sm {
      display: none !important;
    }
  }
</style>
