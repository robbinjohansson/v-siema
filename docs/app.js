import Vue from 'vue';
import { Siema } from '../src';

new Vue({
    components: { Siema },

    el: '#app',

    methods: {
        init() {
            console.log('Init!');
        },
        change() {
            console.log(this.$refs.siema.currentSlide);
        },
        prev() {
            this.$refs.siema.prev();
            // this.$refs.siema.destroy(true);
        },
        next() {
            this.$refs.siema.next();
        },
    },
});
