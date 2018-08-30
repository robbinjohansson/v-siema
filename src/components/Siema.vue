<template>
    <div :class="selector">
        <slot></slot>
    </div>
</template>

<script>
import Siema from 'siema';

export default {
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

    data() {
        return {
            siema: '',
        };
    },

    computed: {
        currentSlide() {
            return this.siema.currentSlide;
        },
    },

    mounted() {
        this.init();
        if (this.autoplay) {
            setInterval(() => this.siema.next(), this.autoplayDuration);
        }
    },

    methods: {
        init() {
            this.siema = new Siema({
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
            this.siema.goTo(index, callback);
        },

        prev(howManySlides = 1, callback) {
            this.siema.prev(howManySlides, callback);
        },

        next(howManySlides = 1, callback) {
            this.siema.next(howManySlides, callback);
        },

        remove(index, callback) {
            this.siema.remove(index, callback);
        },

        insert(item, index, callback) {
            this.siema.insert(item, index, callback);
        },

        prepend(item, callback) {
            this.siema.prepend(item, callback);
        },

        append(item, callback) {
            this.siema.append(item, callback);
        },

        destroy(restoreMarkup = false, callback) {
            this.siema.destroy(restoreMarkup, callback);
        },
    },
};
</script>
