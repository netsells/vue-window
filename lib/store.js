import { PROPERTIES, EVENTS } from './constants';

export default {
    namespaced: true,

    /**
     * The initial state
     *
     * @returns {Object}
     */
    state() {
        return {
            properties: PROPERTIES.reduce((acc, { name, defaultValue }) => ({
                ...acc,
                [name]: typeof window === 'object' ? window[name] : defaultValue,
            }), {}),

            initialised: false,
        };
    },

    getters: {
        /**
         * Get the window properties
         *
         * @param {Object} state
         *
         * @returns {Object}
         */
        properties(state) {
            return state.properties;
        },
    },

    mutations: {
        /**
         * Set window properties
         *
         * @param {Object} state
         * @param {Object} properties
         */
        setProperties(state, properties) {
            state.properties = {
                ...state.properties,
                ...properties,
            };
        },

        /**
         * Set state as initialised
         *
         * @param {Object} state
         */
        setInitialised(state) {
            state.initialised = true;
        },
    },

    actions: {
        /**
         * Register the event listeners
         *
         * @param {Object} context
         */
        initialise({ dispatch, state, commit }) {
            if (typeof window !== 'object' || state.initialised) {
                return;
            }

            EVENTS.forEach(type => {
                window.addEventListener(
                    type,
                    () => dispatch('handleEvent', { type })
                );
            });

            commit('setProperties', getInitialState().properties); // In case of SSR
            commit('setInitialised');
        },

        /**
         * Handle an event
         *
         * @param {Object} context
         * @param {Object} options
         */
        handleEvent({ commit }, { type }) {
            const matchingProperties = properties
                .filter(prop => prop.event === type)
                .map(({ name }) => name);

            commit(
                'setProperties',
                matchingProperties.reduce((acc, name) => ({
                    ...acc,
                    [name]: window[name],
                }), {})
            );
        },
    },
};
