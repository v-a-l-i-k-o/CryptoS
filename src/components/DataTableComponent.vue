<template>
  <table class="table table__data">
    <tr>
      <th class="logo-cell"></th>
      <th class="symbol-cell">Символ</th>
      <th class="container-cell">
        <table>
          <tr>
            <th class="data-cell data-cell__price">Цена покупки</th>
            <th class="data-cell data-cell__sum hidden-sm">Сумма покупки</th>
            <th class="data-cell data-cell__curr-price dark">Текущая цена</th>
            <th class="data-cell data-cell__curr-sum dark hidden-sm">Текущая сумма</th>
            <th class="data-cell data-cell__diff dark">%</th>
            <th class="data-cell data-cell__arrow dark"></th>
          </tr>
        </table>
      </th>
    </tr>
    <tr v-for="(item, index) in currencyList" :key="item.id">
      <td class="logo-cell">
        <img width="20" height="20" v-src="item.symbol.toLowerCase()" src="">
      </td>
      <td class="symbol-cell">{{ item.symbol }}</td>
      <td class="container-cell">
        <table class="table">

          <DataTableItemComponent
                  v-for="(rowItem, index) in requiredUserSymbols[item.symbol.toLowerCase()]"
                  :key="rowItem.id"
                  :itemInfo="{
                    row: rowItem,
                    pos: index,
                    symbol: item.symbol.toLowerCase(),
                    priceUSD: item.price_usd
                  }"
                  @delete-row-2="deleteRowTransit"
          >
          </DataTableItemComponent>

        </table>
      </td>
    </tr>
  </table>
</template>

<script>
  import DataTableItemComponent from './DataTableItemComponent.vue';

  export default {
    props: {
      currencyList: Array,
      requiredUserSymbols: Object
    },
    data() {
      return {
      }
    },
    components: {
      DataTableItemComponent
    },
    methods: {
      deleteRowTransit(symbol, position) {
        this.$emit('delete-row-1', symbol, position);
      }
    },
    directives: {
      src: {
        inserted: function(el, binding) {
          try {
            el.src = require(`../assets/img/currencies/white/${binding.value}.svg`);
          } catch (e) {
            el.src = require(`../assets/img/currencies/white/usd.svg`);
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .table {
    margin: 0;
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;

    &__data {
       border-left: .1rem solid rgba(255, 255, 255, .2);
       border-bottom: .1rem solid rgba(255, 255, 255, .2);
       border-right: .1rem solid rgba(255, 255, 255, .2);

      .container-cell {
        background-color: rgba(0, 0, 0, .1);
        border-left: .2rem solid rgba(255, 255, 255, .4);
      }
    }

    tr:not(:first-child) {
      .logo-cell,
      .symbol-cell,
      .container-cell {
        border-top: .1rem solid rgba(255, 255, 255, .4);
      }
    }

    .table {
      tr {
        div {
          position: relative;
        }

        .icon__close {
          box-sizing: content-box;
          display: none;
          position: absolute;
          width: 1.6rem;
          height: 1.6rem;
          left: -3.6rem;
          top: 0;
          cursor: pointer;
          border: .8rem solid transparent;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          background-image: url(../assets/img/close.svg);
        }
      }

      tr:not(:first-child) {
        .data-cell__diff,
        .data-cell,
        .data-cell__arrow {
          border-top: .1rem solid rgba(255, 255, 255, .2);
        }
      }
      
      & > tr:hover {
            background-color: rgba(0, 0, 0, .1);

            .icon__close {
              display: block;
            }
          }
    }

    td, th {
      border: 0;
      padding: .5rem;
      font-size: 1.6rem;
      font-weight: 400;
      color: #ffffff;
      text-align: right;

      &.logo-cell {
         width: 3.5rem;
         text-align: left;
         vertical-align: middle;

        img {
          display: block;
        }
       }

      &.symbol-cell {
         width: 7rem;
         text-align: left;
       }

      &.data-cell {
         width: 20%;

        &__editing {
           .form-control {
             opacity: 1;
           }

           label {
             opacity: 0;
           }
         }

        &__down {
          color: #e85656;
         }

        &__up {
           color: #90b900;
         }
       }

      &.data-cell__diff {
         width: 17%;
       }

      &.data-cell__arrow {
         width: 3%;

      .icon {
        display: block;
        width: .5rem;
        height: 1.3rem;
        background-repeat: no-repeat;
        background-position: 50% 50%;

        &__up {
           background-image: url(../assets/img/arrow-up.svg);
         }

        &__down {
           background-image: url(../assets/img/arrow-down.svg);
         }
      }
    }

    &.container-cell {
       padding: 0;
     }

    &.dark {
       background-color: rgba(0, 0, 0, .3);
     }

    &[id]:hover {
       label:after {
         content: '';
         display: block;
         width: 100%;
         position: absolute;
         bottom: .3rem;
         left: 0;
         border-bottom: .1rem dashed #fff;
       }
     }
    }
  }
</style>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
