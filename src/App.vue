<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
      <router-view />
      <div class="container-full">
        <top-side></top-side>
        <app-footer></app-footer>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import topSide from './components/footer/app-footerTopSide.vue';
import appHeader from "./components/header/app-header.vue";
import appFooter from "./components/footer/app-footer.vue";
export default {
  name: "Agro-Portal",
  components: {
    appHeader,
    appFooter,
    topSide,
  },
  methods: {
    ...mapActions(['setCurrentSize'])
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.setCurrentSize(window)
    })
    this.setCurrentSize(window)
    console.log(this.$route.fullPath);
  },
};
</script>

<style lang="sass">
@import ./assets/global
body
  background-color: #f6f6f6
.container
  background-color: #fff  
</style>