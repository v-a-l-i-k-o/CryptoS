<template>
  <div class="panel panel__blur">
    <div class="panel_title">
      <h3>{{ title }}</h3>
      <div class="form-group form-group__for-title">
        <label for="" class="hidden-sm">Добавить сделку:</label>
        <input type="text" class="form-control" placeholder="symbol"
               v-model="symbolInput"
               @keyup.enter="addSymbol"
        >
      </div>
    </div>
    <div class="panel_body">
      <DataTableComponent
              :currencyList="filteredCurrencyList"
              :requiredUserSymbols="requiredUserSymbols"
              @delete-row-1="removeSymbol">
      </DataTableComponent>
    </div>
  </div>
</template>

<script>

  // localStorage
  const STORAGE_KEY_WATCHLIST = 'watchlist';
  var currencyStorage = {
    fetch: function (subtitle) {
      var requiredUserSymbols = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCHLIST + `_${ subtitle }`) || '{}');
      return requiredUserSymbols
    },
    save: function (requiredUserSymbols, subtitle) {
      localStorage.setItem(STORAGE_KEY_WATCHLIST + `_${ subtitle }`, JSON.stringify(requiredUserSymbols))
    }
  };

  import DataTableComponent from './DataTableComponent.vue';

  export default {
    props: {
      title: String,
      apiCurrencyList: Array
    },
    data() {
      return {
        requiredUserSymbols: null,
        symbolInput: ''
      }
    },
    components: {
      DataTableComponent
    },
    created() {
      this.requiredUserSymbols = currencyStorage.fetch(this.title);
    },
    watch: {
      requiredUserSymbols: {
        handler(obj) {
          currencyStorage.save(obj, this.title);
        },
        deep: true
      }
    },
    computed: {
      filteredCurrencyList() {
        var self = this;
        var result = self.apiCurrencyList.filter(function(item, index, arr) {
          if (self.requiredUserSymbols.hasOwnProperty(item['symbol'].toLowerCase())) {
            return arr.map(function(mapObj) { return mapObj['symbol'] }).indexOf(item['symbol']) === index;
          } else {
            return false;
          }
        });
        return result;
      }
    },
    methods: {
      addSymbol() {
        var value = this.symbolInput && this.symbolInput.trim();
        var isValueExist = this.apiCurrencyList.some(function(item) { return value == item['symbol'].toLowerCase() });

        if (!value || !isValueExist) {
          alert('Нет таких данных');
          return;
        }
        if (this.requiredUserSymbols.hasOwnProperty(value)) {
          this.requiredUserSymbols[value].push({
            id: Math.random().toString(36).slice(2),
            userPrice: { id: Math.random().toString(36).slice(2), value: '' },
            userSum: { id: Math.random().toString(36).slice(2), value: '' }
          });
        } else {
          this.$set(this.requiredUserSymbols, value, [ { id: Math.random().toString(36).slice(2), userPrice: { id: Math.random().toString(36).slice(2), value: '' }, userSum: { id: Math.random().toString(36).slice(2), value: '' }} ]);
        };
        this.symbolInput = '';
      },

      removeSymbol(symbol, position) { // { symbol: symbol, position: pos }
        this.requiredUserSymbols[symbol].splice(position, 1);
        if (!this.requiredUserSymbols[symbol].length) this.$delete(this.requiredUserSymbols, symbol);
      }
    }
  }
</script>

<style lang="scss">
  .panel {
    border-radius: .5rem;
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    background-color: rgba(0, 0, 0, .2);
    box-shadow: 0 .5rem .5rem 0 rgba(0, 0, 0, .25);

    &__blur {
       background-image: url(../assets/img/panel-blur-bg.jpg);
       background-attachment: fixed;
       background-position: 50% 50%;
       background-repeat: no-repeat;
       background-size: cover;
     }

    &_title {
       padding: 1rem 0;
       border-bottom: .1rem solid rgba(0, 0, 0, .12);
       box-shadow: 0 .1rem 0 0 rgba(255, 255, 255, .12);

      h3 {
        display: inline-block;
        font-size: 2rem;
        font-weight: 400;
        color: #ffffff;
        text-transform: uppercase;
      }
    }

    &_body {
       padding: 0;
    }

    .form-group {
      &__for-title {
         float: right;
       }

      label {
        position: relative;
        display: inline-block;
        margin: 0 .5rem;
        opacity: 1;
        color: #fff;
        font-weight: 400;
        font-size: 1.6rem;
        user-select: none;
      }

      .form-control {
        width: 100%;
        max-width: 10rem;
        height: 2.8rem;
        padding: .6rem 1.2rem;
        outline: 0;
        font-size: 1.6rem;
        text-align: right;
        border: 1px solid transparent;
        border-radius: 5px;
        color: #fff;
        background-color: rgba(0,0,0,.15);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

        &:focus {
           box-shadow: none;
           border-color: #4db1a7;
        }

        &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
          color: #a8a8a8;
        }
        &::-moz-placeholder { /* Firefox 19+ */
          color: #a8a8a8;
        }
        &:-ms-input-placeholder { /* IE 10+ */
          color: #a8a8a8;
        }
        &:-moz-placeholder { /* Firefox 18- */
          color: #a8a8a8;
        }

        &__price {
           opacity: 0;
           position: absolute;
           top: .1rem;
           right: 0;
           cursor: pointer;
           padding-right: .4rem;
         }
      }
    }

  }
</style>
