<template>
		<desktop-footer v-if="getSize == 'desktop'"></desktop-footer>
		<tablet-footer v-else-if="getSize == 'tablet'"></tablet-footer>
		<mob-footer v-else></mob-footer>
</template>

<script>
import { mapGetters } from 'vuex';

import desktopFooter from './app-footer-desktop.vue';
import tabletFooter from './app-footer-tablet.vue';
import mobFooter from './app-footer-mobile.vue';

export default {
	name: 'app-footer',
	components: {
		desktopFooter,
		tabletFooter,
		mobFooter,
	},
	computed: {
		...mapGetters(['getSize'])
	},
};
</script>

<style lang="sass" scoped>

</style>
