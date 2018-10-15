<template>
  <div class="unlock-component">
    <div class="unlock-block">
      <h1>{{ title }}</h1>
      <form class="form form-unlock">
        <div class="form-group clearfix">
          <label for="passwordInput" class="form-unlock_label">Пароль</label>
          <input type="password" class="form-control form-unlock_pass-input" id="passwordInput" placeholder="Пароль" autocomplete="current-password">
        </div>
        <div class="form-group clearfix">
          <button type="submit" class="btn btn-unlock" @click="unlockApp()">{{ title }}</button>
          <a href="#" onclick="return false" class="form-unlock_link-forgot">Забыл? Сбрось.</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UnlockComponent',
    data() {
      return {
        title: 'Разблокировать'
      }
    },
    methods: {
        unlockApp() {
            this.$router.push({
                path: '/'
            })
        }
    }
  }
</script>

<style lang="scss">
  .unlock-component {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .unlock-block {
    display: block;
    width: 55rem;
    padding: 3.2rem;
    color: #ffffff;
    border-radius: .5rem;
    background: rgba(0, 0, 0, .55);

    h1 {
      font-weight: 300;
      margin-bottom: 2.8rem;
      text-align: center;
    }
  }

  .form-unlock {
     .form-group {
       padding-left: 8rem;
       position: relative;
       margin-bottom: 1.5rem;
     }

     &_label {
        position: absolute;
        font-weight: 400;
        left: 0;
        font-size: 1.6em;
      }

     &_pass-input[type="password"] {
        width: 100%;
        height: 3.4rem;
        padding: .6rem 1.2rem;
        border-radius: .5rem;
        font-size: 1.4em;
        outline: none;
        color: #ffffff;
        background-color: rgba(0,0,0,.4);
        border: .1rem solid transparent;
        transition: border-color 150ms ease-in-out;

        &:focus {
           box-shadow: none;
           border: .1rem solid #4db1a7;
         }
      }
  }

  .btn {
    display: inline-block;
    padding: .6rem 1.2rem;
    margin-bottom: 0;
    font-size: 1.4em;
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
    white-space: nowrap;
    outline: none;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: .5rem;
    transition: all 400ms ease;

    &-unlock {
       border: 1px solid #ffffff;

      &:hover {
         opacity: .7;
       }
     }
  }

  .form-unlock_link-forgot {
    display: inline-block;
    float: right;
    font-size: 1.6em;
    color: #209e91;
    text-decoration: none;
    outline: none;
    transition: all .2s ease;

    &:hover {
       color: #1b867b;
     }
  }

</style>
