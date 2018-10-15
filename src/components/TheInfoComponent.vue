<template>
    <div class="row">
        <div class="col">
            <CurrenciesComponent
                    title="Торговля"
                    :apiCurrencyList="apiCurrencyList">
            </CurrenciesComponent>

            <CurrenciesComponent
                    title="Инвестирование"
                    :apiCurrencyList="apiCurrencyList">
            </CurrenciesComponent>
        </div>

        <div class="col">
            <TheToDoComponent></TheToDoComponent>
        </div>
    </div>
</template>

<script>
    import CurrenciesComponent from './CurrenciesComponent.vue';
    import TheToDoComponent from './TheToDoComponent.vue';

    export default {
        data: function () {
            return {
                apiCurrencyList: []
            }
        },
        components: {
            CurrenciesComponent,
            TheToDoComponent
        },
        methods: {
            loadData() {
                this.$http
                    .get('https://api.coinmarketcap.com/v1/ticker/?limit=0')
                    .then(function(response) {
                        this.apiCurrencyList = response.data;
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
            }.bind(this), 10000);
        }
    }
</script>

<style lang="scss">
    .col {
        float: left;
        width: 50%;
        padding: 0 1.5rem;
    }

    @media screen and (max-width: 1279px) {
        .col {
            width: 100%;
        }
    }
</style>
