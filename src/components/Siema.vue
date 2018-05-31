<template>
    <div :class="selector">
        <slot></slot>
    </div>
</template>

<script>
import Siema from 'siema';

export default {
    mounted() {
        this.init();
        if (this.autoplay) {
            setInterval(() => this.Siema.next(), this.autoplayDuration);
        }
    },

    data() {
        return {
            Siema: '',
        };
    },

    computed: {
        currentSlide() {
            return this.Siema.currentSlide;
        },
    },

    props: {
        autoplay: {
            type: Boolean,
            default: false,
            required: false,
        },
        autoplayDuration: {
            type: Number,
            default: 3000,
            required: false,
        },
        selector: {
            type: String,
            default: 'siema',
            required: false,
        },
        duration: {
            type: Number,
            default: 500,
            required: false,
        },
        easing: {
            type: String,
            default: 'ease',
            required: false,
        },
        perPage: {
            type: Number,
            default: 1,
            required: false,
        },
        startIndex: {
            type: Number,
            default: 0,
            required: false,
        },
        draggable: {
            type: Boolean,
            default: true,
            required: false,
        },
        multipleDrag: {
            type: Boolean,
            default: true,
            required: false,
        },
        threshold: {
            type: Number,
            default: 20,
            required: false,
        },
        loop: {
            type: Boolean,
            default: false,
            required: false,
        },
        rtl: {
            type: Boolean,
            default: false,
            required: false,
        },
    },

    methods: {
        init() {
            this.Siema = new Siema({
                selector: '.' + this.selector,
                duration: this.duration,
                easing: this.easing,
                perPage: this.perPage,
                startIndex: this.startIndex,
                draggable: this.draggable,
                multipleDrag: this.multipleDrag,
                threshold: this.threshold,
                loop: this.loop,
                rtl: this.rtl,
                onInit: () => {
                    this.$emit('init');
                },
                onChange: () => {
                    this.$emit('change');
                },
            });
        },
        goTo(index, callback) {
            this.Siema.goTo(index, callback);
        },
        prev(howManySlides = 1, callback) {
            this.Siema.prev(howManySlides, callback);
        },
        next(howManySlides = 1, callback) {
            this.Siema.next(howManySlides, callback);
        },
        remove(index, callback) {
            this.Siema.remove(index, callback);
        },
        insert(item, index, callback) {
            this.Siema.insert(item, index, callback);
        },
        prepend(item, callback) {
            this.Siema.prepend(item, callback);
        },
        append(item, callback) {
            this.Siema.append(item, callback);
        },
        destroy(restoreMarkup = false, callback) {
            this.Siema.destroy(restoreMarkup, callback);
        },
    },
};
</script>
