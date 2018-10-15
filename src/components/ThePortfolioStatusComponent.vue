<template>
  <div class="container">
    <div class="logo">
      <span class="theme-color">Crypto</span>Basket
    </div>
    <div class="totalSum">
      <span class="totalSum_btc">0</span> <span class="theme-color">BTC</span>
      /
      <span class="totalSum_usd">0</span> <span class="theme-color">USD</span>
    </div>
    <div class="lockScreen">
      <router-link :to="{ name: 'TheUnlockComponent' }">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGlSURBVEhL7Zc9S8NgFIWr4NCi+IGLIgg66GBxKg7aVSg6OTgJdRJcFBwE0dXFyVXo5A9QHHTQ0cG1HQv+AwftpBXa+Nz0dJCYtKavitAHDu97b07uSUoIaeJf4XnecL1en2OdZU2q/TMQ0kPIOnpANWof9q/oCmVkdQfzUwy+QM/oCM3Q62NNogV0ht7RoU7pHAJ6GWh3VEITagfgWBbvC+ueWp3BoA30FBXaBM8yqnIBU2rFh0FFtK+yJXiv0anKeDBgjKu3B2hSrZbgzaOyyngwwB6cN5VtgT+Dqirjwc0u2QOjsi0ITduvpDIevx7MeUPI3k45VLF9u8K/yGo0e/0aG44ZObFoZ7mEmeeK+Bo8m5ge0Tj7T3cSV8yaZ7XwacUE4eA2ulfpDAWnVQbpBkeBb4R5KZWROAvGs4NqqIKyaofiMrhswwz2BbVDkc9JcMFPBfZ5tUORz0nwip/aYFDtUMzkKjjnRzZo+Uo0k6vgAXSJTtSKxFnwd+kGB/jL4FU89m28y7rlQsw6RvbJO6qYIBy0vykH6BbdOdINWlOESCQ+AAPFdikwhL8KAAAAAElFTkSuQmCC">
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss">
  header {
    z-index: 2;
    width: 100%;
    padding: 1.5rem 0;
    text-align: center;
    background-color: rgba(0, 0, 0, .5);
    border-bottom: .1rem solid #209e91;
  }

  .logo {
    float: left;
    display: block;
    min-width: 15rem;
    color: #fff;
    font-size: 2.4rem;
    white-space: nowrap;
  }

  .totalSum {
    display: inline-block;
    color: #fff;
    font-size: 2.4rem;
  }

  .lockScreen {
    float: right;
    min-width: 15rem;
    text-align: right;

    a {
      width: 30px;
      height: 30px;
      display: inline-block;
      vertical-align: middle;
    }
  }
</style>
