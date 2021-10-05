<template>
  <main>
    <main-article></main-article>
    <br />
    <i class="hr"></i>
    <specialArticle></specialArticle>
    <div class="ads">
      <img src="https://via.placeholder.com/689x122" alt="" />
    </div>
    <div class="df jcsb tablet-Lg">
      <div class="innerWrap df fdc">
        <article-list class="articleList"></article-list>
        <slider>
          <div class="df jcsb ait border-b">
            <h2 data-v-b8225eb0="">h2-Клуб агроефективності</h2>
            <a
              href="/"
              aria-current="page"
              class="router-link-exact-active router-link-active"
              >
              <i class="ic-arrow-right"></i
            ></a>
          </div>
        </slider>
        <div class="df jcsb dbSlider">
          <slider v-for="i in 2" :key="i"></slider>
        </div>
      </div>
      <right-sidebar class="rSidebar"></right-sidebar>
    </div>
  </main>
</template>

<script>
import mainArticle from "./blocks/app-mainArticle.vue";
import specialArticle from "./blocks/app-specialArticle.vue";
import articleList from "./blocks/app-articleList.vue";
import rightSidebar from "./blocks/app-rSidebar.vue";
import slider from "./blocks/app-slider.vue";
export default {
  name: "app-content-wrapper",
  components: {
    mainArticle,
    specialArticle,
    articleList,
    rightSidebar,
    slider,
  },
};
</script>

<style lang="sass" scoped>
.ads
  margin: 30px 0px
  position: relative
  img
    width: 100%
  &::before, &::after
    content: ''
    position: absolute
    width: 100%
    height: 1px
    background-color: $c-gray-light-1
    left: 0px
  &::before
    top: -15px
  &::after
    bottom: -15px
.innerWrap
  // width: calc(70% - 15px)
  max-width: 418px
  @media (max-width: 768px)
    max-width: unset
.test
  width: 100%
.articleList
  margin-bottom: 15px
  margin-top: 0px
  position: relative
.rSidebar
  max-width: 250px
  @media (max-width: 768px)
    max-width: unset
.dbSlider
  & > div
    width: calc(50% - 15px)
.tablet-Lg
  @media (max-width: 768px)
    flex-direction: column
</style>
