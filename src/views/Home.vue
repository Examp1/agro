<template>
  <div class="home df fdc">
    <div class=" container wrapper df pb-2">
      <app-side-bar class="sidebar"></app-side-bar>
      <content-block class="main"></content-block>
    </div>
    <div class="container-full mt-2">
      <info-block></info-block>
    </div>
  </div>
</template>

<script>
import contentBlock from '../components/contentZone/app-content-wrapper.vue'
import appSideBar from "../components/sidebar/app-side-bar.vue";
import infoBlock from '../components/contentZone/blocks/app-infoBlock.vue'
export default {
  name: "Home",
  components: {
    appSideBar,
    contentBlock,
    infoBlock,
  },
};
</script>
<style lang="sass" scoped>
.sidebar
  max-width: $sidebar-width
  width: 100%
  margin-right: 15px
  background-color: $c-gray-light-0
  position: relative
  border-top: 4px solid #78B043
  padding: 25px 15px
main
  margin-left: 15px
  width: 100%
  position: relative
  &::before
    content: ''
    position: absolute
    height: 100%
    width: 1px
    background-color: $c-gray-light-1
    top: 0px
    left: -15px 
</style>
