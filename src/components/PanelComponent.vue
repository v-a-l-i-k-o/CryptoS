<template>
  <div class="panel panel__blur">
    <div class="panel_title">
      <h3>{{ title }}</h3>
      <div class="form-group form-group__for-title">
        <label for="addInput" class="hidden-sm">Добавить сделку:</label>
        <input type="text" class="form-control" id="addInput" placeholder="symbol"
               v-model="symbolInput"
               @keyup.enter="addSymbol"
        >
      </div>
    </div>
    <div class="panel_body">
      <slot
        :filteredCurrencyData="filteredData"
        :requireSymbols="requireSymbols"
      ></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      dataForFilter: Array
    },
    data() {
      return {
        requireSymbols: {},
        symbolInput: ''
      }
    },
    computed: {
      filteredData() {
        var self = this;
        var result = self.dataForFilter.filter(function(item) {
          return self.requireSymbols.hasOwnProperty(item['symbol'].toLowerCase())
        });
        return result;
      }
    },
    methods: {
      addSymbol() {
        var value = this.symbolInput && this.symbolInput.trim();
        var ValueExist = this.dataForFilter.some(function(item) { return value == item['symbol'].toLowerCase() });

        if (!value || !ValueExist) {
          alert('Нет таких данных');
          return;
        }
        if (this.requireSymbols.hasOwnProperty(value)) {
          this.requireSymbols[value].push({
            id: Date.now(),
            title: value,
            price: '',
            sum: ''
          });
        } else {
          this.$set(this.requireSymbols, value, [ {id: Date.now(), title: value, price: '', sum: ''} ]);
        }
        this.symbolInput = '';
      },

      removeSymbol(obj) { // { symbol: symbol, position: index }
        var symbol = obj['symbol'];
        var pos = obj['position'];
        this.requireSymbols[symbol].splice(pos, 1);
        if (!this.requireSymbols[symbol].length) this.$delete(this.requireSymbols, symbol);
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
        display: inline-block;
        margin: 0 .5rem;
        color: #fff;
        font-weight: 400;
        font-size: 1.6rem;
      }

      .form-control {
        width: 10rem;
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
      }
    }

  }
</style>
