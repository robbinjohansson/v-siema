import { Siema } from '../src';
import Vue from 'vue/dist/vue.js';

describe('Siema', () => {
    Vue.component('siema', Siema);

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="app">
                <siema
                    ref="siema"
                    :loop="true"
                >
                    <div>Slide 1</div>
                    <div>Slide 2</div>
                    <div>Slide 3</div>
                    <div>Slide 4</div>
                    <div>Slide 5</div>
                </siema>
            </div>
        `;
    });

    it('can mount', async () => {
        await createVm();

        expect(document.body.innerHTML).toMatchSnapshot();
    });
});

async function createVm() {
    const vm = new Vue({
        el: '#app',

        data() {
            return {
                slides: [
                    {
                        title: 'Slide 1',
                    },
                    {
                        title: 'Slide 2',
                    },
                    {
                        title: 'Slide 3',
                    },
                ],
            };
        },
    });

    await Vue.nextTick(() => {});

    return { app: vm, component: vm.$children[0] };
}
