import Siema from './components/Siema.vue';

export default {
    install(Vue, options) {
        Vue.component('siema', Siema);
    },
};

export { Siema };
