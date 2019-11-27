let initCount = 0;

export default {
    computed: {
        /**
         * Get the window properties
         *
         * @returns {Object}
         */
        $window() {
            this.initialiseWindowEventHandlers();

            return this.$store.getters['window/properties'];
        },
    },

    methods: {
        /**
         * Add the window event handlers
         */
        async initialiseWindowEventHandlers() {
            const current = ++initCount;

            await this.$nextTick();

            if (current !== initCount) {
                return;
            }

            this.$store.dispatch('window/initialise');
        },
    },
};
