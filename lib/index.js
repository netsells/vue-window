import * as constants from './constants';
import mixin from './mixin';
import store from './store';

export { constants, mixin, store };

/**
 * Class to register this plugin
 */
class ReactiveWindow {
    /**
     * Install to Vue
     * @param {Object} Vue
     * @param {Object} options
     */
    static install(Vue, { store: userStore }) {
        if (!userStore) {
            throw new Error('Please provide a Vuex store');
        }

        Vue.mixin(mixin);
        userStore.registerModule('window', store);
    }
}

export default ReactiveWindow;
