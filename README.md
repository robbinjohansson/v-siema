[![Latest Version on NPM](https://img.shields.io/npm/v/v-siema.svg?style=flat-square)](https://npmjs.com/package/v-siema)
[![Total Downloads on NPM](https://img.shields.io/npm/dt/v-siema.svg)](https://www.npmjs.com/package/v-siema)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/robbinfellow/v-siema/master.svg?style=flat-square)](https://travis-ci.org/robbinfellow/v-siema)

# V-Siema

Vue wrapper for Siema carousel.

> Siema is a lightweight (only 3kb gzipped) carousel plugin with no dependencies and no styling. As Brad Frost once said "do that shit yourself". It is 100% open source and [available on Github.](https://github.com/pawelgrzybek/siema)

Full docs with examples: [https://pawelgrzybek.com/siema/](https://pawelgrzybek.com/siema/).

## Demo

TBD

## Installation
```shell
$ yarn add v-siema --dev
# or ...
$ npm i v-siema --save-dev
```

Register the component:

```javascript
import Vue from 'vue';
import { Siema } from 'v-siema';

Vue.component('siema', Siema);
```

Alternatively using `Vue.use()` to register the component:

```javascript
import Siema from 'v-siema';

Vue.use(Siema);
```

## Usage

Display the component using any custom markup that fits your use case:

``` vue
<template>
    <div>
        <siema
            ref="siema"
            @init="init"
            @change="change"
            :loop="true"
        >
            <!-- The Slides -->
            <div v-for="n in 5">
                <img src="http://via.placeholder.com/1920x1080" :alt="'Slide ' + n">
            </div>
        </siema>

        <!-- Example using prev/next buttons -->
        <div>
            <a href="#" @click.prevent="prev">Prev</a>
            <a href="#" @click.prevent="next">Next</a>
        </div>
    </div>
</template>

<script>
import { Siema } from 'v-siema';
Vue.component('siema', Siema);

export default {
    methods: {
        init() {
            console.log('Initialized!');
        },

        change() {
            console.log('Changed!');
        },

        prev() {
            this.$refs.siema.prev();
        },
        
        next() {
            this.$refs.siema.next();
        },
    },
};
</script>
```

## Available properties

Prop                | Data Type  | Default  | Required   | Description
------------------- | ---------- | --------- | -------   | -----------
`autoplay`          | Boolean    | `false`   | `false`   | Enable autoplay
`autoplay-duration` | Number     | `3000`    | `false`   | Autoplay duration between slide change
`selector`          | String     | `siema`   | `false`   | The selector to use as a carousel
`duration`          | Number     | `500`     | `false`   | Slide transition duration in milliseconds
`easing`            | String     | `ease`    | `false`   | CSS transition-timing-function — describes acceleration curve
`per-page`          | Number     | `1`       | `false`   | The number of slides to be shown per page
`start-index`       | Number     | `0`       | `false`   | Index (zero-based) of the starting slide
`draggable`         | Boolean    | `true`    | `false`   | Use dragging and touch swiping
`multiple-drag`     | Boolean    | `true`    | `false`   | Allow dragging to move multiple slides
`threshold`         | Number     | `20`      | `false`   | Touch and mouse dragging threshold (in px)
`loop`              | Boolean    | `false`   | `false`   | Enable loop
`rtl`               | Boolean    | `false`   | `false`   | Enables layout for languages written from right to left
`@init`             | Function   |           | `false`   | Runs immediately after initialization
`@change`           | Function   |           | `false`   | Runs after slide change

## API

All of [Siema's methods](https://github.com/pawelgrzybek/siema#api) are available:

**`this.$refs.siema.prev(howManySlides = 1, callback);`**  
Go to previous item. Optionally pass `howManySlides` (number) and `callback` (function).

**`this.$refs.siema.next(howManySlides = 1, callback);`**  
Go to next item. Optionally pass `howManySlides` (number) and `callback` (function).

**`this.$refs.siema.goTo(index, callback);`**  
Go to item at particular `index` (number). Optionally pass `callback` (function).

**`this.$refs.siema.remove(index, callback);`**  
Remove item at particular `index` (number). Optionally pass `callback` (function).

**`this.$refs.siema.insert(item, index, callback);`**  
Insert new `item` (DOM element) at specific `index` (number). Optionally pass `callback` (function).

**`this.$refs.siema.prepend(item, callback);`**  
Prepend new `item` (DOM element). Optionally pass `callback` (function).

**`this.$refs.siema.append(item, callback);`**  
Append new `item` (DOM element). Optionally pass `callback` (function).

**`this.$refs.siema.destroy(restoreMarkup = false, callback);`**  
Remove all event listeners on the instance. Use `restoreMarkup` to restore the initial markup inside selector. Optionally pass `callback` (function).

**`this.$refs.siema.currentSlide;`**  
Prints current slide index.

### Extras

**`this.$refs.siema.init();`**  
Initiate the slider instance. Useful for when example the `destroy()` method is being used and you'd want a way to re-init the slider manually. Please note that the slider component is automatically initiated when mounted.

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Credits

* [Robbin Johansson](https://github.com/robbinfellow)
* [pawelgrzybek/siema](https://github.com/pawelgrzybek/siema)
* [spatie/skeleton-vue](https://github.com/spatie/skeleton-vue)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
