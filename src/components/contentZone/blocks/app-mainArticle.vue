<template>
  <div class="wrapper df">
    <div class="mainArticle">
      <router-link :to="'/'">
        <div class="img-wrapper">
          <img src="../../../assets/img.png" alt="" />
          <span class="haveVideo"></span>
        </div>
        <div class="infoWarpper">
          <span>29 серпня 2021, 13:00</span>
          <span>145 <i class="ic-eye"></i></span>
          <p class="title">
            AGROGEAR. Збереження вологи. Кожне господарство обирає найкращі
            технології під свої умови
          </p>
        </div>
      </router-link>
    </div>
    <div class="bannerBlock">
      <router-link :to="'/'">
        <div class="img-wrapper">
          <img src="../../../assets/img.png" alt="" />
          <span class="haveVideo"></span>
        </div>
        <div class="infoWarpper">
          <span>29 серпня 2021, 13:00</span>
          <span>145 <i class="ic-eye"></i></span>
          <p class="title">
            AGROGEAR. Збереження вологи. Кожне господарство обирає найкращі
            технології під свої умови
          </p>
          <p class="desc">
            AGROGEAR. Збереження вологи. Кожне господарство обирає найкращі
            технології ...
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-mainArticle",
};
</script>

<style lang="sass" scoped>
.wrapper
	@media (max-width: 768px)
		flex-direction: column
		.mainArticle
			position: static
			max-width: unset
			width: 100%
			margin-right: 0px 
			img
				width: 100%
			.title
				@include subtitle-3
				font-weight: 500
		.bannerBlock
			width: 100%
			max-width: unset
			margin-left: 0px
			a
				display: flex
				width: 100%
				@media (max-width: 640px)
					flex-direction: column
					.img-wrapper, .infoWarpper
						width: 100%
						position: static
						margin-left: 0px
			.img-wrapper,
				width: 50%
				margin-right: 15px 
				position: relative
				&::before
					content: ''
					position: absolute
					right: -15px
					background-color: $c-gray-light-1
					width: 1px
					height: 100%
			.infoWarpper
				margin-left: 15px
				width: 50%
				.title
					@include subtitle-3

.mainArticle::before
	content: ''
	position: absolute
	height: 100%
	width: 1px
	background-color: $c-gray-light-1
	top: 0px
	right: -15px
.mainArticle, .bannerBlock
	max-width: 408px
	margin-right: 15px
	position: relative
	.title
		@include subtitle-1
	span
		font-style: normal
		font-weight: 500
		font-size: 12px
		display: inline-flex
		align-items: center
		line-height: 135%
		letter-spacing: 0.01em
		color: #9E9EA7
		&:first-of-type
			margin-right: 10px
		i
			color: #9E9EA7
			font-size: 15px
			margin-left: 5px
	.desc
		@include text-3
.bannerBlock
	max-width: $sidebar-width
	margin-left: 15px
	margin-right: 0px
</style>
