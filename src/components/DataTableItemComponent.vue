<template>
  <tr :class="{'row__editing': itemInfo.row.id == currentEditedRow.rowId}">
    <td class="data-cell data-cell__price" :id="itemInfo.row.userPrice.id"
        :class="{'data-cell__editing': itemInfo.row.userPrice.id == currentEditedRow.cellId}"
        @dblclick="editRowPrice($event, itemInfo.row.id, itemInfo.row.userPrice.value)">
      <div>
        <span class="icon icon__close" @click="$emit('delete-row-2', itemInfo.symbol, itemInfo.pos)"></span>
      </div>
      <div class="form-group">
        <label>{{ formatPrice(itemInfo.row.userPrice.value, 3) }}</label>
        <input type="text" placeholder="0" class="form-control form-control__price"
               v-model="itemInfo.row.userPrice.value"
               @blur="completeEditPrice"
               @keyup.27="cancelEditPrice(itemInfo.row.userPrice)"
               @keyup.enter="completeEditPrice">
      </div>
    </td>
    <td class="data-cell data-cell__sum hidden-sm" :id="itemInfo.row.userSum.id"
        :class="{'data-cell__editing': itemInfo.row.userSum.id == currentEditedRow.cellId}"
        @dblclick="editRowPrice($event, itemInfo.row.id, itemInfo.row.userSum.value)">
      <div class="form-group">
        <label>{{ formatPrice(itemInfo.row.userSum.value, 3) }}</label>
        <input type="text" placeholder="0" class="form-control form-control__price"
               v-model="itemInfo.row.userSum.value"
               @blur="completeEditPrice"
               @keyup.27="cancelEditPrice(itemInfo.row.userSum)"
               @keyup.enter="completeEditPrice">
      </div>
    </td>
    <td class="data-cell data-cell__curr-price dark">{{ formatPrice(itemInfo.priceUSD, 3) }}</td>
    <td class="data-cell data-cell__curr-sum dark hidden-sm"
        :class="setPriceStateClass(itemInfo.row, itemInfo.priceUSD)"
    >{{ calculateCurrentSum(itemInfo.row, itemInfo.priceUSD) }}</td>
    <td class="data-cell data-cell__diff dark">{{ calculateDiff(itemInfo.row, itemInfo.priceUSD) }} %</td>
    <td class="data-cell data-cell__arrow dark">
      <i class="icon" :class="setDiffStateClass(itemInfo.row, itemInfo.priceUSD)"></i>
    </td>
  </tr>
</template>

<script>
  export default {
    props: {
      itemInfo: Object
    },
    data() {
      return {
        currentEditedRow: {
          rowId: '',
          cellId: ''
        }
      }
    },
    methods: {
      formatPrice(priceStr, digits = 2) {
        var price = !isNaN(parseFloat(priceStr)) && isFinite(priceStr) ? parseFloat(priceStr) : 0;
        return +price.toFixed(digits);
      },
      setPriceStateClass(row, price) {
        var userPrice = this.formatPrice(row.userPrice.value);
        var userSum = this.formatPrice(row.userSum.value);
        var currentSum = this.calculateCurrentSum(row, price);
        if(!userPrice || !userSum) return;
        return (userSum > currentSum) ? 'data-cell__down' : 'data-cell__up';
      },
      setDiffStateClass(row, price) {
        var userPrice = this.formatPrice(row.userPrice.value);
        if(!userPrice) return;
        return (userPrice > price) ? 'icon__down' : 'icon__up';
      },
      editRowPrice(event, id, price) {
        this.beforeEditCache = price;
        this.currentEditedRow.rowId = id;
        this.currentEditedRow.cellId = event.currentTarget.getAttribute('id');
      },
      cancelEditPrice(cellObj) {
        cellObj.value = this.beforeEditCache;
        this.finishEditPrice();
      },
      completeEditPrice() {
        this.finishEditPrice();
      },
      finishEditPrice() {
        this.currentEditedRow.rowId = '';
        this.currentEditedRow.cellId = '';
        this.beforeEditCache = '';
      },
      calculateCurrentSum(row, price) {
        var userPrice = row.userPrice.value;
        var userSum = row.userSum.value;
        var result = (userSum / userPrice) * price;
        return this.formatPrice(result, 3);
      },
      calculateDiff(row, price) {
        var userPrice = row.userPrice.value;
        var result = Math.abs(1 - (price / userPrice)) * 100;
        return this.formatPrice(result);
      }
    }
  }
</script>