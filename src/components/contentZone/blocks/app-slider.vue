<template>
  <div>
	<slot/>
	<Flickity class="slider" :options="flickityOptions" ref="flickity">
    <router-link
      :to="'/'"
      class="slide"
      v-for="slide in slides"
      :key="slide.id"
    >
      <img :src="slide.img" :alt="slide.img" @load="imgLoad"/>
      <div class="infoWarpper">
        <span>{{ slide.date }}</span
        ><span>{{ slide.view }} <i class="ic-eye"></i></span>
        <p class="title">
          {{ slide.text }}
        </p>
      </div>
    </router-link>
  </Flickity>
  </div>
</template>

<script>
// import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Flickity from "vue-flickity";
export default {
  name: "app-slider",
  components: {
    Flickity,
    // VueSlickCarousel,
  },
  data() {
    return {
      slides: [
        {
          id: 12,
          img: "https://via.placeholder.com/150",
          date: "29 серпня 2021 13:00",
          view: "145",
          text: "AGROGEAR. Збереження вологи. Кожне господарство обирає найкращі технології під свої умови",
        },
        {
          id: 13,
          img: "https://via.placeholder.com/300",
          date: "29 серпня 2021 13:00",
          view: "145",
          text: "AGROGEAR. asdasdasdasЗбереження вологи. Кожне господарство обирає найкращі технології під свої умови",
        },
        {
          id: 14,
          img: "https://via.placeholder.com/300",
          date: "29 серпня 2021 13:00",
          view: "145",
          text: "AGROGEAR. asdasdasdasЗбереження вологи. Кожне господарство обирає найкращі технології під свої умови",
        },
      ],
      flickityOptions: {
		prevNextButtons: false,
        pageDots: true,
		autoPlay: 5000,
		// pauseAutoPlayOnHover: false
        // wrapAround: true
      },
    };
  },
  methods: {
		imgLoad() {
			this.$refs.flickity.resize();
		}
	},
};
</script>

<style lang="sass" scoped>
@import '@/assets/sass/blocks'
.slider
	width: 100%
	margin-top: 20px
.slide
	width: 100%
	img
		width: 100%
.infoWarpper .title
	@include subtitle-3	
</style>
