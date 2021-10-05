<template>
    <desktop-header v-if="getSize == 'desktop'"></desktop-header>
    <tablet-header v-else></tablet-header>
</template>

<script>
import { mapGetters } from 'vuex'
import desktopHeader from './app-header-desktop.vue'
import tabletHeader from './app-header-tablet.vue'
export default {
  name: 'app-header',
  components: {
    desktopHeader,
    tabletHeader
  },
  computed: {
    ...mapGetters(['getSize'])
  },
};
</script>

<style lang="sass" scoped>

</style>
