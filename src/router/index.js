import VueRouter from 'vue-router';

import App from '../components/App.vue';
import TheUnlockComponent from '../components/TheUnlockComponent.vue';
import TheInfoComponent from '../components/TheInfoComponent.vue';
import TheHistoryComponent from '../components/TheHistoryComponent.vue';

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: App,
            children: [
                {
                    path: '',
                    component: TheInfoComponent
                },
                {
                    path: 'info',
                    component: TheInfoComponent
                },
                {
                    path: 'history',
                    component: TheHistoryComponent
                }
            ]
        },
        {
            path: '/unlock',
            name: 'TheUnlockComponent',
            component: TheUnlockComponent
        }
    ]
});
