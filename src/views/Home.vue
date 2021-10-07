<template>
  <div class="home">
    <!-- <div class=" container wrapper df pb-2"> -->
      <app-side-bar class="sidebar"></app-side-bar>
      <main-article></main-article>
      <content-block class="main"></content-block>
    <!-- </div> -->
    <!-- <div class="container-full mt-2"> -->
      <info-block></info-block>
    <!-- </div> -->
  </div>
</template>

<script>
import mainArticle from "../components/contentZone/blocks/app-mainArticle.vue";
import contentBlock from '../components/contentZone/app-content-wrapper.vue'
import appSideBar from "../components/sidebar/app-side-bar.vue";
import infoBlock from '../components/contentZone/blocks/app-infoBlock.vue'
export default {
  name: "Home",
  components: {
    appSideBar,
    contentBlock,
    infoBlock,
    mainArticle,
  },
};
</script>
<style lang="sass" scoped>
.sidebar
  // max-width: $sidebar-width
  width: 100%
  margin-right: 15px
  background-color: $c-gray-light-0
  position: relative
  border-top: 4px solid #78B043
  padding: 25px 15px
  @media (min-width: 640px)
    &::before
      content: ''
      position: absolute
      height: 100%
      width: 1px
      background-color: $c-gray-light-1
      top: 0px
      right: -15px 
main
  width: 100%
  position: relative
</style>
