<template>
  <nav class="nav">
    <ul class="navigation">
      <li v-for="item in tabList" :class="[ 'navigation_item', { active: currentTab == item.name } ]">
        <a @click.prevent="currentTab = item.name" :href="item.link" class="navigation_ref">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data: function () {
      return {
        tabList: [
          { name: 'Инфо-панель', link: '#' },
          { name: 'История сделок', link: '#' }
        ],
        currentTab: 'Инфо-панель'
      }
    }
  }
</script>

<style lang="scss">
  .nav {
    background-color: rgba(0, 0, 0, .5);

    .navigation {
      &:before,
      &:after {
         content: '';
         display: table;
       };
      &:after {
         clear: both;
       };
      font-size: 1.6rem;

      &_item {
         float: left;
         display: inline-block;

        &.active {
           background-color: #209e91;
         }
      }

      &_ref {
         position: relative;
         display: inline-block;
         padding: 1.5rem;
         color: #ffffff;
         border-bottom: .4rem solid transparent;

        &:hover {
           border-bottom: .4rem solid #209e91;
         }
      }
    }
  }
</style>
